import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import JoinUs from "./pages/JoinUs";
import KnowledgeHub from "./pages/KnowledgeHub";
import ArticlePage from "./pages/ArticlePage";
import Publish from "./pages/Publish";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Next50 from "./pages/Next50";
import Next50Dashboard from "./pages/Next50Dashboard";
import HealthCare from "./pages/HealthCare";
import TreeVolution from "./pages/TreeVolution";
import Events from "./pages/Events";


const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* Routes that render as standalone (no global Navbar/Footer) */
const STANDALONE_ROUTES = ["/next-100/dashboard"];

function AppLayout() {
  const { pathname } = useLocation();
  const isStandalone = STANDALONE_ROUTES.some(r => pathname.startsWith(r));

  return (
    <>
      <ScrollToTop />
      {!isStandalone && <Navbar />}
      {!isStandalone && <SocialRail />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/next-100" element={<Next50 />} />
        <Route path="/next-100/dashboard" element={<Next50Dashboard />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/knowledge-hub/:slug" element={<ArticlePage />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/health-care" element={<HealthCare />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tree-volution" element={<TreeVolution />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isStandalone && <Footer />}
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
