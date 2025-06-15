
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Introducing Reflect 2.0: A New Era of Connected Thinking",
    excerpt: "Today we're excited to announce the biggest update to Reflect since our launch. Reflect 2.0 brings a completely redesigned interface, powerful new AI features, and much more.",
    content: `Today we're excited to announce the biggest update to Reflect since our launch. Reflect 2.0 brings a completely redesigned interface, powerful new AI features, and enhanced collaboration tools that will transform how you think and work.

## What's New in Reflect 2.0

### Redesigned Interface
Our new interface is cleaner, more intuitive, and designed to get out of your way so you can focus on what matters most - your thoughts and ideas. We've streamlined the navigation, improved the note editor, and made everything more accessible.

### Enhanced AI Features
Our AI assistant has been significantly upgraded with new capabilities:
- **Smart Suggestions**: Get contextual suggestions as you write
- **Auto-linking**: Automatically discover connections between your notes
- **Content Generation**: Generate summaries, outlines, and more
- **Research Assistant**: Help with fact-checking and research

### Better Performance
Reflect 2.0 is faster and more responsive than ever before. We've optimized the core engine and reduced loading times by up to 60%.

### Improved Collaboration
Work better with your team with new collaboration features:
- Real-time editing and commenting
- Shared knowledge graphs
- Team templates and workflows
- Enhanced permissions and access controls

## Getting Started

Existing users will be automatically upgraded to Reflect 2.0. All your existing notes and data will be preserved and enhanced with the new features.

New users can sign up and start exploring all these features immediately. We're offering a 30-day free trial for all new accounts.

## What's Next

This is just the beginning. We have exciting features planned for the coming months, including mobile apps, advanced integrations, and even more AI capabilities.

Thank you for being part of the Reflect community. We can't wait to see what you'll create with these new tools.`,
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
    content: `Building a "Second Brain" is about creating an external system that enhances your natural thinking processes. In this comprehensive guide, we'll show you how to set up Reflect as your personal knowledge management system.

## What is a Second Brain?

A Second Brain is a personal knowledge management system that helps you:
- Capture and organize information from multiple sources
- Connect ideas across different domains
- Retrieve information when you need it
- Generate new insights from existing knowledge

## Getting Started with Your Setup

### 1. Define Your Information Diet
Start by identifying the types of information you regularly consume:
- Articles and blog posts
- Books and research papers
- Meeting notes and conversations
- Ideas and random thoughts
- Project documentation

### 2. Create Your Organizational Structure
In Reflect, organize your knowledge using:
- **Tags**: For categorizing content (#productivity, #research, #ideas)
- **Folders**: For project-specific information
- **Links**: To connect related concepts
- **Templates**: For consistent note-taking

### 3. Establish Capture Habits
Make it easy to capture information:
- Use Reflect's web clipper for articles
- Set up quick capture templates
- Use voice notes for ideas on the go
- Connect your other tools via integrations

## The PARA Method in Reflect

Organize your Second Brain using the PARA method:
- **Projects**: Things you're actively working on
- **Areas**: Ongoing responsibilities to maintain
- **Resources**: Topics of ongoing interest
- **Archive**: Inactive items from the other categories

### Setting up PARA in Reflect
1. Create top-level folders for each PARA category
2. Use consistent tagging within each area
3. Set up automated workflows for moving items to archive
4. Regular review and maintenance schedules

## Advanced Techniques

### Knowledge Graph Exploration
Use Reflect's knowledge graph to:
- Discover unexpected connections
- Find related notes you might have forgotten
- Identify knowledge gaps in your system

### AI-Powered Insights
Leverage Reflect's AI to:
- Generate summaries of complex topics
- Create study guides from your notes
- Suggest connections between concepts
- Answer questions about your knowledge base

## Making It Stick

The key to a successful Second Brain is consistency:
- Daily capture habits
- Weekly review sessions
- Monthly system maintenance
- Quarterly structure reviews

Remember, your Second Brain should evolve with your needs. Start simple and gradually add complexity as you become more comfortable with the system.`,
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
    content: `Understanding how our brains process and connect information is crucial to building effective knowledge management systems. Let's explore the cognitive science research that informs Reflect's design.

## How Memory Really Works

Contrary to popular belief, our brains don't store memories like files in a computer. Instead, memory is:
- **Associative**: Connected through networks of related concepts
- **Reconstructive**: Rebuilt each time we access it
- **Context-dependent**: Influenced by our current state and environment

## The Network Nature of Knowledge

Research in cognitive science shows that knowledge is stored in networks:

### Semantic Networks
Our brains organize concepts in interconnected webs where:
- Related concepts are linked together
- Activation spreads through connections
- Context determines which connections are active

### The Strength of Weak Ties
Research by Mark Granovetter showed that:
- Weak connections often provide the most valuable insights
- Novel ideas emerge at the intersection of different domains
- Diverse networks lead to more creative solutions

## Implications for Note-Taking

Traditional hierarchical note-taking systems fight against how our brains naturally work. Instead, we should:

### Embrace Non-Linear Thinking
- Allow ideas to connect across categories
- Build bridges between different domains
- Follow associative paths when they emerge

### Create Multiple Access Points
- Use tags, links, and categories simultaneously
- Build redundant pathways to important information
- Make information discoverable in multiple ways

### Leverage Spacing and Retrieval
- Regularly revisit and reconnect with old notes
- Use spaced repetition for important concepts
- Practice active recall rather than passive review

## The Role of AI in Cognitive Enhancement

Modern AI can help us overcome natural cognitive limitations:

### Working Memory Support
AI can help by:
- Maintaining context across long sessions
- Surfacing relevant information when needed
- Reducing cognitive load during complex tasks

### Pattern Recognition
AI excels at:
- Identifying connections we might miss
- Recognizing patterns across large datasets
- Suggesting novel combinations of ideas

### Metacognitive Support
AI can assist with:
- Reflecting on our thinking processes
- Identifying knowledge gaps
- Suggesting areas for deeper exploration

## Building Brain-Friendly Systems

To create knowledge management systems that work with our brains:

### Design for Serendipity
- Enable unexpected discoveries
- Surface forgotten connections
- Encourage exploration and wandering

### Support Different Thinking Modes
- Focused mode: Deep work on specific topics
- Diffuse mode: Broad exploration and connection-making
- Creative mode: Free-form idea generation

### Make the Invisible Visible
- Show connections between ideas
- Visualize knowledge structures
- Provide feedback on learning progress

## The Future of Augmented Thinking

As we better understand how the brain works, we can design tools that truly augment human intelligence rather than just storing information. The goal isn't to replace human thinking but to enhance it, creating a symbiotic relationship between human creativity and machine capability.

By aligning our tools with cognitive science, we can build systems that not only store our thoughts but help us think better, connect ideas more effectively, and generate insights we couldn't achieve alone.`,
    category: "Research",
    date: "April 28, 2025",
    author: "Dr. Elena Rodriguez",
    authorRole: "Head of AI",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || ""));

  if (!post) {
    return (
      <div className="min-h-screen bg-reflect-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-cosmic-gradient hover:opacity-90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-reflect-dark">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center text-reflect-purple hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-block text-reflect-purple text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="whitespace-pre-line text-gray-300 leading-relaxed">
              {post.content}
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">About the Author</h3>
              <p className="text-gray-300">
                <strong>{post.author}</strong> - {post.authorRole} at Reflect. 
                Passionate about building tools that enhance human thinking and creativity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
