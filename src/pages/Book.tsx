import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  consultation_type: "online" | "offline" | "both";
  consultation_fee: number | null;
  experience_years: number | null;
  bio: string | null;
};

type PastSession = {
  id: string;
  appointment_date: string;
  appointment_time: string;
  doctor_name: string;
  doctor_specialty: string;
  mode: "online" | "offline";
  doctor_notes: string | null;
  status: string;
};

export default function Book() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [pastSessions, setPastSessions] = useState<PastSession[]>([]);
  const [preferredDoctors, setPreferredDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  const userId = typeof window !== "undefined" ? localStorage.getItem("session_user_id") : null;
  const [patientId, setPatientId] = useState<string | null>(null);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Fetch patient ID
  useEffect(() => {
    const fetchPatientId = async () => {
      if (!userId) return;
      
      try {
        const { data: patientData, error } = await supabase
          .from("patients")
          .select("id")
          .eq("user_id", userId)
          .single();

        if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
          console.error("Error fetching patient:", error);
          return;
        }

        if (patientData) {
          setPatientId(patientData.id);
        }
      } catch (error) {
        console.error("Error fetching patient ID:", error);
      }
    };

    fetchPatientId();
  }, [userId]);

  // Fetch approved doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data: doctorsData, error } = await supabase
          .from("doctors")
          .select(`
            id,
            specialty,
            qualifications,
            consultation_type,
            consultation_fee,
            experience_years,
            bio,
            users!inner(name)
          `)
          .eq("status", "approved")
          .order("specialty");

        if (error) throw error;

        const formattedDoctors = doctorsData?.map(doc => ({
          id: doc.id,
          name: doc.users.name,
          specialty: doc.specialty,
          qualifications: doc.qualifications,
          consultation_type: doc.consultation_type,
          consultation_fee: doc.consultation_fee,
          experience_years: doc.experience_years,
          bio: doc.bio
        })) || [];

        setDoctors(formattedDoctors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast({ title: "Error loading doctors", variant: "destructive" });
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Fetch past sessions
  useEffect(() => {
    const fetchPastSessions = async () => {
      if (!patientId) return;
      
      try {
        const { data: sessionsData, error } = await supabase
          .from("appointments")
          .select(`
            id,
            appointment_date,
            appointment_time,
            mode,
            doctor_notes,
            status,
            doctors!inner(
              specialty,
              users!inner(name)
            )
          `)
          .eq("patient_id", patientId)
          .in("status", ["completed", "cancelled"])
          .order("appointment_date", { ascending: false })
          .limit(10);

        if (error) throw error;

        const formattedSessions = sessionsData?.map(session => ({
          id: session.id,
          appointment_date: session.appointment_date,
          appointment_time: session.appointment_time,
          doctor_name: session.doctors.users.name,
          doctor_specialty: session.doctors.specialty,
          mode: session.mode,
          doctor_notes: session.doctor_notes,
          status: session.status
        })) || [];

        setPastSessions(formattedSessions);
      } catch (error) {
        console.error("Error fetching past sessions:", error);
      }
    };

    fetchPastSessions();
  }, [patientId]);

  // Get unique specialties for filtering
  const specialties = ["all", ...Array.from(new Set(doctors.map(d => d.specialty)))];

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  // Get preferred doctors (doctors from past sessions)
  useEffect(() => {
    if (pastSessions.length > 0) {
      const preferredDoctorIds = Array.from(new Set(pastSessions.map(s => s.doctor_name)));
      const preferred = doctors.filter(doc => preferredDoctorIds.includes(doc.name));
      setPreferredDoctors(preferred);
    }
  }, [pastSessions, doctors]);

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !selectedDoctor) {
      toast({ title: "Please select a date, time, and doctor", variant: "destructive" });
      return;
    }

    if (!patientId) {
      toast({ title: "Please login as a patient to book appointments", variant: "destructive" });
      return;
    }

    try {
      const { error } = await supabase
        .from("appointments")
        .insert({
          patient_id: patientId,
          doctor_id: selectedDoctor,
          appointment_date: selectedDate.toISOString().split('T')[0],
          appointment_time: selectedTime,
          mode: "online", // Default to online for now
          status: "scheduled",
          payment_status: "pending"
        });

      if (error) throw error;

      toast({ title: "Appointment booked successfully!" });
      
      // Reset form
      setSelectedDate(new Date());
      setSelectedTime("");
      setSelectedDoctor("");
    } catch (error: any) {
      toast({ title: "Booking failed", description: error.message, variant: "destructive" });
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Book an Appointment</h1>
          <p className="text-muted-foreground">Schedule your consultation with our healthcare professionals.</p>
        </div>

        <Tabs defaultValue="book" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="book">Book New Appointment</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
            <TabsTrigger value="doctors">Browse Doctors</TabsTrigger>
          </TabsList>

          <TabsContent value="book" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date & Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Choose Date</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Available Times</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="text-sm"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select Doctor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Available Doctors</h3>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredDoctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <Button 
                      onClick={handleBooking}
                      className="w-full"
                      size="lg"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Past Sessions</CardTitle>
                <p className="text-sm text-muted-foreground">Review your previous appointments and doctor notes</p>
              </CardHeader>
              <CardContent>
                {pastSessions.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No past sessions found. Book your first appointment to see your history here.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pastSessions.map((session) => (
                      <Card key={session.id} className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">{session.doctor_name}</h4>
                              <Badge variant="secondary">{session.doctor_specialty}</Badge>
                              <Badge variant={session.status === "completed" ? "default" : "destructive"}>
                                {session.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {new Date(session.appointment_date).toLocaleDateString()} at {session.appointment_time}
                            </p>
                            <p className="text-sm">
                              Mode: <Badge variant="outline">{session.mode}</Badge>
                            </p>
                            {session.doctor_notes && (
                              <div className="mt-3 p-3 bg-muted rounded-md">
                                <h5 className="font-medium text-sm mb-1">Doctor's Notes:</h5>
                                <p className="text-sm text-muted-foreground">{session.doctor_notes}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Doctors</CardTitle>
                <p className="text-sm text-muted-foreground">Browse and filter our approved healthcare professionals</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Search doctors by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Filter by specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty === "all" ? "All Specialties" : specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Doctors Section */}
                {preferredDoctors.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      ⭐ Your Preferred Doctors
                      <Badge variant="secondary">{preferredDoctors.length}</Badge>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {preferredDoctors.map((doctor) => (
                        <Card key={doctor.id} className="p-4 border-2 border-yellow-200 bg-yellow-50/50">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{doctor.name}</h4>
                              <Badge variant="secondary">{doctor.specialty}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{doctor.qualifications}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <Badge variant="outline">{doctor.consultation_type}</Badge>
                              {doctor.consultation_fee && (
                                <span className="text-green-600 font-medium">
                                  ₹{doctor.consultation_fee}
                                </span>
                              )}
                              {doctor.experience_years && (
                                <span className="text-muted-foreground">
                                  {doctor.experience_years} years exp.
                                </span>
                              )}
                            </div>
                            {doctor.bio && (
                              <p className="text-sm text-muted-foreground line-clamp-2">{doctor.bio}</p>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Doctors Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    All Available Doctors
                    <Badge variant="secondary">{filteredDoctors.length}</Badge>
                  </h3>
                  {filteredDoctors.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No doctors found matching your criteria.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredDoctors.map((doctor) => (
                        <Card key={doctor.id} className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{doctor.name}</h4>
                              <Badge variant="secondary">{doctor.specialty}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{doctor.qualifications}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <Badge variant="outline">{doctor.consultation_type}</Badge>
                              {doctor.consultation_fee && (
                                <span className="text-green-600 font-medium">
                                  ₹{doctor.consultation_fee}
                                </span>
                              )}
                              {doctor.experience_years && (
                                <span className="text-muted-foreground">
                                  {doctor.experience_years} years exp.
                                </span>
                              )}
                            </div>
                            {doctor.bio && (
                              <p className="text-sm text-muted-foreground line-clamp-2">{doctor.bio}</p>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
