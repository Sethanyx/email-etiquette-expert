
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BestPractices from "./components/BestPractices";
import CourseRelated from "./components/CourseRelated";
import AcademicResearch from "./components/AcademicResearch";
import AdministrativeAffairs from "./components/AdministrativeAffairs";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pt-16"> {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<BestPractices />} />
            <Route path="/home" element={<Index />} /> 
            <Route path="/course-related" element={<CourseRelated />} />
            <Route path="/academic-research" element={<AcademicResearch />} />
            <Route path="/administrative" element={<AdministrativeAffairs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
