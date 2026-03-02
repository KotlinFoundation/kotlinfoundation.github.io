import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { Briefcase, Lightbulb, Heart, Users, ArrowRight, Mail, Globe, Linkedin } from "lucide-react";

import jetbrainsLogo from "@/assets/logos/jetbrains.svg";
import googleLogo from "@/assets/logos/google.svg";
import metaLogo from "@/assets/logos/meta.svg";
import gradleLogo from "@/assets/logos/gradle.png";
import touchlabLogo from "@/assets/logos/touchlab.png";
import uberLogo from "@/assets/logos/uber.svg";
import kotzillaLogo from "@/assets/logos/kotzilla.svg";
import blockLogo from "@/assets/logos/block.svg";

const valueProps = [
  {
    icon: Briefcase,
    title: "Brand and Hiring",
    description: "Position your company as a Kotlin leader",
  },
  {
    icon: Lightbulb,
    title: "Influence",
    description: "Shape ecosystem standards and best practices",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Fund grants, education, open source support",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work alongside Google, Meta, JetBrains, and others",
  },
];

const allLogos = [
  jetbrainsLogo, googleLogo, metaLogo, gradleLogo,
  touchlabLogo, uberLogo, kotzillaLogo, blockLogo,
];

export const JoinUs = () => {
  return (
    <section id="join-us" className="section-dark section-spacing">
      <div className="container-kotlin">
        {/* Join the Foundation */}
        <AnimatedSection>
          <h2 className="heading-section mb-4 text-white group">
            Join the Kotlin Foundation
            <SectionAnchor id="join-us" />
          </h2>
          <p className="text-body text-white/60 mb-10">
            Shape the future of Kotlin – together.
          </p>
        </AnimatedSection>

        {/* Value props */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {valueProps.map((prop, index) => (
            <AnimatedCard key={prop.title} delay={index * 0.05}>
              <div className="bg-white/5 rounded-2xl p-5 h-full text-center border border-white/10">
                <prop.icon className="w-8 h-8 text-kotlin-purple mx-auto mb-3" />
                <h3 className="font-medium text-white mb-1">{prop.title}</h3>
                <p className="text-sm text-white/60">{prop.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Logo strip */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10 py-6">
            {allLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Member logo"
                className={(logo === touchlabLogo || logo === gradleLogo) ? "h-6 md:h-8 w-auto grayscale brightness-0 invert opacity-40" : "h-6 md:h-8 w-auto grayscale invert opacity-30"}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedCard delay={0.3}>
          <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 mb-16">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to join?</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://kotlinfoundation.org/join/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hello@kotlinfoundation.org" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@kotlinfoundation.org
              </a>
            </div>
          </div>
        </AnimatedCard>

        {/* Contact / Have Questions - Compact */}
        <AnimatedSection delay={0.4}>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://kotlinfoundation.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                kotlinfoundation.org
              </a>
              <span className="text-white/20">·</span>
              <a 
                href="mailto:hello@kotlinfoundation.org"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@kotlinfoundation.org
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/company/kotlinfoundation/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/kotlin_found" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <span className="text-white/20 mx-1">·</span>
              <p className="text-xs text-white/30">© 2025 Kotlin Foundation</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
