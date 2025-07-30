import { motion } from "framer-motion";
import Image from "next/image";
import LazyLoopVideo from "./LazyLoopVideo";

interface MemeCardProps {
  meme: {
    id: number;
    video: string;
  };
  index: number;
  onClick: () => void;
  heightClass: string;
}

const MemeCard = ({ meme, index, onClick, heightClass }: MemeCardProps) => {
  return (
    <motion.div
      className="group cursor-pointer break-inside-avoid mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className={`relative bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20 ${heightClass}`}>
        <div className="h-full flex items-center justify-center relative">
          {meme.video.endsWith('.webp') ? (
            <Image 
              src={meme.video}
              alt="YETI Meme"
              fill
              className="object-cover rounded-lg"
            />
          ) : (
            <LazyLoopVideo src={meme.video} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MemeCard; 