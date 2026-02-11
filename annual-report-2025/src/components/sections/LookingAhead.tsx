import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { DraftBadge } from "@/components/ui/DraftBadge";
import { Rocket, Award, BookOpen, GraduationCap } from "lucide-react";

const focusAreas = [
  {
    icon: Rocket,
    title: "Accelerating Kotlin & KMP adoption",
    description: "More guidance for teams adopting Kotlin Multiplatform.",
    bullets: [
      "Adoption guides for different team setups",
      "More material on kotlinlang.org",
    ],
  },
  {
    icon: Award,
    title: "Recognizing library authors",
    description: "Expanding recognition programs for maintainers and high-value libraries.",
    bullets: [
      "New formats and more participants",
      "More visibility for ecosystem work",
    ],
  },
  {
    icon: BookOpen,
    title: "Standards & best practices",
    description: "Helping teams build consistent, high-quality Kotlin libraries.",
    bullets: [
      "API guidelines",
      "Style guidance & formatting recommendations",
    ],
  },
  {
    icon: GraduationCap,
    title: "KMP education & learning support",
    description: "More education initiatives to help people learn and teach Kotlin.",
    bullets: [
      "Resources for educators",
      "Targeted learning programs",
    ],
  },
];

const mentorshipFacts = [
  "Mentors: Kotlin open-source maintainers",
  "Mentees: developers ready to make their first contribution",
  "Goal: at least one merged PR or accepted change",
];

export const LookingAhead = () => {
  return (
    <section id="looking-ahead-2026" className="relative section-spacing pb-20 md:pb-28 overflow-hidden bg-kotlin-gray-light">
      {/* Subtle purple ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-kotlin-purple/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-kotlin-purple/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container-kotlin relative z-10">
        {/* Header */}
        <AnimatedSection>
          <h2 className="heading-section mb-10 group">
            2026 Priorities
            <SectionAnchor id="looking-ahead-2026" />
          </h2>
        </AnimatedSection>

        {/* Part A: Key Focus Areas - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {focusAreas.map((area, index) => (
            <AnimatedCard key={index} delay={0.1 + index * 0.05}>
              <div className="bg-white rounded-2xl p-5 border border-border h-full shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-kotlin-purple/10 border border-kotlin-purple/20 flex items-center justify-center">
                    <area.icon className="w-4 h-4 text-kotlin-purple" />
                  </div>
                  <h3 className="text-base font-semibold text-kotlin-black">{area.title}</h3>
                </div>
                <p className="text-sm text-kotlin-black/80 mb-3">{area.description}</p>
                <ul className="space-y-1.5">
                  {area.bullets.map((bullet, i) => (
                    <li key={i} className="text-xs text-kotlin-black/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-kotlin-purple/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Part B & C: Mentorship Program + Video */}
        <AnimatedCard delay={0.3}>
          <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Video */}
              <div className="order-2 md:order-1">
                <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                  <iframe
                    src="https://www.youtube.com/embed/h92uZmm0f7w"
                    title="Kotlin Foundation Mentorship Program — Egor Tolstoy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Mentorship Summary */}
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-lg font-semibold text-kotlin-black">
                    Kotlin Foundation Mentorship Program
                  </h3>
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-glow-red via-glow-magenta to-kotlin-purple text-white shadow-sm">
                    NEW
                  </span>
                  <DraftBadge variant="inline" tooltip="Verify details with Egor before publishing" />
                </div>
                <p className="text-sm text-kotlin-black/70 mb-3">
                  A 2-month cohort connecting Kotlin maintainers with developers making their first contribution.
                </p>
                <ul className="space-y-2">
                  {mentorshipFacts.map((fact, index) => (
                    <li key={index} className="text-sm text-kotlin-black/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-kotlin-purple/60" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};