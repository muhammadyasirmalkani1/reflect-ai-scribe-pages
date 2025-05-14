
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, List } from "lucide-react";

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
      { title: "Navigating the interface", url: "#" }
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
      { title: "Tags & Categories", url: "#" }
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
      { title: "Project management", url: "#" }
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
      { title: "Browser extension", url: "#" }
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
      { title: "Contact support", url: "#" }
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
      { title: "Data export", url: "#" }
    ]
  }
];

const popularArticles = [
  "Getting started with Reflect",
  "How to use the AI assistant",
  "Connecting notes with the knowledge graph",
  "Importing data from other tools",
  "Setting up team spaces"
];

const Docs = () => {
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
              Documentation <span className="cosmic-text-gradient">Center</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything you need to get the most out of Reflect.
            </motion.p>
            
            {/* View All Pages Button */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/docs/all">
                <Button variant="outline" className="border-reflect-purple/30 hover:bg-reflect-purple/10">
                  <List className="mr-2" size={18} /> View All Pages
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search the documentation..." 
                  className="w-full bg-reflect-dark/70 border border-white/20 focus:border-reflect-purple text-white rounded-lg px-4 py-3 pl-12 outline-none"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {popularArticles.map((article, index) => (
                  <button 
                    key={index} 
                    className="text-sm bg-reflect-dark/80 border border-white/10 hover:border-reflect-purple/50 rounded-full px-4 py-1 transition-colors"
                  >
                    {article}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Documentation Categories */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-reflect-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-reflect-purple">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <Link to={article.url} className="text-gray-300 hover:text-reflect-purple flex items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Link to={`/docs/${category.name.toLowerCase()}`}>
                  <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white w-full">
                    View All
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Support Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-reflect-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 text-reflect-purple">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-300 mb-6">
                Join our active community forums to get help from other Reflect users and share your knowledge.
              </p>
              
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Join Community
              </Button>
            </motion.div>
            
            <motion.div
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-reflect-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 text-reflect-purple">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-6">
                Need personalized help? Our support team is ready to assist you with any technical issues.
              </p>
              
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Contact Support
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Video Tutorials */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Video Tutorials</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <motion.div
                key={index}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3`}
                    alt="Tutorial thumbnail" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-reflect-purple/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {index === 0 ? "Getting Started with Reflect" : 
                     index === 1 ? "Advanced Note Linking Techniques" : 
                     "Using AI to Enhance Your Notes"}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {index === 0 ? "A comprehensive guide for new users" : 
                     index === 1 ? "Learn how to create powerful connections" : 
                     "Leverage AI to get more from your notes"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white px-8">
              View All Tutorials
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Docs;
