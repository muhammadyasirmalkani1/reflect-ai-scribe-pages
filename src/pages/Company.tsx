
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import NewsletterSignup from "@/components/NewsletterSignup";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    bio: "Previously led product at Notion. Alex has a passion for knowledge management tools and how they can enhance human cognition."
  },
  {
    name: "Sarah Johnson",
    role: "Co-Founder & CTO",
    bio: "Former AI researcher at OpenAI. Sarah leads our technical team and ensures Reflect is built with cutting-edge AI capabilities."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    bio: "With experience at Figma and Airbnb, Michael ensures that Reflect is both beautiful and intuitive to use."
  },
  {
    name: "Jamie Wong",
    role: "Head of Product",
    bio: "Former product leader at Dropbox and Superhuman. Jamie is obsessed with creating products that feel magical."
  },
  {
    name: "Priya Patel",
    role: "Head of Marketing",
    bio: "Marketing veteran from Airtable and Asana. Priya helps people discover how Reflect can transform their thinking."
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Previously engineering leader at Google and Stripe. David ensures Reflect is fast, reliable, and secure."
  }
];

const values = [
  {
    title: "Think Deeply",
    description: "We believe in deep work and rigorous thinking to create products that truly enhance human cognition."
  },
  {
    title: "Build for Quality",
    description: "We focus on quality over quantity, creating features that are thoughtfully designed and beautifully implemented."
  },
  {
    title: "User-Centered",
    description: "Everything we do starts with understanding our users' needs and workflows."
  },
  {
    title: "Continuous Learning",
    description: "We're always learning and improving, just like the product we build helps our users do."
  }
];

const Company = () => {
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
              About <span className="cosmic-text-gradient">Reflect</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're on a mission to enhance human thinking through intelligent software.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                Reflect was founded in 2023 with a simple mission: to create tools that help people think better.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                We believe that the quality of our thinking determines the quality of our lives and work. Yet most of us haven't been equipped with tools that truly enhance our cognitive abilities.
              </p>
              <p className="text-xl text-gray-300">
                By combining cutting-edge AI with decades of research in knowledge management and cognitive science, we've built a note-taking system that doesn't just store information—it helps you connect ideas, see patterns, and generate insights you wouldn't have had otherwise.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
                  alt="Team collaboration" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-reflect-dark/30 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-cosmic-gradient flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-4xl">R</span>
                    </div>
                    <p className="text-white text-lg font-medium">Founded 2023</p>
                  </div>
                </div>
              </div>
              
              {/* Visual elements */}
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-reflect-purple/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-5 -left-5 w-40 h-40 bg-reflect-blue/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-24 h-24 rounded-full bg-reflect-purple/10 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-reflect-purple text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-reflect-purple mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Join Us Section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're always looking for passionate people to join us on our mission. Check out our open positions and get in touch.
            </p>
            
            <button className="bg-cosmic-gradient hover:opacity-90 transition-opacity text-white font-medium py-3 px-8 rounded-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Company;
