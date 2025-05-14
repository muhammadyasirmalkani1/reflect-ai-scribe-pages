
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  return (
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
  );
};

export default SupportSection;
