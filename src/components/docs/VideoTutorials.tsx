What's import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

type Tutorial = {
  title: string;
  duration: string;
  thumbnail: string;
  // videoUrl can be an MP4, HLS, or a youtube/vimeo link
  videoUrl: string;
};

const tutorials: Tutorial[] = [
  {
    title: "Getting Started with Reflect",
    duration: "6:42",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    // point to the public/Video/Couple.mp4 file (served at /Video/Couple.mp4)
    videoUrl: "/public/Video/Turtorial.mp4"
  },
  {
    title: "Setting Up Your Knowledge Graph",
    duration: "8:15",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    title: "AI Assistant Features",
    duration: "10:24",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  }
];

const isYouTube = (url: string) =>
  /(^https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(url);

const VideoTutorials = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Tutorial | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const openModal = (tutorial: Tutorial) => {
    setActive(tutorial);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    // pause/reset video if we're using HTML5 video
    try {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    } catch (e) {
      // ignore
    }
    // clear active after a short delay so animation can finish
    setTimeout(() => setActive(null), 300);
  };

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Visual learners? Watch our detailed video guides to get the most out
            of Reflect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              className="bg-reflect-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  aria-label={`Play ${tutorial.title}`}
                  onClick={() => openModal(tutorial)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                >
                  <div className="w-14 h-14 rounded-full bg-reflect-purple/90 flex items-center justify-center cursor-pointer hover:bg-reflect-purple transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                  {tutorial.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{tutorial.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {open && active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeModal}
            aria-hidden
          />

          <motion.div
            className="relative z-10 w-full max-w-4xl mx-auto bg-transparent"
            initial={{ scale: 0.95, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={closeModal}
                aria-label="Close video"
                className="p-2 rounded-md bg-black/50 hover:bg-black/60"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="rounded-lg overflow-hidden bg-black">
              {/* If it's a YouTube/Vimeo link embed via iframe, else use native video */}
              {isYouTube(active.videoUrl) ? (
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={active.videoUrl.replace(
                      "watch?v=",
                      "embed/"
                    )}
                    title={active.title}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={active.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[70vh] bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoTutorials;