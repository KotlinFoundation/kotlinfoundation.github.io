import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { Sparkles } from "lucide-react";

import jetbrainsLogo from "@/assets/logos/jetbrains.svg";
import googleLogo from "@/assets/logos/google.svg";
import metaLogo from "@/assets/logos/meta.svg";
import gradleLogo from "@/assets/logos/gradle.png";
import touchlabLogo from "@/assets/logos/touchlab.png";
import uberLogo from "@/assets/logos/uber.svg";
import kotzillaLogo from "@/assets/logos/kotzilla.svg";
import blockLogo from "@/assets/logos/block.svg";

const foundingMembers = [
  { name: "JetBrains", logo: jetbrainsLogo },
  { name: "Google", logo: googleLogo },
];

const goldMembers = [
  { name: "Meta", logo: metaLogo, isNew: true },
];

const silverMembers = [
  { name: "Gradle", logo: gradleLogo },
  { name: "Touchlab", logo: touchlabLogo },
  { name: "Uber", logo: uberLogo },
  { name: "Kotzilla", logo: kotzillaLogo },
  { name: "Block", logo: blockLogo, isNew: true },
];

interface MemberLogoProps {
  name: string;
  logo: string;
  isNew?: boolean;
  size?: "lg" | "gold" | "md";
}

const MemberLogo = ({ name, logo, isNew, size = "md" }: MemberLogoProps) => {
  const sizeClasses = {
    lg: "h-12 md:h-16",
    gold: "h-10 md:h-12",
    md: "h-8 md:h-10",
  };

  return (
    <div className="relative group flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      {isNew && (
        <span 
          className="absolute -top-3 -right-4 text-[9px] px-1.5 py-0.5 rounded-full font-medium"
          style={{ 
            background: 'rgba(127,82,255,0.12)', 
            border: '1px solid rgba(127,82,255,0.35)',
            color: '#7F52FF'
          }}
        >
          NEW
        </span>
      )}
    </div>
  );
};

interface MemberCardProps {
  title: string;
  members: { name: string; logo: string; isNew?: boolean }[];
  size?: "lg" | "gold" | "md";
  delay?: number;
}

const MemberCard = ({ title, members, size = "md", delay = 0 }: MemberCardProps) => (
  <AnimatedCard delay={delay}>
    <div className="bg-kotlin-gray-light rounded-2xl p-6 h-full">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4 text-center">
        {title}
      </p>
      <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center">
        {members.map((member) => (
          <MemberLogo key={member.name} {...member} size={size} />
        ))}
      </div>
    </div>
  </AnimatedCard>
);

export const Members = () => {
  return (
    <section id="members" className="section-light pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="container-kotlin">
        <AnimatedSection>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-kotlin-black uppercase tracking-normal text-center mb-6 group">
            Our Members
            <SectionAnchor id="members" />
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {/* Top Row: Founding + Gold side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MemberCard 
              title="Founding Members" 
              members={foundingMembers} 
              size="lg" 
              delay={0.1} 
            />
            <MemberCard 
              title="Gold Member" 
              members={goldMembers} 
              size="gold" 
              delay={0.15} 
            />
          </div>

          {/* Silver Members - Full Width */}
          <MemberCard 
            title="Silver Members" 
            members={silverMembers} 
            size="md" 
            delay={0.2} 
          />
        </div>

        {/* 2025 Milestone */}
        <AnimatedCard delay={0.25}>
          <div className="mt-6 bg-kotlin-black rounded-2xl p-5 text-white">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-kotlin-purple shrink-0 mt-0.5" />
              <p className="text-sm">
                <span className="font-medium">2025:</span>
                <span className="text-white/70 ml-1">
                  We welcomed{" "}
                  <a 
                    href="https://kotlinfoundation.org/news/meta-joins-kotlin-foundation-first-gold-member/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 underline underline-offset-2 decoration-white/30 hover:text-kotlin-purple hover:decoration-kotlin-purple transition-colors"
                  >
                    Meta
                  </a>{" "}
                  as our first Gold Member,{" "}
                  <a 
                    href="https://kotlinfoundation.org/news/block-joins-kotlin-foundation-silver-member/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 underline underline-offset-2 decoration-white/30 hover:text-kotlin-purple hover:decoration-kotlin-purple transition-colors"
                  >
                    Block
                  </a>{" "}
                  as a Silver Member, and{" "}
                  <a 
                    href="https://kotlinfoundation.org/news/sergei-rybalkin-joins-kotlin-foundation-board/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 underline underline-offset-2 decoration-white/30 hover:text-kotlin-purple hover:decoration-kotlin-purple transition-colors"
                  >
                    Sergei Rybalkin
                  </a>{" "}
                  to the Board – bringing more at-scale perspective into the Foundation.
                </span>
              </p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};
