import { ReactNode } from "react";
import { 
  Zap, 
  Lightbulb, 
  BookOpen, 
  Grid, 
  AlertCircle, 
  Settings
} from "lucide-react";

interface Article {
  title: string;
  url: string;
}

interface DocCategory {
  name: string;
  icon: ReactNode;
  articles: Article[];
}

export const docCategories: DocCategory[] = [
  {
    name: "Getting Started",
    icon: <Zap className="w-6 h-6" />,
    articles: [
      { title: "Welcome to Reflect", url: "/docs/welcome-to-reflect" },
      { title: "Installing Reflect", url: "/docs/installing-reflect" },
      { title: "Creating your first note", url: "/docs/creating-your-first-note" },
      { title: "Navigating the interface", url: "/docs/navigating-the-interface" }
    ]
  },
  {
    name: "Features",
    icon: <Lightbulb className="w-6 h-6" />,
    articles: [
      { title: "AI Assistant", url: "/docs/ai-assistant" },
      { title: "Knowledge Graph", url: "/docs/knowledge-graph" },
      { title: "Smart Linking", url: "/docs/smart-linking" },
      { title: "Tags & Categories", url: "/docs/tags-categories" }
    ]
  },
  {
    name: "Guides",
    icon: <BookOpen className="w-6 h-6" />,
    articles: [
      { title: "Building a personal wiki", url: "#" },
      { title: "Research workflows", url: "#" },
      { title: "Meeting notes", url: "#" },
      { title: "Project management", url: "#" }
    ]
  },
  {
    name: "Integrations",
    icon: <Grid className="w-6 h-6" />,
    articles: [
      { title: "Notion import", url: "#" },
      { title: "Slack integration", url: "#" },
      { title: "API documentation", url: "#" },
      { title: "Browser extension", url: "#" }
    ]
  },
  {
    name: "Troubleshooting",
    icon: <AlertCircle className="w-6 h-6" />,
    articles: [
      { title: "Sync issues", url: "#" },
      { title: "Performance optimization", url: "#" },
      { title: "Common errors", url: "#" },
      { title: "Contact support", url: "#" }
    ]
  },
  {
    name: "Advanced",
    icon: <Settings className="w-6 h-6" />,
    articles: [
      { title: "Custom templates", url: "#" },
      { title: "Keyboard shortcuts", url: "#" },
      { title: "Advanced search", url: "#" },
      { title: "Data export", url: "#" }
    ]
  }
];

export const popularArticles = [
  "Getting started with Reflect",
  "How to use the AI assistant",
  "Connecting notes with the knowledge graph",
  "Importing data from other tools",
  "Setting up team spaces"
];
