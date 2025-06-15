
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Introducing Reflect 2.0: A New Era of Connected Thinking",
    excerpt: "Today we're excited to announce the biggest update to Reflect since our launch. Reflect 2.0 brings a completely redesigned interface, powerful new AI features, and much more.",
    category: "Product",
    date: "May 10, 2025",
    author: "Alex Johnson",
    authorRole: "CEO",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 2,
    title: "How to Build a Second Brain with Reflect",
    excerpt: "In this comprehensive guide, we'll walk through the process of setting up your own knowledge management system that works with your brain, not against it.",
    category: "Tutorial",
    date: "May 5, 2025",
    author: "Sarah Chen",
    authorRole: "CTO",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: 3,
    title: "The Science Behind Connected Notes",
    excerpt: "We dive into the cognitive science research that informs our approach to knowledge management and how our brains naturally connect ideas.",
    category: "Research",
    date: "April 28, 2025",
    author: "Dr. Elena Rodriguez",
    authorRole: "Head of AI",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 4,
    title: "From Chaos to Clarity: My Journey with Reflect",
    excerpt: "A personal account from a writer who transformed their creative process using our knowledge management system.",
    category: "Case Study",
    date: "April 20, 2025",
    author: "Marcus Williams",
    authorRole: "Head of Design",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 5,
    title: "Using Reflect for Academic Research",
    excerpt: "How scholars and researchers can leverage Reflect to manage literature reviews, organize findings, and discover new connections in their work.",
    category: "Tutorial",
    date: "April 15, 2025",
    author: "Priya Patel",
    authorRole: "Customer Success",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 6,
    title: "The Future of AI-Assisted Thinking",
    excerpt: "Our vision for how AI will continue to evolve as a partner in the creative and analytical thinking process.",
    category: "Insights",
    date: "April 8, 2025",
    author: "David Kim",
    authorRole: "VP of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 7,
    title: "Collaborative Note-Taking: Teams That Think Together",
    excerpt: "Best practices for using Reflect in team environments to create shared knowledge bases and improve collaboration.",
    category: "Tutorial",
    date: "March 30, 2025",
    author: "Jennifer Liu",
    authorRole: "Product Manager",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: 8,
    title: "The Psychology of Information Overload",
    excerpt: "Understanding why we struggle with too much information and how strategic note-taking can help us regain control.",
    category: "Research",
    date: "March 25, 2025",
    author: "Dr. Michael Torres",
    authorRole: "Research Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 9,
    title: "Migrating from Traditional Note Apps to Reflect",
    excerpt: "A step-by-step guide for users transitioning from other note-taking applications to Reflect's connected approach.",
    category: "Tutorial",
    date: "March 18, 2025",
    author: "Rachel Green",
    authorRole: "Technical Writer",
    image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6"
  },
  {
    id: 10,
    title: "Innovation Through Connection: Case Studies from Our Users",
    excerpt: "Real stories from entrepreneurs, researchers, and creatives who've made breakthrough discoveries using Reflect.",
    category: "Case Study",
    date: "March 12, 2025",
    author: "Tom Anderson",
    authorRole: "Community Manager",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f"
  },
  {
    id: 11,
    title: "The Art of Digital Minimalism in Knowledge Management",
    excerpt: "How to maintain focus and clarity in your note-taking practice without getting overwhelmed by features and complexity.",
    category: "Insights",
    date: "March 5, 2025",
    author: "Lisa Chen",
    authorRole: "UX Designer",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
  },
  {
    id: 12,
    title: "Building Learning Pathways with Connected Notes",
    excerpt: "Strategies for students and lifelong learners to create structured learning journeys using Reflect's linking capabilities.",
    category: "Tutorial",
    date: "February 28, 2025",
    author: "Kevin Park",
    authorRole: "Education Specialist",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
  },
  {
    id: 13,
    title: "Privacy-First Knowledge Management",
    excerpt: "How Reflect ensures your thoughts and ideas remain secure while still providing powerful AI assistance.",
    category: "Product",
    date: "February 20, 2025",
    author: "Alex Johnson",
    authorRole: "CEO",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  },
  {
    id: 14,
    title: "The Power of Bidirectional Linking",
    excerpt: "Understanding how bidirectional links create a web of knowledge that mirrors how your brain actually works.",
    category: "Research",
    date: "February 15, 2025",
    author: "Dr. Elena Rodriguez",
    authorRole: "Head of AI",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    id: 15,
    title: "Creative Writing with AI: A New Partnership",
    excerpt: "How writers are using Reflect's AI features to overcome writer's block and explore new narrative possibilities.",
    category: "Case Study",
    date: "February 10, 2025",
    author: "Marcus Williams",
    authorRole: "Head of Design",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a"
  },
  {
    id: 16,
    title: "Building Your Daily Knowledge Routine",
    excerpt: "Simple habits that will transform how you capture, process, and connect information every day.",
    category: "Tutorial",
    date: "February 5, 2025",
    author: "Sarah Chen",
    authorRole: "CTO",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
  },
  {
    id: 17,
    title: "The Network Effect in Personal Knowledge",
    excerpt: "Why the value of your knowledge base grows exponentially as you add more connected information.",
    category: "Insights",
    date: "January 30, 2025",
    author: "David Kim",
    authorRole: "VP of Operations",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
  },
  {
    id: 18,
    title: "Voice Notes and AI Transcription",
    excerpt: "How to seamlessly capture ideas on the go and have them automatically transcribed and connected to your knowledge graph.",
    category: "Product",
    date: "January 25, 2025",
    author: "Priya Patel",
    authorRole: "Customer Success",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008"
  }
];

const categories = ["All", "Product", "Tutorial", "Research", "Case Study", "Insights"];

const POSTS_PER_LOAD = 6;

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_LOAD);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + POSTS_PER_LOAD);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(POSTS_PER_LOAD);
  };

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
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, tutorials, and stories about better thinking and knowledge management.
            </motion.p>
            
            {/* Categories */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"} 
                  className={selectedCategory === category ? 
                    "bg-cosmic-gradient hover:opacity-90 transition-opacity" : 
                    "border-reflect-purple/30 hover:bg-reflect-purple/10"
                  }
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Featured Post */}
      <div className="py-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block text-reflect-purple text-sm font-medium mb-2">
                {displayedPosts[0]?.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {displayedPosts[0]?.title}
              </h2>
              <p className="text-gray-300 mb-6">
                {displayedPosts[0]?.excerpt}
              </p>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <p className="font-semibold">{displayedPosts[0]?.author}</p>
                  <p className="text-sm text-gray-400">{displayedPosts[0]?.authorRole}</p>
                </div>
                <span className="text-gray-400 text-sm">{displayedPosts[0]?.date}</span>
              </div>
              <Link to={`/blog/${displayedPosts[0]?.id}`}>
                <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                  Read Article
                </Button>
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src={displayedPosts[0]?.image} 
                alt={displayedPosts[0]?.title} 
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.slice(1).map((post, index) => (
              <motion.div 
                key={post.id}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block text-reflect-purple text-sm font-medium mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="text-reflect-purple hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMorePosts && (
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="border-reflect-purple/30 hover:bg-reflect-purple/10"
                onClick={loadMorePosts}
              >
                Load More Articles ({filteredPosts.length - visiblePosts} remaining)
              </Button>
            </div>
          )}
          
          {/* Show total posts when all are loaded */}
          {!hasMorePosts && filteredPosts.length > POSTS_PER_LOAD && (
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Showing all {filteredPosts.length} articles
              </p>
            </div>
          )}
        </div>
      </div>
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Blog;
