import { motion } from "framer-motion";
import Image from "next/image";
import LazyLoopVideo from "./LazyLoopVideo";

interface MemeGridProps {
  memes: Array<{
    id: number;
    video: string;
  }>;
  layout: 'desktop' | 'large-desktop' | 'tablet' | 'mobile';
  onMemeClick: (index: number) => void;
}

const MemeGrid = ({ memes, layout, onMemeClick }: MemeGridProps) => {
  const getHeightClass = (index: number, layout: string) => {
    if (layout === 'desktop') {
      return index % 5 === 0 ? 'h-80' : 
             index % 5 === 1 ? 'h-64' : 
             index % 5 === 2 ? 'h-72' : 
             index % 5 === 3 ? 'h-56' : 
             'h-68';
    } else if (layout === 'large-desktop') {
      return index % 6 === 0 ? 'h-80' : 
             index % 6 === 1 ? 'h-64' : 
             index % 6 === 2 ? 'h-72' : 
             index % 6 === 3 ? 'h-56' : 
             index % 6 === 4 ? 'h-68' :
             'h-60';
    }
    return 'h-full';
  };

  const getGridClass = (layout: string) => {
    switch (layout) {
      case 'desktop':
        return 'columns-4 gap-6 space-y-6 overflow-hidden';
      case 'large-desktop':
        return 'columns-5 gap-6 space-y-6 overflow-hidden';
      case 'tablet':
        return 'grid grid-cols-3 gap-4 overflow-hidden';
      case 'mobile':
        return 'grid grid-cols-2 gap-3 overflow-hidden';
      default:
        return '';
    }
  };

  const getItemClass = (index: number, layout: string) => {
    if (layout === 'tablet') {
      return index === 0 ? 'col-span-2 row-span-2' : 
             index === 1 ? 'col-span-1 row-span-1' :
             index === 2 ? 'col-span-1 row-span-1' :
             index === 3 ? 'col-span-2 row-span-1' :
             index === 4 ? 'col-span-1 row-span-1' :
             index === 5 ? 'col-span-1 row-span-1' :
             index === 6 ? 'col-span-2 row-span-1' :
             index === 7 ? 'col-span-1 row-span-1' :
             index === 8 ? 'col-span-1 row-span-1' :
             index === 9 ? 'col-span-2 row-span-1' :
             index === 10 ? 'col-span-1 row-span-1' :
             index === 11 ? 'col-span-1 row-span-1' :
             index === 12 ? 'col-span-2 row-span-1' :
             index === 13 ? 'col-span-1 row-span-1' :
             'col-span-1 row-span-1';
    } else if (layout === 'mobile') {
      return index === 0 ? 'col-span-2' : 'col-span-1';
    }
    return '';
  };

  const containerClass = layout === 'mobile' ? 'block md:hidden' :
                        layout === 'tablet' ? 'hidden md:block lg:hidden' :
                        layout === 'desktop' ? 'hidden lg:block xl:hidden' :
                        'hidden xl:block';

  return (
    <div className={containerClass}>
      <div className={getGridClass(layout)}>
        {memes.map((meme, index) => (
          <motion.div
            key={meme.id}
            className={`group cursor-pointer ${layout === 'desktop' || layout === 'large-desktop' ? 'break-inside-avoid mb-6' : getItemClass(index, layout)}`}
            initial={{ opacity: 0, y: layout === 'tablet' || layout === 'mobile' ? 30 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: layout === 'tablet' || layout === 'mobile' ? 0.6 : 0.5, 
              delay: layout === 'tablet' || layout === 'mobile' ? index * 0.1 : index * 0.05,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            onClick={() => onMemeClick(index)}
          >
            <div className={`relative bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20 ${
              layout === 'mobile' ? 'h-48' : 
              layout === 'tablet' ? 'h-full' :
              getHeightClass(index, layout)
            }`}>
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
        ))}
      </div>
    </div>
  );
};

export default MemeGrid; 