
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const VideoTutorials = () => {
  const tutorials = [
    {
      title: "Getting Started with Reflect",
      description: "A comprehensive guide for new users"
    },
    {
      title: "Advanced Note Linking Techniques",
      description: "Learn how to create powerful connections"
    },
    {
      title: "Using AI to Enhance Your Notes",
      description: "Leverage AI to get more from your notes"
    }
  ];

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Video Tutorials</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
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
                <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-gray-400 text-sm">{tutorial.description}</p>
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
  );
};

export default VideoTutorials;
