import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { ExternalLink, Github, Trophy } from "lucide-react";

const grantWinners = [
  {
    name: "Firebase Kotlin SDK",
    description: "A Kotlin Multiplatform SDK for Firebase services.",
    github: "https://github.com/GitLiveApp/firebase-kotlin-sdk",
  },
  {
    name: "Shadow Gradle Plugin",
    description: "Create fat/uber JARs with dependency shading.",
    github: "https://github.com/GradleUp/shadow",
  },
  {
    name: "Mokkery",
    description: "Mocking library for Kotlin Multiplatform.",
    github: "https://github.com/lupuuss/Mokkery",
  },
  {
    name: "Stack Trace Decoroutinator",
    description: "Recovers original coroutine stack traces.",
    github: "https://github.com/Anamorphosee/stacktrace-decoroutinator",
  },
  {
    name: "Kobweb",
    description: "Build web apps in Kotlin using Compose HTML.",
    github: "https://github.com/varabyte/kobweb",
  },
];

export const GrantsProgram = () => {
  return (
    <section id="grants-program" className="section-light pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="container-kotlin">
        <AnimatedSection>
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-kotlin-purple/20 to-glow-magenta/20 text-kotlin-purple border border-kotlin-purple/20 mb-1.5">
            Round 3
          </span>
          <h2 className="heading-section group mb-4">
            Ecosystem Grants Program
            <SectionAnchor id="grants-program" />
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl">
            The grants are aimed at supporting high-value libraries that the Kotlin Foundation Ecosystem Committee identifies as exemplary contributions to the Kotlin community.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-kotlin-black rounded-2xl p-6 text-center text-white">
              <p className="stat-number-small text-kotlin-purple">
                <CountUp end={117} />
              </p>
              <p className="text-sm text-white/60 mt-1">Applications</p>
            </div>
            <div className="bg-kotlin-black rounded-2xl p-6 text-center text-white">
              <p className="stat-number-small text-kotlin-purple flex items-center justify-center gap-2">
                <CountUp end={5} />
                <Trophy className="w-8 h-8" />
              </p>
              <p className="text-sm text-white/60 mt-1">Winners</p>
            </div>
            <div className="bg-kotlin-black rounded-2xl p-6 text-center text-white">
              <p className="stat-number-small text-kotlin-purple">
                $<CountUp end={30} />K
              </p>
              <p className="text-sm text-white/60 mt-1">Distributed</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Note */}
        <AnimatedSection delay={0.15}>
          <p className="text-sm text-muted-foreground mb-8 bg-kotlin-gray-light rounded-2xl p-4">
            In 2025, we expanded the program's scope beyond Kotlin Multiplatform to include AI-related libraries, and broadened eligibility to include corporate-backed libraries.
          </p>
        </AnimatedSection>

        {/* Winners */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-kotlin-purple" />
            2025 Grant Winners
          </h3>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grantWinners.map((winner, index) => (
            <AnimatedCard key={winner.name} delay={0.2 + index * 0.05}>
              <a
                href={winner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-kotlin-gray-light rounded-2xl p-5 hover:bg-kotlin-gray transition-colors group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-medium text-kotlin-black group-hover:text-kotlin-purple transition-colors">
                    {winner.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground">{winner.description}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                  <Github className="w-3 h-3" />
                  View on GitHub
                </div>
              </a>
            </AnimatedCard>
          ))}
        </div>

        {/* Closing note */}
        <AnimatedSection delay={0.4}>
          <p className="text-sm text-muted-foreground mt-8 text-center">
            Grant winners were invited to KotlinConf 2025 to showcase their projects at the Kotlin Foundation booth.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
