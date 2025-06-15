import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import PricingPage from "./pages/PricingPage";
import Company from "./pages/Company";
import Blog from "./pages/Blog";
import Docs from "./pages/Docs";
import DocsList from "./pages/DocsList";
import DocsCategoryPage from "./pages/docs/DocsCategoryPage";
import WelcomeToReflect from "./pages/docs/WelcomeToReflect";
import InstallingReflect from "./pages/docs/InstallingReflect";
import CreatingYourFirstNote from "./pages/docs/CreatingYourFirstNote";
import NavigatingTheInterface from "./pages/docs/NavigatingTheInterface";
import AIAssistant from "./pages/docs/AIAssistant";
import KnowledgeGraph from "./pages/docs/KnowledgeGraph";
import SmartLinking from "./pages/docs/SmartLinking";
import TagsCategories from "./pages/docs/TagsCategories";
import BuildingPersonalWiki from "./pages/docs/BuildingPersonalWiki";
import ResearchWorkflows from "./pages/docs/ResearchWorkflows";
import ProjectManagement from "./pages/docs/ProjectManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/all" element={<DocsList />} />
          {/* NEW: Category pages */}
          <Route path="/docs/getting-started" element={<DocsCategoryPage />} />
          <Route path="/docs/features" element={<DocsCategoryPage />} />
          <Route path="/docs/guides" element={<DocsCategoryPage />} />
          <Route path="/docs/integrations" element={<DocsCategoryPage />} />
          <Route path="/docs/troubleshooting" element={<DocsCategoryPage />} />
          <Route path="/docs/advanced" element={<DocsCategoryPage />} />
          {/* Individual article pages */}
          <Route path="/docs/welcome-to-reflect" element={<WelcomeToReflect />} />
          <Route path="/docs/installing-reflect" element={<InstallingReflect />} />
          <Route path="/docs/creating-your-first-note" element={<CreatingYourFirstNote />} />
          <Route path="/docs/navigating-the-interface" element={<NavigatingTheInterface />} />
          <Route path="/docs/ai-assistant" element={<AIAssistant />} />
          <Route path="/docs/knowledge-graph" element={<KnowledgeGraph />} />
          <Route path="/docs/smart-linking" element={<SmartLinking />} />
          <Route path="/docs/tags-categories" element={<TagsCategories />} />
          {/* NEW: Guide pages */}
          <Route path="/docs/building-personal-wiki" element={<BuildingPersonalWiki />} />
          <Route path="/docs/research-workflows" element={<ResearchWorkflows />} />
          <Route path="/docs/project-management" element={<ProjectManagement />} />
          {/* Dynamic fallback: */}
          <Route path="/docs/:category" element={<DocsCategoryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
