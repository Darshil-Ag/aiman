import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Conditions from "./pages/Conditions";
import Experts from "./pages/Experts";
import NotFound from "./pages/NotFound";
import DoctorSignup from "./pages/DoctorSignup";
import PatientSignup from "./pages/PatientSignup";
import Login from "./pages/Login";
import Availability from "./pages/Availability";
import Book from "./pages/Book";
import Admin from "./pages/Admin";
import DoctorDashboard from "./pages/DoctorDashboard";
import Confirm from "./pages/Confirm";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import ServiceDetail from "./pages/ServiceDetail";
import ConditionDetail from "./pages/ConditionDetail";
import Providers from "./pages/Providers";
import Resources from "./pages/Resources";
import ArticleDetail from "./pages/ArticleDetail";
import Help from "./pages/Help";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:serviceSlug/conditions/:conditionSlug" element={<ConditionDetail />} />
          <Route path="/providers" element={<Layout><Providers /></Layout>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/help" element={<Layout><Help /></Layout>} />
          <Route path="/conditions" element={<Layout><Conditions /></Layout>} />
          <Route path="/experts" element={<Layout><Experts /></Layout>} />
          <Route path="/doctor-signup" element={<DoctorSignup />} />
          <Route path="/patient-signup" element={<PatientSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/book" element={<Book />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/facilities" element={<Layout><Facilities /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
