import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import hadiPhoto from "@/assets/members/hadi-hariri.png";

export const ClosingWord = () => {
  return (
    <section id="closing-word" className="relative section-spacing pb-20 md:pb-28 overflow-hidden bg-kotlin-black text-white">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-kotlin-purple/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container-kotlin relative z-10">
        <AnimatedSection>
          <h2 className="heading-section mb-10 group">
            Closing Word
            <SectionAnchor id="closing-word" />
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative bg-white/[0.03] border border-white/[0.10] rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] xl:grid-cols-[380px_1fr] gap-6 md:gap-8">
              {/* Left: Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-auto md:min-h-[320px] bg-[#e0deda]">
                <img
                  src={hadiPhoto}
                  alt="Hadi Hariri"
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-[15px] md:text-base text-white font-medium">
                    Hadi Hariri
                  </p>
                  <p className="text-xs text-white/60">
                    On behalf of the Kotlin Foundation Board
                  </p>
                </div>
              </div>

              {/* Right: Quote */}
              <div className="relative flex flex-col justify-center">
                <Quote className="absolute -left-1 -top-1 w-4 h-4 text-kotlin-purple/30 rotate-180" />
                <div className="pl-5 space-y-4 text-sm md:text-[15px] text-white/65 leading-[1.75]">
                  <p>
                    Kotlin continued its steady growth as a language in 2025, expanding its footprint across platforms and reinforcing its position in the developer ecosystem. The Kotlin Foundation welcomed new members, including Meta as a Gold Member, reflecting strong industry commitment and long-term confidence in the language's direction. Interest in Kotlin within the AI domain also increased, as teams explored its role in using the language for both creating applications as well as AI tooling. 2025 marked an important milestone for both Kotlin and the Foundation, setting a solid foundation for further progress in 2026.
                  </p>
                </div>
                <p className="pl-5 text-white/50 italic pt-4 text-sm">
                  Hadi Hariri, President of the Kotlin Foundation
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
