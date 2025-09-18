-- Create enum types
CREATE TYPE public.user_role AS ENUM ('admin', 'doctor', 'patient');
CREATE TYPE public.doctor_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE public.appointment_mode AS ENUM ('online', 'offline');
CREATE TYPE public.appointment_status AS ENUM ('scheduled', 'completed', 'cancelled', 'no_show');
CREATE TYPE public.payment_status AS ENUM ('pending', 'paid', 'failed');
CREATE TYPE public.consultation_type AS ENUM ('online', 'offline', 'both');

-- Users table
CREATE TABLE public.users (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    phone TEXT,
    role user_role NOT NULL DEFAULT 'patient',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Services/Specialties table
CREATE TABLE public.services (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Doctors table
CREATE TABLE public.doctors (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    qualifications TEXT NOT NULL,
    specialty TEXT NOT NULL,
    experience_years INTEGER,
    consultation_type consultation_type NOT NULL DEFAULT 'both',
    consultation_fee DECIMAL(10,2),
    status doctor_status NOT NULL DEFAULT 'pending',
    bio TEXT,
    profile_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Doctor availability slots
CREATE TABLE public.doctor_availability (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    doctor_id UUID NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0 = Sunday, 6 = Saturday
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Patients table
CREATE TABLE public.patients (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    age INTEGER,
    gender TEXT,
    emergency_contact TEXT,
    medical_history TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Appointments table
CREATE TABLE public.appointments (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    patient_id UUID NOT NULL REFERENCES public.patients(id),
    doctor_id UUID NOT NULL REFERENCES public.doctors(id),
    service_id UUID REFERENCES public.services(id),
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    mode appointment_mode NOT NULL,
    meet_link TEXT,
    patient_notes TEXT,
    doctor_notes TEXT,
    status appointment_status NOT NULL DEFAULT 'scheduled',
    payment_status payment_status NOT NULL DEFAULT 'pending',
    total_amount DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctor_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policies (for now, allow all operations since we're skipping auth)
CREATE POLICY "Allow all operations on users" ON public.users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on services" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on doctors" ON public.doctors FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on doctor_availability" ON public.doctor_availability FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on patients" ON public.patients FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on appointments" ON public.appointments FOR ALL USING (true) WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_doctors_updated_at
    BEFORE UPDATE ON public.doctors
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_patients_updated_at
    BEFORE UPDATE ON public.patients
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at
    BEFORE UPDATE ON public.appointments
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample services
INSERT INTO public.services (name, description, icon) VALUES
('Stress Management', 'Professional counseling for stress and anxiety', '🧠'),
('Child Therapy', 'Specialized therapy for children and adolescents', '🧸'),
('Depression Treatment', 'Comprehensive treatment for depression', '💙'),
('Couples Counseling', 'Relationship and marriage counseling', '💕'),
('Addiction Recovery', 'Support for addiction and substance abuse', '🌟'),
('PTSD Treatment', 'Trauma-focused therapy and treatment', '🛡️');

-- Insert sample doctors
INSERT INTO public.users (name, email, phone, role) VALUES
('Dr. Sarah Johnson', 'sarah.johnson@aiman.com', '+1234567890', 'doctor'),
('Dr. Michael Chen', 'michael.chen@aiman.com', '+1234567891', 'doctor'),
('Dr. Emily Rodriguez', 'emily.rodriguez@aiman.com', '+1234567892', 'doctor'),
('Admin User', 'admin@aiman.com', '+1234567893', 'admin');

-- Insert doctor profiles
INSERT INTO public.doctors (user_id, qualifications, specialty, experience_years, consultation_type, consultation_fee, status, bio)
SELECT 
    u.id,
    CASE 
        WHEN u.name = 'Dr. Sarah Johnson' THEN 'MD Psychiatry, PhD Clinical Psychology'
        WHEN u.name = 'Dr. Michael Chen' THEN 'MD Psychiatry, Certified in Cognitive Behavioral Therapy'
        WHEN u.name = 'Dr. Emily Rodriguez' THEN 'PhD Clinical Psychology, Licensed Family Therapist'
    END,
    CASE 
        WHEN u.name = 'Dr. Sarah Johnson' THEN 'Stress Management'
        WHEN u.name = 'Dr. Michael Chen' THEN 'Depression Treatment'
        WHEN u.name = 'Dr. Emily Rodriguez' THEN 'Child Therapy'
    END,
    CASE 
        WHEN u.name = 'Dr. Sarah Johnson' THEN 8
        WHEN u.name = 'Dr. Michael Chen' THEN 12
        WHEN u.name = 'Dr. Emily Rodriguez' THEN 6
    END,
    'both',
    CASE 
        WHEN u.name = 'Dr. Sarah Johnson' THEN 150.00
        WHEN u.name = 'Dr. Michael Chen' THEN 175.00
        WHEN u.name = 'Dr. Emily Rodriguez' THEN 125.00
    END,
    'approved',
    CASE 
        WHEN u.name = 'Dr. Sarah Johnson' THEN 'Specializing in stress management and anxiety disorders with over 8 years of experience.'
        WHEN u.name = 'Dr. Michael Chen' THEN 'Expert in depression treatment and cognitive behavioral therapy with 12 years of clinical experience.'
        WHEN u.name = 'Dr. Emily Rodriguez' THEN 'Dedicated child and family therapist with extensive experience in adolescent mental health.'
    END
FROM public.users u
WHERE u.role = 'doctor';

-- Insert sample availability for doctors (Monday to Friday, 9 AM to 5 PM)
INSERT INTO public.doctor_availability (doctor_id, day_of_week, start_time, end_time)
SELECT 
    d.id,
    generate_series(1, 5) as day_of_week, -- Monday to Friday
    '09:00'::time,
    '17:00'::time
FROM public.doctors d
WHERE d.status = 'approved';