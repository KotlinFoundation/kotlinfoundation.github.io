import { motion } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import kotlinLogo from "@/assets/kotlin-logo.svg";
import jeffreyPhoto from "@/assets/members/jeffrey-van-gogh.png";
const navTabs = [
  { label: "What We Do", href: "#mission" },
  { label: "Highlights", href: "#at-a-glance" },
  { label: "Grants Program", href: "#grants-program" },
  { label: "Student Contest", href: "#student-contest" },
  { label: "Open Source Internships", href: "#gsoc" },
  { label: "KotlinConf", href: "#kotlinconf" },
  { label: "Financial Report", href: "#finances" },
  { label: "Looking Ahead", href: "#looking-ahead-2026" },
];

export const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div className="absolute top-[18%] left-[2%] w-[400px] h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
          <div 
            className="w-full h-full blur-[100px] 2xl:blur-[120px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(239,72,87,0.45) 0%, rgba(200,17,226,0.35) 30%, rgba(127,82,255,0.25) 55%, transparent 75%)"
            }}
          />
        </div>
        
        <div className="absolute top-[22%] left-[4%] w-[280px] h-[280px] 2xl:w-[350px] 2xl:h-[350px]">
          <div 
            className="w-full h-full blur-[60px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(127,82,255,0.55) 0%, rgba(127,82,255,0.2) 50%, transparent 70%)"
            }}
          />
        </div>
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
                className="relative w-[96px] h-[96px] drop-shadow-[0_0_30px_rgba(127,82,255,0.4)]"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.06, 1]
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

          {/* Right column: Welcome from the Board card */}
          <motion.div
            id="welcome"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[520px] lg:max-w-none mx-auto lg:mx-0"
          >
            {/* Card background */}
            <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.10] rounded-2xl" />
            
            <div className="relative p-5 sm:p-6 md:p-7 lg:p-8">
              {/* Label with left accent */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-1 h-6 bg-kotlin-purple rounded-full" />
                <p className="text-[11px] lg:text-xs font-semibold text-white tracking-[0.18em] uppercase">
                  Welcome from the Board
                </p>
              </div>
              
              {/* Banner photo */}
              <div className="relative w-full rounded-xl overflow-hidden mb-5 md:mb-6" style={{ aspectRatio: '16/9' }}>
                <img
                  src={jeffreyPhoto}
                  alt="Jeffrey van Gogh"
                  className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
                />
                {/* Bottom gradient overlay for name legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-[15px] md:text-base text-white font-medium">
                    Jeffrey van Gogh
                  </p>
                  <p className="text-xs text-white/60">
                    On behalf of the Kotlin Foundation Board
                  </p>
                </div>
              </div>
              
              {/* Letter text */}
              <div className="relative">
                <Quote className="absolute -left-1 -top-1 w-4 h-4 text-kotlin-purple/30 rotate-180" />
                <div className={`pl-5 space-y-3 text-sm md:text-[15px] text-white/65 leading-[1.75] transition-[max-height] duration-500 ease-in-out overflow-hidden ${!isExpanded ? 'max-h-[140px]' : 'max-h-[2000px]'}`}>
                  <p>
                    It is my distinct pleasure to introduce the Kotlin Foundation Annual Report for 2025 – a year that demonstrated remarkable impact and progress across our core pillars.
                  </p>
                  <p>
                    The successful conclusion of the large K2 compiler effort was a monumental achievement for Language evolution. Following this, the Language Committee performed careful review of concern case issues, converting them into clear error messages to minimize runtime confusion and improve developer trust. Under the leadership of Mikhail Zarechenskii, the Lead Language Designer, we also successfully landed several bold new language features, including Guard Conditions in when expressions, Multi-dollar String Interpolation, and Explicit Backing Fields. This calculated approach – balancing innovative features with careful review of breaking changes – ensures the longevity and stability of the Kotlin language.
                  </p>
                  <p>
                    Beyond the language itself, our committees delivered significant value to the community:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="text-white/80 font-medium">Education:</span> The Education Committee fully refreshed a significant portion of the Programming in Kotlin course to ensure it remains current with the latest version of the language. Furthermore, we expanded the Student Contest, providing winners the invaluable opportunity to demo their submissions at the Kotlin Foundation booth during KotlinConf.</li>
                    <li><span className="text-white/80 font-medium">Ecosystem:</span> We continued to foster innovation through the Grants program, with winners also showcasing their efforts directly at KotlinConf.</li>
                    <li><span className="text-white/80 font-medium">Marketing:</span> We increased our presence at KotlinConf, inviting both Student Contest winners and Grant recipients to demonstrate their work at the Kotlin Foundation booth.</li>
                    <li><span className="text-white/80 font-medium">Operating:</span> The Operating Committee onboarded two new members: Block and Meta, growing our membership.</li>
                  </ul>
                  <p>
                    Collectively, these milestones showcase the Foundation's dedication to providing a robust, stable, and growing platform for developers worldwide. Thank you for your continued support as we look ahead to another exciting year.
                  </p>
                  <p className="text-white/50 italic pt-2">
                    Jeffrey van Gogh, Secretary of the Kotlin Foundation
                  </p>
                </div>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-kotlin-black/90 to-transparent pointer-events-none" />
                )}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="relative z-10 mt-3 pl-5 text-sm text-white hover:text-kotlin-purple transition-colors font-semibold cursor-pointer underline underline-offset-4 decoration-white/40 hover:decoration-kotlin-purple/70"
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                </button>
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
