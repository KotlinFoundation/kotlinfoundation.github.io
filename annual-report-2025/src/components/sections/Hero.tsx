import { motion } from "framer-motion";
import { ChevronDown, Play, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import kotlinLogo from "@/assets/kotlin-3d-logo.png";
import { DraftBadge } from "@/components/ui/DraftBadge";
const navTabs = [
  { label: "What We Do", href: "#mission" },
  { label: "Highlights", href: "#at-a-glance" },
  { label: "Grants Program", href: "#grants-program" },
  { label: "Student Contest", href: "#student-contest" },
  { label: "Open Source Internships", href: "#gsoc" },
  { label: "At KotlinConf", href: "#kotlinconf" },
  { label: "Financial Report", href: "#finances" },
  { label: "Looking Ahead", href: "#looking-ahead-2026" },
];

export const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("mission");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] bg-kotlin-black text-white overflow-hidden isolate">
      {/* ========== BACKGROUND LAYER (z-0) ========== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base gradient effects */}
        <div className="absolute inset-0 bg-glow-gradient-subtle opacity-30" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-kotlin-purple/6 to-transparent" />
      </div>
      
      {/* ========== GLOW LAYER (z-[1]) - sits between bg and content ========== */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-visible">
        {/* Positioned glow that follows logo area - left side of hero */}
        <motion.div 
          className="absolute top-[12%] left-[5%] w-[400px] h-[400px] 2xl:w-[500px] 2xl:h-[500px]"
          animate={prefersReducedMotion ? {} : {
            opacity: [0.5, 1, 0.5],
            scale: [0.9, 1.15, 0.9]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full blur-[100px] 2xl:blur-[120px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(239,72,87,0.45) 0%, rgba(200,17,226,0.35) 30%, rgba(127,82,255,0.25) 55%, transparent 75%)"
            }}
          />
        </motion.div>
        
        {/* Secondary inner glow */}
        <motion.div 
          className="absolute top-[15%] left-[8%] w-[280px] h-[280px] 2xl:w-[350px] 2xl:h-[350px]"
          animate={prefersReducedMotion ? {} : {
            opacity: [0.4, 1, 0.4],
            scale: [0.95, 1.1, 0.95]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full blur-[60px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(127,82,255,0.55) 0%, rgba(127,82,255,0.2) 50%, transparent 70%)"
            }}
          />
        </motion.div>
      </div>
      
      {/* Bottom fade-out gradient */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-[160px] pointer-events-none z-[25]"
        style={{
          background: "linear-gradient(to bottom, rgba(25,25,28,0) 0%, rgba(25,25,28,0.8) 60%, rgba(25,25,28,1) 100%)"
        }}
      />
      
      {/* ========== FOREGROUND CONTENT LAYER (z-10) ========== */}
      <div className="container-kotlin relative z-10 flex items-center min-h-[100svh] py-12 lg:py-16">
        {/* 2-column grid layout - stacks below lg (1024px) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(380px,420px)] xl:grid-cols-[1fr_minmax(400px,480px)] 2xl:grid-cols-[1fr_minmax(440px,520px)] gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center w-full max-w-[1400px] 2xl:max-w-[1500px] mx-auto">
          
          {/* Left column: Logo + Title + Tabs - constrained to not overlap right */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8 relative"
          >
            {/* 3D Kotlin logo with breathing animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="pointer-events-none select-none"
            >
              <motion.img
                src={kotlinLogo}
                alt="Kotlin Foundation"
                className="relative w-24 md:w-32 lg:w-40 2xl:w-44 h-auto drop-shadow-[0_0_40px_rgba(127,82,255,0.5)]"
                style={{
                  filter: "brightness(1.05) saturate(1)",
                }}
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.08, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* H1 Title + micro-subtitle */}
            <div className="space-y-3 relative">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl 2xl:text-[4rem] font-semibold leading-[1.08] tracking-tight"
                style={{
                  textShadow: "0 2px 20px rgba(0,0,0,0.4)"
                }}
              >
                <span className="text-white">Kotlin Foundation</span>
                <br />
                <span className="text-white">Annual Report </span>
                <span className="text-gradient text-[1.05em] font-bold">2025</span>
              </h1>
              
              {/* Micro-subtitle */}
              <p className="text-sm md:text-[15px] text-white/40 tracking-wide">
                A year of ecosystem investment and collaboration.
              </p>
            </div>
            
            {/* Navigation tabs/pills - wrap within left column only */}
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-1"
            >
              <div className="flex flex-wrap gap-2 lg:gap-2.5 max-w-full">
                {navTabs.map((tab, index) => (
                  <motion.a
                    key={tab.href}
                    href={tab.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.04 }}
                    className="px-4 lg:px-5 py-2 lg:py-2.5 text-[13px] lg:text-sm font-medium text-white/60 bg-white/[0.04] border border-white/[0.12] rounded-full transition-all duration-200 hover:text-white hover:border-kotlin-purple/50 hover:bg-kotlin-purple/10 hover:-translate-y-0.5"
                  >
                    {tab.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>

          {/* Right column: Welcome from the Board card - fixed width range */}
          <motion.div
            id="welcome"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[520px] lg:max-w-none mx-auto lg:mx-0"
          >
            {/* Draft badge - absolute positioned on the card, no layout impact */}
            <div className="absolute -top-3 right-4 z-20">
              <DraftBadge variant="block" tooltip="Replace with real video from Jeffrey" />
            </div>
            
            {/* Card background */}
            <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.10] rounded-2xl" />
            
            <div className="relative p-5 sm:p-6 md:p-7 lg:p-8">
              {/* Label with left accent - more visible */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-1 h-6 bg-kotlin-purple rounded-full" />
                <p className="text-[11px] lg:text-xs font-semibold text-white tracking-[0.18em] uppercase">
                  Welcome from the Board
                </p>
              </div>
              
              {/* Video thumbnail - explicit aspect ratio */}
              <div 
                className="relative w-full rounded-xl overflow-hidden bg-black/60 cursor-pointer group mb-5 md:mb-6"
                style={{ aspectRatio: '16/9' }}
                onClick={() => setIsVideoPlaying(true)}
              >
                {!isVideoPlaying ? (
                  <>
                    <img
                      src="https://img.youtube.com/vi/YdATt4-3gYU/maxresdefault.jpg"
                      alt="Welcome from Jeffrey van Gogh"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Duration badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-md text-[11px] text-white/85 font-medium">
                      ~2 min
                    </div>
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-kotlin-purple/85 group-hover:bg-kotlin-purple group-hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-xl shadow-kotlin-purple/25">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/YdATt4-3gYU?autoplay=1&modestbranding=1&rel=0&playsinline=1"
                    title="Welcome from the Board — Jeffrey van Gogh"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>
              
              {/* Quote */}
              <div className="relative mb-4 md:mb-5">
                <Quote className="absolute -left-1 -top-1 w-4 h-4 text-kotlin-purple/30 rotate-180" />
                <p className="text-sm md:text-[15px] text-white/70 leading-[1.7] pl-5">
                  "In 2025, the Kotlin ecosystem grew through deeper cross-company collaboration. Together with our members and the community, we invested in critical libraries, education, and stewardship that make Kotlin a safer long-term choice for teams. Thank you for building this with us — we're excited for what's next in 2026."
                </p>
              </div>
              
              {/* Attribution */}
              <div className="pl-5 flex items-center gap-3">
                <div>
                  <p className="text-sm md:text-[15px] text-white/90 font-medium">
                    Jeffrey van Gogh
                  </p>
                  <p className="text-xs md:text-[13px] text-white/45">
                    Board of Directors
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - more visible on wide screens */}
      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30 p-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-kotlin-purple/50 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 2xl:w-7 2xl:h-7 text-white/20 md:text-white/25 2xl:text-white/35" />
        </motion.div>
      </motion.button>
    </section>
  );
};
