import { useInView } from 'react-intersection-observer';

const LazyLoopVideo = ({ src }: { src: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  );
};

export default LazyLoopVideo; 