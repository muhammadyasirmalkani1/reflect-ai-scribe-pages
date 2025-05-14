
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";

const Products = () => {
  return (
    <div className="min-h-screen bg-reflect-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
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
              Our <span className="cosmic-text-gradient">Products</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Powerful tools to capture, connect, and recall information with ease.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Main Product */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reflect Notes</h2>
              <p className="text-xl text-gray-300 mb-6">
                Our flagship product. A powerful note-taking app with AI assistance, knowledge graph visualization, and seamless sync across all your devices.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-reflect-purple/10 p-2 rounded-lg mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-reflect-purple">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">AI-powered assistance</h3>
                    <p className="text-gray-400">Get smart suggestions and automatic organization of your notes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-reflect-purple/10 p-2 rounded-lg mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-reflect-purple">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Knowledge graph</h3>
                    <p className="text-gray-400">Visualize connections between your notes and discover insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-reflect-purple/10 p-2 rounded-lg mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-reflect-purple">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cross-platform</h3>
                    <p className="text-gray-400">Available on web, iOS, Android, macOS, and Windows.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-cosmic-gradient hover:opacity-90 transition-opacity">
                Try Reflect Notes
              </Button>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20">
                <div className="p-1 bg-gradient-to-r from-reflect-purple/30 to-reflect-blue/30 rounded-2xl">
                  <div className="bg-reflect-dark/80 backdrop-blur-sm w-full h-full rounded-xl p-2">
                    <div className="h-8 flex items-center px-4 border-b border-white/10">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
                      alt="Reflect Notes interface" 
                      className="w-full rounded-b-lg object-cover"
                      style={{ height: '400px' }}
                    />
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
      
      {/* Secondary Products */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">More Products</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-reflect-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-reflect-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">Reflect AI</h3>
              <p className="text-gray-400 mb-6">
                Our advanced AI assistant that can summarize content, generate insights, and help you write better notes.
              </p>
              
              <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-reflect-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-reflect-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">Reflect Teams</h3>
              <p className="text-gray-400 mb-6">
                Collaborative workspace for teams to share knowledge, build documentation, and work together seamlessly.
              </p>
              
              <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-reflect-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-reflect-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">Reflect API</h3>
              <p className="text-gray-400 mb-6">
                Developer tools to build custom integrations and extensions for the Reflect ecosystem.
              </p>
              
              <Button className="bg-reflect-dark border border-reflect-purple/30 hover:bg-reflect-purple/10 text-white">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Products;
