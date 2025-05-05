
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeditationLibrary from "./pages/MeditationLibrary";
import Signup from "./pages/Signup";
import Premium from "./pages/Premium";
import Sleep from "./pages/Sleep";
import Music from "./pages/Music";
import StressAnxiety from "./pages/StressAnxiety";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meditation-library" element={<MeditationLibrary />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/music" element={<Music />} />
          <Route path="/stress-anxiety" element={<StressAnxiety />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
