
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Note-Taking with AI",
    excerpt: "How artificial intelligence is transforming the way we capture and connect information.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "AI",
    author: "Alex Chen",
    date: "May 10, 2025"
  },
  {
    id: 2,
    title: "Building a Second Brain with Reflect",
    excerpt: "Practical strategies for creating a knowledge management system that works for you.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Productivity",
    author: "Sarah Johnson",
    date: "May 2, 2025"
  },
  {
    id: 3,
    title: "The Science of Connected Thinking",
    excerpt: "Research-backed insights on how linking ideas leads to better creativity and problem-solving.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Research",
    author: "Michael Rodriguez",
    date: "April 28, 2025"
  },
  {
    id: 4,
    title: "Introducing Reflect 2.0",
    excerpt: "Our biggest update yet brings new AI capabilities, improved knowledge graphs, and more.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Product Updates",
    author: "Jamie Wong",
    date: "April 15, 2025"
  },
  {
    id: 5,
    title: "How Top Companies Use Reflect",
    excerpt: "Case studies on how leading organizations leverage Reflect to enhance team knowledge sharing.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Case Studies",
    author: "Priya Patel",
    date: "April 8, 2025"
  },
  {
    id: 6,
    title: "The Art of Digital Note-Taking",
    excerpt: "Best practices for organizing your digital notes effectively with Reflect.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    category: "Tips & Tricks",
    author: "David Kim",
    date: "April 1, 2025"
  }
];

const categories = ["All", "AI", "Productivity", "Research", "Product Updates", "Case Studies", "Tips & Tricks"];

const Blog = () => {
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
              Reflect <span className="cosmic-text-gradient">Blog</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, tips, and updates from the Reflect team.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0 
                    ? "bg-cosmic-gradient hover:opacity-90 transition-opacity" 
                    : "border-reflect-purple/30 hover:bg-reflect-purple/10 text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Post */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={`/blog/${blogPosts[0].id}`} className="block">
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/20 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reflect-dark to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block bg-reflect-purple/80 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-xl text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-reflect-purple/20 flex items-center justify-center mr-3">
                    <span className="text-reflect-purple font-bold">
                      {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{blogPosts[0].author}</p>
                    <p className="text-sm text-gray-400">{blogPosts[0].date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full group">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-reflect-purple/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-reflect-purple transition-colors">{post.title}</h3>
                      <p className="text-gray-300 mb-6">{post.excerpt}</p>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-reflect-purple/20 flex items-center justify-center mr-3">
                          <span className="text-reflect-purple text-sm font-bold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white px-8">
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the latest Reflect updates, tips, and special offers delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow bg-reflect-dark/70 border border-white/20 focus:border-reflect-purple text-white rounded-lg px-4 py-3 outline-none"
              />
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
