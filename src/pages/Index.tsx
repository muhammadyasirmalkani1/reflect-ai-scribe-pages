
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import NewsletterSignup from "@/components/NewsletterSignup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-reflect-dark overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Integrations section */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl text-gray-400 mb-8">Trusted by leading teams worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-75">
            {["Google", "Microsoft", "Stripe", "Shopify", "Twitter", "Meta"].map((company) => (
              <motion.div 
                key={company}
                className="text-xl md:text-2xl font-semibold text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Features />
      <Pricing />
      <Testimonials />
      
      {/* Integration section */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Use Reflect with <span className="cosmic-text-gradient">other apps</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Seamlessly integrate with your favorite tools for a smooth workflow.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {["Notion", "Slack", "Google Drive", "Dropbox", "Figma", "GitHub"].map((app, index) => (
              <motion.div
                key={app}
                className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <p className="font-medium">{app}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <CTA />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
