import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

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
        className="group flex items-center justify-center space-x-0 md:space-x-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 md:px-4 md:py-2 rounded-full hover:border-moa-gold transition-all duration-500"
      >
        {isMuted ? (
          <VolumeX size={18} className="text-white/40 group-hover:text-white transition-colors" />
        ) : (
          <div className="relative">
             <Volume2 size={18} className="text-moa-gold" />
             {isPlaying && (
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute inset-0 bg-moa-gold/20 rounded-full"
               />
             )}
          </div>
        )}

        <span className="hidden md:block text-[9px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
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
