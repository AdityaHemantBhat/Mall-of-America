import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleStart = () => {
      console.log("Audio: Received start experience event");
      if (!audioRef.current) return;

      audioRef.current.muted = false;
      audioRef.current.volume = 0.1;
      audioRef.current.play()
        .then(() => console.log("Audio: Playing successfully at 10% volume"))
        .catch(e => console.error("Audio: Play failed or blocked", e));

      setIsMuted(false);
      setIsPlaying(true);
    };

    window.addEventListener("start-moa-experience", handleStart);
    return () => window.removeEventListener("start-moa-experience", handleStart);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.1;
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center space-x-4 pointer-events-auto">
      <button
        onClick={toggleMusic}
        className="group flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-moa-gold transition-all duration-500"
      >
        <div className="flex items-end space-x-1 h-3 w-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={isPlaying ? { height: [4, 16, 8, 12, 4] } : { height: 4 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "linear"
              }}
              className={`w-0.5 ${isPlaying ? 'bg-moa-gold' : 'bg-white/20'}`}
            />
          ))}
        </div>

        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
          {isMuted ? "Audio: Muted" : "Audio: On"}
        </span>
      </button>

      <audio
        ref={audioRef}
        src="/audio/background.mp3"
        loop
        muted={isMuted}
        preload="auto"
        onError={(e) => console.error("Audio: Loading error", e)}
      />
    </div>
  );
}
