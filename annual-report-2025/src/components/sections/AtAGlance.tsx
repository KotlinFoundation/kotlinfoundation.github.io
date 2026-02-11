import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { DraftBadge } from "@/components/ui/DraftBadge";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { Trophy } from "lucide-react";
import kodeeHearts from "@/assets/kodee-hearts.png";

// Badge component for visual highlights
const Badge = ({ 
  children, 
  variant = "purple" 
}: { 
  children: React.ReactNode; 
  variant?: "purple" | "neutral" | "gold" | "silver";
}) => {
  const variants = {
    purple: "bg-kotlin-purple/20 text-kotlin-purple border-kotlin-purple/30",
    neutral: "bg-white/10 text-white/70 border-white/20",
    gold: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    silver: "bg-slate-400/20 text-slate-300 border-slate-400/30",
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium rounded-full border ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Winner Badge - subtle purple accent for winner highlights
const WinnerBadge = ({ count }: { count: number }) => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full bg-kotlin-purple/20 text-white/90 whitespace-nowrap">
    <Trophy className="w-3 h-3" />
    {count} winners
  </span>
);

// Compact metric card component
const MetricCard = ({ 
  label, 
  value, 
  descriptor,
  secondary,
  children,
  href,
}: { 
  label: string;
  value?: string | number;
  descriptor?: string;
  secondary?: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  const cardContent = (
    <div className="group relative bg-white/[0.03] rounded-2xl p-3.5 border border-white/[0.06] hover:border-kotlin-purple/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(127,82,255,0.3)] h-full">
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-kotlin-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Eyebrow label */}
        <p className="text-[11px] font-medium text-white/50 uppercase tracking-wide mb-1.5">{label}</p>
        
        {/* Custom children or default value display */}
        {children ? children : (
          <>
            {/* Big value + descriptor */}
            <div className="flex items-baseline gap-1.5">
              {typeof value === 'number' ? (
                <span className="text-xl font-bold text-white">
                  <CountUp end={value} />
                </span>
              ) : (
                <span className="text-xl font-bold text-white">{value}</span>
              )}
              {descriptor && (
                <span className="text-xs text-white/60">{descriptor}</span>
              )}
            </div>
            
            {/* Secondary line */}
            {secondary && (
              <p className="text-xs text-white/40 mt-0.5">{secondary}</p>
            )}
          </>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

const ecosystemStats = [
  { label: "Active Developers", value: "5M+", isText: true },
  { label: "GitHub Repositories", value: "1.2M+", isText: true },
  { label: "Universities Teaching Kotlin", value: "500+", isText: true },
  { label: "KMP Libraries on Maven", value: "2,500+", isText: true },
];

export const AtAGlance = () => {
  return (
    <section id="at-a-glance" className="section-gray section-spacing">
      <div className="container-kotlin">
        <AnimatedSection>
          <h2 className="heading-section mb-8 group">
            2025 at a Glance
            <SectionAnchor id="at-a-glance" />
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Foundation Results */}
          <AnimatedSection delay={0.1}>
            <div className="bg-kotlin-black rounded-2xl p-6 md:p-8 text-white h-full">
              <h3 className="text-lg font-medium mb-6 text-white/80">Foundation Results</h3>
              <div className="grid grid-cols-2 gap-3">
                {/* New Members */}
                <AnimatedCard delay={0.05}>
                  <MetricCard label="New Members">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-white">Meta</span>
                        <Badge variant="gold">Gold</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-white">Block</span>
                        <Badge variant="silver">Silver</Badge>
                      </div>
                    </div>
                  </MetricCard>
                </AnimatedCard>

                {/* Total Members */}
                <AnimatedCard delay={0.1}>
                  <MetricCard 
                    label="Total Members" 
                    value={8} 
                    descriptor="companies"
                  />
                </AnimatedCard>

                {/* Ecosystem Grants */}
                <AnimatedCard delay={0.15}>
                  <MetricCard label="Ecosystem Grants" href="#grants-program">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-white">
                          <CountUp end={117} />
                        </span>
                        <span className="text-[11px] text-white/60">apps</span>
                      </div>
                      <WinnerBadge count={5} />
                    </div>
                  </MetricCard>
                </AnimatedCard>

                {/* Distributed */}
                <AnimatedCard delay={0.2}>
                  <MetricCard label="Distributed in Grants">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-xl font-bold text-white">$</span>
                      <span className="text-xl font-bold text-white">
                        <CountUp end={30} />
                      </span>
                      <span className="text-xl font-bold text-white">K</span>
                    </div>
                  </MetricCard>
                </AnimatedCard>

                {/* Student Contest */}
                <AnimatedCard delay={0.25}>
                  <MetricCard label="Student Contest">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-white">
                          <CountUp end={55} />
                        </span>
                        <span className="text-[11px] text-white/60">apps</span>
                      </div>
                      <WinnerBadge count={3} />
                    </div>
                  </MetricCard>
                </AnimatedCard>

                {/* Google Summer of Code */}
                <AnimatedCard delay={0.3}>
                  <MetricCard 
                    label="Google Summer of Code"
                    value={7}
                    descriptor="projects"
                    href="#gsoc"
                  />
                </AnimatedCard>

                {/* Kotlin Releases Reviewed */}
                <AnimatedCard delay={0.35}>
                  <MetricCard 
                    label="Releases Reviewed"
                    value={2}
                    secondary="Kotlin 2.2, 2.3"
                  />
                </AnimatedCard>

                {/* Collaboration */}
                <AnimatedCard delay={0.4}>
                  <MetricCard label="Collaboration" href="#grants-program">
                    <p className="text-sm font-semibold text-white">
                      Gradle × Google × JetBrains
                    </p>
                    <p className="text-[11px] text-white/40 mt-0.5">
                      Improving developer experience
                    </p>
                  </MetricCard>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* Ecosystem Stats */}
          <AnimatedSection delay={0.2}>
            <div className="relative bg-white rounded-2xl p-6 md:p-8 h-full border border-border overflow-hidden">
              {/* Kodee decoration - fully visible in corner */}
              <img 
                src={kodeeHearts} 
                alt="" 
                aria-hidden="true"
                className="absolute -bottom-8 -right-6 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 pointer-events-none select-none z-20 hidden md:block"
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-muted-foreground">Kotlin Ecosystem Highlights</h3>
                  <DraftBadge variant="block" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {ecosystemStats.map((stat, index) => (
                    <AnimatedCard key={stat.label} delay={index * 0.05 + 0.2}>
                      <div className="bg-kotlin-gray-light/90 backdrop-blur-sm rounded-2xl p-4 hover:bg-kotlin-gray transition-colors">
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-xl font-semibold text-kotlin-black">{stat.value}</p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
