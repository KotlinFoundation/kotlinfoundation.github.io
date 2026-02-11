import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { ExternalLink, User, Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
interface GSoCProject {
  title: string;
  description: string;
  contributor: string;
  mentors: string;
  storyUrl: string;
}
const projects: GSoCProject[] = [{
  title: "IntelliJ Platform Gradle Plugin — Gradle Reporting and Parallel Verifications",
  description: "Improving the Gradle plugin for IntelliJ Platform development.",
  contributor: "Victoria Chuks Alajemba",
  mentors: "Jakub Chrzanowski (JetBrains)",
  storyUrl: "https://kotlinfoundation.org/news/gsoc-2025-intellij-gradle-plugin/"
}, {
  title: "Improving Configuration Cache in Key Gradle Plugins",
  description: "Enhancing Gradle's configuration cache for better build performance.",
  contributor: "Nouran Atef",
  mentors: "Oleg Nenashev (ex-Gradle), Rafael Chaves (Gradle), Rodrigo Oliveira (Gradle)",
  storyUrl: "https://kotlinfoundation.org/news/gsoc-2025-gradle-cache/"
}, {
  title: "Enhanced Kotlin Code Quality Reporting with Gradle Problem API",
  description: "Detekt and Ktlint integration for unified code quality reporting.",
  contributor: "Vanessa Johnson",
  mentors: "Donát Csikós (Gradle), Reinhold Degenfellner (Gradle)",
  storyUrl: "https://kotlinfoundation.org/news/gsoc-2025-kotlin-quality-reporting/"
}, {
  title: "Gemini / Vertex AI in Firebase for Kotlin Multiplatform",
  description: "Android and iOS target support using Vertex AI in Firebase.",
  contributor: "Sean Chin Jun Kai",
  mentors: "Matt Dyor (Google)",
  storyUrl: "https://kotlinfoundation.org/news/gsoc-2025-gemini-vertex-firebase/"
}, {
  title: "Gradle Convention Plugin for Developing Jenkins Plugins",
  description: "Streamlining Jenkins plugin development with Gradle conventions.",
  contributor: "Aarav Mahajan",
  mentors: "Oleg Nenashev (ex-Gradle), Rahul Somasunderam (Netflix), Steve Hill (Netflix)",
  storyUrl: "https://kotlinfoundation.org/news/gsoc-2025-gradle-plugin-jenkins/"
}, {
  title: "Maven Central Publishing Plugin for Gradle (New APIs)",
  description: "Modern publishing workflows for Maven Central.",
  contributor: "Yongjun Hong",
  mentors: "Oleg Nenashev (ex-Gradle)",
  storyUrl: "https://kotlinfoundation.org/news/gsoc-2025-kotlin-lps/"
}, {
  title: "Build a Modern, Compiler-Integrated Kotlin Language Server",
  description: "Language Server Protocol implementation for Kotlin.",
  contributor: "Hemram",
  mentors: "Shauvik Roy Choudhary (Uber), Ryan U (Uber), Michael Noah (Uber), Claudia Babescu (Uber)",
  // TODO: Replace with dedicated foundation.org story link when available
  storyUrl: "https://blog.jetbrains.com/kotlin/2025/11/google-summer-of-code-2025/"
}];
const ProjectCard = ({
  project
}: {
  project: GSoCProject;
}) => <a href={project.storyUrl} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl p-5 h-full border border-border relative transition-all duration-200 hover:border-kotlin-purple/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-kotlin-purple focus:ring-offset-2">
    {/* External link icon - top right */}
    <div className="absolute top-4 right-4 p-1.5 rounded-md bg-transparent group-hover:bg-kotlin-purple/10 transition-colors">
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-kotlin-purple transition-colors" />
    </div>
    
    {/* Title + Description */}
    <h4 className="font-medium text-sm mb-1.5 leading-snug pr-8">{project.title}</h4>
    <p className="text-xs text-muted-foreground mb-4">{project.description}</p>
    
    {/* People block */}
    <div className="space-y-1 text-xs mt-auto">
      <div className="flex items-start gap-1.5">
        <User className="w-3 h-3 flex-shrink-0 mt-0.5 text-muted-foreground" />
        <div>
          <span className="text-muted-foreground">Contributor: </span>
          <span className="font-medium text-foreground">{project.contributor}</span>
        </div>
      </div>
      <div className="flex items-start gap-1.5">
        <Sparkles className="w-3 h-3 flex-shrink-0 mt-0.5 text-muted-foreground" />
        <div>
          <span className="text-muted-foreground">Mentor(s): </span>
          <span className="text-foreground">{project.mentors}</span>
        </div>
      </div>
    </div>
  </a>;
export const GSoC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplayPlugin = useRef(Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  }));
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);
  return <section id="gsoc" className="section-gray pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="container-kotlin">
        <AnimatedSection>
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-kotlin-purple/20 to-glow-magenta/20 text-kotlin-purple border border-kotlin-purple/20 mb-1.5">
            Year 3
          </span>
          <h2 className="heading-section group mb-4">
            Google Summer of Code
            <SectionAnchor id="gsoc" />
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">An online internship program that helps bring new contributors into open-source development. Kotlin Foundation mentors from Google, Gradle, Uber, and JetBrains worked on <strong className="font-semibold text-foreground">7 Kotlin ecosystem projects</strong> with mentees.</p>
        </AnimatedSection>

        <div className="mb-8">
          <Carousel setApi={setApi} plugins={[autoplayPlugin.current]} opts={{
          align: "start",
          loop: true
        }} className="w-full" onMouseEnter={() => autoplayPlugin.current.stop()} onMouseLeave={() => autoplayPlugin.current.play()}>
            <CarouselContent className="-ml-4">
              {projects.map(project => <CarouselItem key={project.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} />
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex items-center justify-between mt-4">
              {/* Pagination dots */}
              <div className="flex items-center gap-1.5">
                {Array.from({
                length: count
              }).map((_, index) => <button key={index} onClick={() => scrollTo(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${index === current ? "bg-kotlin-purple w-4" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
              </div>
              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 h-8 w-8 border-border hover:bg-white hover:border-kotlin-purple/30" />
                <CarouselNext className="static translate-y-0 h-8 w-8 border-border hover:bg-white hover:border-kotlin-purple/30" />
              </div>
            </div>
          </Carousel>
        </div>

        <AnimatedSection delay={0.2}>
          <a href="https://blog.jetbrains.com/kotlin/2025/11/google-summer-of-code-2025/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-kotlin-purple hover:underline font-medium">
            Read the full GSoC 2025 recap
            <ExternalLink className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>;
};
