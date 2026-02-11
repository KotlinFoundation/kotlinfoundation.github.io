import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";

export const Mission = () => {
  return (
    <section id="mission" className="section-light py-12 md:py-16">
      <div className="container-kotlin">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            {/* Framed Mission Card - tinted bg, subtle shadow, visible border */}
            <div 
              className="bg-[#FAFAFA] border border-[#D0D0D0] rounded-2xl px-6 pt-6 pb-8 md:px-10 md:pt-7 md:pb-10 text-center group"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
            >
              <SectionAnchor id="mission" />
              
              {/* Mission Headline with accent on "mission" - subtle glow */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-kotlin-black mb-4 leading-tight">
                Kotlin Foundation{" "}
                <span 
                  className="text-kotlin-purple"
                  style={{ textShadow: '0 6px 18px rgba(127,82,255,0.22)' }}
                >
                  mission
                </span>{" "}
                is to promote and advance the Kotlin ecosystem.
              </h2>
              
              {/* Supporting Text */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We oversee breaking changes in the language, protect the Kotlin trademark name, promote creation of Kotlin Multiplatform libraries, and increase the adoption of Kotlin in education.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};