import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { Quote } from "lucide-react";
import mikhailPhoto from "@/assets/members/mikhail-zarechenskii.jpg";

export const LanguageStewardship = () => {
  return (
    <section id="language-stewardship" className="section-white py-10 md:py-14">
      <div className="container-kotlin">
        <AnimatedSection>
          {/* Section Header - visible but not dominant */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-1 h-5 bg-kotlin-purple rounded-full" />
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider group">
              Predictable Kotlin Upgrades
              <SectionAnchor id="language-stewardship" />
            </h2>
          </div>
          
          {/* Quote Card */}
          <div className="relative bg-kotlin-gray-light rounded-2xl p-6 md:p-8 border border-border">
            <div className="flex flex-col md:flex-row gap-5 md:gap-7">
              {/* Author Block - stronger presence */}
              <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  src={mikhailPhoto}
                  alt="Mikhail Zarechenskii"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover border-2 border-white shadow-lg mb-3"
                />
                <p className="font-semibold text-foreground text-sm md:text-base">Mikhail Zarechenskii</p>
                <p className="text-sm text-foreground/80 font-medium">Lead Language Designer</p>
                <p className="text-xs text-muted-foreground mt-0.5">JetBrains</p>
              </div>
              
              {/* Quote content - with decorative icon gutter */}
              <div className="flex-1 relative pl-8">
                {/* Quote icon as decorative marker */}
                <Quote 
                  className="absolute left-0 top-0.5 w-5 h-5 text-kotlin-purple/70" 
                  strokeWidth={2}
                />
                <blockquote className="text-sm md:text-base leading-relaxed text-foreground/85 space-y-4">
                  <p>
                    There were two major Kotlin releases in 2025. For each release, the Foundation's <strong>Language Committee</strong> reviewed several potentially breaking changes, including source, binary, and behavioral changes.
                  </p>
                  <p>
                    The accepted ones are documented in the compatibility guides:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>
                      <a 
                        href="https://kotlinlang.org/docs/compatibility-guide-22.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground underline decoration-kotlin-purple/50 decoration-1 underline-offset-4 hover:decoration-kotlin-purple hover:text-kotlin-purple transition-colors"
                      >
                        Kotlin <strong>2.2.0</strong> compatibility guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://kotlinlang.org/docs/compatibility-guide-23.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground underline decoration-kotlin-purple/50 decoration-1 underline-offset-4 hover:decoration-kotlin-purple hover:text-kotlin-purple transition-colors"
                      >
                        Kotlin <strong>2.3.0</strong> compatibility guide
                      </a>
                    </li>
                  </ul>
                  <p>
                    Almost all these issues either make the compiler{" "}
                    <a 
                      href="https://youtrack.jetbrains.com/issue/KTLC-274" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-kotlin-purple/50 decoration-1 underline-offset-4 hover:decoration-kotlin-purple hover:text-kotlin-purple transition-colors"
                    >
                      stricter
                    </a>
                    , or{" "}
                    <a 
                      href="https://youtrack.jetbrains.com/issue/KTLC-286" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-kotlin-purple/50 decoration-1 underline-offset-4 hover:decoration-kotlin-purple hover:text-kotlin-purple transition-colors"
                    >
                      align
                    </a>{" "}
                    with the specification to ensure correct behavior at runtime.
                  </p>
                  <p>
                    One notable change in 2.2 is that the compiler now generates{" "}
                    <a 
                      href="https://youtrack.jetbrains.com/issue/KT-4779" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-kotlin-purple/50 decoration-1 underline-offset-4 hover:decoration-kotlin-purple hover:text-kotlin-purple transition-colors"
                    >
                      non-abstract interface methods as default methods on the JVM
                    </a>
                    . As a result, a corner case with diamond inheritance now triggers an{" "}
                    <a 
                      href="https://youtrack.jetbrains.com/issue/KTLC-269" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-kotlin-purple/50 decoration-1 underline-offset-4 hover:decoration-kotlin-purple hover:text-kotlin-purple transition-colors"
                    >
                      error
                    </a>
                    .
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
