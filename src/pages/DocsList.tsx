
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search } from "lucide-react";

// Categories and articles - same structure as in the Docs.tsx page
const docCategories = [
  {
    name: "Getting Started",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    articles: [
      { title: "Welcome to Reflect", url: "#" },
      { title: "Installing Reflect", url: "#" },
      { title: "Creating your first note", url: "#" },
      { title: "Navigating the interface", url: "#" },
      { title: "Understanding the basics", url: "#" },
      { title: "Account setup", url: "#" },
      { title: "Basic configuration", url: "#" },
      { title: "Mobile app setup", url: "#" }
    ]
  },
  {
    name: "Features",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    articles: [
      { title: "AI Assistant", url: "#" },
      { title: "Knowledge Graph", url: "#" },
      { title: "Smart Linking", url: "#" },
      { title: "Tags & Categories", url: "#" },
      { title: "Advanced note formatting", url: "#" },
      { title: "Custom templates", url: "#" },
      { title: "Note versioning", url: "#" },
      { title: "AI-powered suggestions", url: "#" },
      { title: "Content summarization", url: "#" }
    ]
  },
  {
    name: "Guides",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    articles: [
      { title: "Building a personal wiki", url: "#" },
      { title: "Research workflows", url: "#" },
      { title: "Meeting notes", url: "#" },
      { title: "Project management", url: "#" },
      { title: "Academic research", url: "#" },
      { title: "Book summaries", url: "#" },
      { title: "Daily journaling", url: "#" },
      { title: "Learning frameworks", url: "#" }
    ]
  },
  {
    name: "Integrations",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    articles: [
      { title: "Notion import", url: "#" },
      { title: "Slack integration", url: "#" },
      { title: "API documentation", url: "#" },
      { title: "Browser extension", url: "#" },
      { title: "Zapier connection", url: "#" },
      { title: "Google Drive sync", url: "#" },
      { title: "Calendar integration", url: "#" }
    ]
  },
  {
    name: "Troubleshooting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    articles: [
      { title: "Sync issues", url: "#" },
      { title: "Performance optimization", url: "#" },
      { title: "Common errors", url: "#" },
      { title: "Contact support", url: "#" },
      { title: "Connection problems", url: "#" },
      { title: "Data recovery", url: "#" },
      { title: "Mobile app troubleshooting", url: "#" }
    ]
  },
  {
    name: "Advanced",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    articles: [
      { title: "Custom templates", url: "#" },
      { title: "Keyboard shortcuts", url: "#" },
      { title: "Advanced search", url: "#" },
      { title: "Data export", url: "#" },
      { title: "Automation workflows", url: "#" },
      { title: "Custom CSS theming", url: "#" },
      { title: "API advanced usage", url: "#" },
      { title: "Plugin development", url: "#" }
    ]
  }
];

const DocsList = () => {
  return (
    <div className="min-h-screen bg-reflect-dark overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-reflect-purple/10 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              All <span className="cosmic-text-gradient">Documentation</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Browse our complete documentation library.
            </motion.p>
            
            <motion.div
              className="max-w-2xl mx-auto relative mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search all documentation..." 
                  className="w-full bg-reflect-dark/70 border border-white/20 focus:border-reflect-purple text-white rounded-lg px-4 py-3 pl-12 outline-none"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Documentation Categories and Articles */}
      {docCategories.map((category, index) => (
        <motion.div 
          key={category.name}
          className="py-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center mb-8">
              <div className="bg-reflect-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-reflect-purple">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.articles.map((article, i) => (
                <Link to={article.url} key={i} className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-reflect-purple/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-400">
                    Learn more about {article.title.toLowerCase()} and how to use it effectively.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Pagination */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocsList;
