import { useState } from "react";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { Quote, ChevronRight, User, Handshake, ExternalLink, Play } from "lucide-react";
import { DraftBadge } from "@/components/ui/DraftBadge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle } from
"@/components/ui/dialog";

import graceKloba from "@/assets/members/grace-kloba.png";
import tySmith from "@/assets/members/ty-smith.png";
import eveMatthaey from "@/assets/members/eve-matthaey.jpg";
import justinMancinelli from "@/assets/members/justin-mancinelli.png";
import mikhailZarechenskii from "@/assets/members/mikhail-zarechenskii.jpg";
import trishaGee from "@/assets/members/trisha-gee.jpg";
import piotrJagielski from "@/assets/members/piotr-jagielski.jpeg";
import bridgetPhillips from "@/assets/members/bridget-phillips.jpg";

interface QuoteItem {
  company: string;
  quote: string;
  author: string;
  photo: string | null;
  videoUrl?: string;
}

const quotes: QuoteItem[] = [
{
  company: "JetBrains",
  quote: "As the main contributor and a co-founder of the Kotlin Foundation, JetBrains continued improving the language and its ecosystem throughout 2025.\n\nOn the language side, we delivered improvements to smart casts, introduced nested typealiases, and expanded contracts to strengthen static analysis. We also progressed on several preview features, including name-based destructuring, explicit backing fields, must-use return values. These features are helping prevent subtle bugs and encouraging safer API design.\n\nIn tooling, K2 mode became enabled by default in the IDE, improving highlighting performance and overall code insight. We launched the first versions of Kotlin's LSP support, expanded Swift export for Kotlin/Native, and continued heavily investing in Kotlin Multiplatform, as well as WebAssembly and JavaScript targets.\n\nThroughout 2025, we worked closely with our fellow Kotlin Foundation members and our global community. From language design discussions and feedback cycles to conference talks and compiler and tooling contributions. We're truly grateful to everyone who helps make Kotlin better.",
  author: "Mikhail Zarechenskii",
  photo: mikhailZarechenskii,
  videoUrl: "https://www.youtube.com/embed/YeXdltKuIwg"
},
{
  company: "Google",
  quote: "As a founding member of the Kotlin Foundation, Google continues to drive the language's evolution through active committee leadership and technical innovation. In 2025, we collaborated with JetBrains to ensure seamless K2 support in Android Studio, rewriting features like Live Edit and Gemini AI Agent to achieve over 99% adoption in versions since the K2 stable release. Simultaneously, we advanced Kotlin Multiplatform (KMP) at scale, highlighted by Google Workspace's successful production A/B testing of Google Docs on iOS and a 70% reduction in build times.\n\nInternally, Kotlin has surpassed 77 million lines of code at Google, with over half of our Kotlin engineers now applying the language to server-side development. We look forward to another year of making Kotlin the best language for developers everywhere.",
  author: "Grace Kloba",
  photo: graceKloba
},
{
  company: "Meta",
  quote: "Kotlin powers over 80% of Meta's Android codebase, with apps like Instagram peaking at 90%. Codebase standardisation is a key part of our developer productivity and AI-generated code quality strategy. Safer APIs, automatic refactors, and maintainable code help engineers and our tooling move faster in massive codebases. We're committed to the Kotlin Foundation and to strengthening the ecosystem end-to-end, from open-sourcing and improving Buck2 and ktfmt to advancing Kotlin-first bytecode optimization with Redex.",
  author: "Eve Matthaey",
  photo: eveMatthaey
},
{
  company: "Block",
  quote: "In 2025, Block has once again been delighted with our commitment to Kotlin and KMP. We built updated foundational infrastructure for Cash App on KMP, giving us consistency and reliability across platforms that could not be achieved with multiple independent platform-native solutions.\n\nAlso, all of Block committed to Kotlin native dependency injection in a big way with our involvement in and migration to Metro–a performant new FIR-IR-based code generation dependency injection tool. This has cleaned up a lot of ugly syntax needed for Java native tools and sped up incremental compilation by almost 60%.",
  author: "Bridget Phillips",
  photo: bridgetPhillips,
  videoUrl: "https://www.youtube.com/embed/XVXdD0HQg4o"
},
{
  company: "Uber",
  quote: "In 2025 we started a dedicated Kotlin platform team to improve the developer experience for our engineers and bring Kotlin to new areas we didn't previously have. We made great progress on our migration platform that converted over a million lines of Android Java Code to production grade Kotlin. We saw our Kotlin infrastructure improve faster thanks to our our Large Scale Change and Agentic programs, we saw Kotlin for Bazel and the IDE mature for our engineers, we've been hard at work on our next generation Android Kotlin architecture, and we began early Kotlin support in our backend JVM monorepo to the reception of some enthusiastic engineers. We continue to work with the open-source Kotlin ecosystem, create connections and share our learnings through community events, and participate in the Kotlin Foundation committees to ensure the future of the language is bright, that developers have choices, and it continues to be a good option for all developers.",
  author: "Ty Smith",
  photo: tySmith,
  videoUrl: "https://www.youtube.com/embed/sg65-GbasrY"
},
{
  company: "Gradle",
  quote: "At Gradle Technologies, we continued to improve upon the major advancements introduced in the previous years. We're working hand in hand with the Kotlin team to make the Gradle Kotlin DSL experience better, from script compilation performance to IDE intelligence. We also leverage the best learnings from Kotlin DSL in the new Declarative Gradle project.",
  author: "Piotr Jagielski",
  photo: piotrJagielski
},
{
  company: "Touchlab",
  quote: "Being a member of the Kotlin Foundation has strengthened Touchlab's relationships with other member organizations for the good of our team, our clients, and our community. In 2025, our open source tool SKIE had its 2-year anniversary and saw over 400 large-scale projects using it. We also supported more KMP clients in 2025 than ever before. It's been an exciting year for Kotlin and it is clear that KMP adoption is accelerating.",
  author: "Justin Mancinelli",
  photo: justinMancinelli,
  videoUrl: "https://www.youtube.com/embed/-uvBSxEFRFY"
},
{
  company: "Kotzilla",
  quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  author: "TBD",
  photo: null
}];


const QuoteCard = ({
  item,
  index,
  onReadMore,
  onPlayVideo
}: {item: QuoteItem; index: number; onReadMore: () => void; onPlayVideo: () => void;}) => {
  const noReadMore = ["Google", "Meta", "Gradle"];
  const isLongQuote = item.quote.length > 150 && !noReadMore.includes(item.company);
  const hasVideo = !!item.videoUrl;

  // Extract YouTube video ID from embed URL
  const getVideoId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  const videoId = hasVideo ? getVideoId(item.videoUrl!) : null;

  return (
    <AnimatedCard delay={index * 0.05}>
      <div
        className={`bg-white rounded-2xl p-5 h-[520px] flex flex-col border border-border hover:border-kotlin-purple/30 transition-colors group ${!hasVideo && isLongQuote ? 'cursor-pointer' : ''}`}
        onClick={!hasVideo && isLongQuote ? onReadMore : undefined}>

        {/* Video thumbnail for cards with video */}
        {hasVideo && videoId &&
        <div
          className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 -mt-1 -mx-1 cursor-pointer"
          style={{ width: 'calc(100% + 8px)' }}
          onClick={onPlayVideo}>

            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`${item.author} - ${item.company}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('hqdefault')) {
                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }
              }} />

            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-kotlin-purple/85 group-hover:bg-kotlin-purple group-hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-xl shadow-kotlin-purple/25">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
          </div>
        }
        
        <div className="flex items-center gap-3 mb-3">
          {!hasVideo && (
          item.photo ?
          <img
            src={item.photo}
            alt={item.author}
            className="w-10 h-10 rounded-full object-cover" /> :

          <div className="w-10 h-10 rounded-full bg-kotlin-gray-light flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>)

          }
          <div>
            <p className="text-sm font-medium">{item.author}</p>
            <span className="text-sm font-semibold text-kotlin-purple">{item.company}</span>
          </div>
        </div>
        <Quote className="w-4 h-4 text-muted-foreground/30 mb-2" />
        <div className="text-sm text-muted-foreground leading-relaxed flex-1 overflow-hidden relative">
          <div className="space-y-2">
            {item.quote.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {isLongQuote && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
        {isLongQuote &&
        <button
          className="mt-2 text-xs text-kotlin-purple hover:underline flex items-center gap-0.5 self-start opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onReadMore();
          }}>

            Read more
            <ChevronRight className="w-3 h-3" />
          </button>
        }
      </div>
    </AnimatedCard>);

};

const CollaborationBlock = () => {
  return (
    <div id="collaboration" className="mt-8">
      <AnimatedCard delay={0.1}>
        <a
          href="https://kotlinfoundation.org/news/building-better-developer-experience/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-kotlin-black rounded-2xl px-7 py-6 text-white relative group transition-all duration-200 hover:bg-kotlin-black/90 hover:ring-1 hover:ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-kotlin-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background">

          {/* Top-right external link icon */}
          <ExternalLink className="absolute top-5 right-5 w-5 h-5 text-kotlin-purple group-hover:text-white group-hover:scale-110 transition-all duration-200 drop-shadow-[0_0_6px_rgba(127,82,255,0.5)]" />
          
          {/* Meta row: icon + gradient pill + company names */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <Handshake className="w-5 h-5 text-kotlin-purple/80" />
            <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-[#EF4857] via-[#C811E2] to-[#7F52FF] text-white">
              Collaboration
            </span>
            <span className="text-sm font-medium text-white/90 tracking-wide ml-0.5">JetBrains × Gradle × Google</span>
          </div>
          
          {/* Title */}
          <p className="font-semibold text-xl mb-2 pr-8">Building a Better Developer Experience</p>
          
          {/* Description */}
          <p className="text-[15px] text-white/70 leading-relaxed mb-2">
            Cross-company work to reduce friction between IDE, language, and build system – making Kotlin development faster and more reliable.
          </p>
          
          {/* Outcomes on separate line */}
          <p className="text-[15px] text-white/50 leading-relaxed">
            <span className="font-medium text-white/60">Outcomes:</span> Kotlin DSL as the default · Better IDE Integration · Declarative Gradle initiative · Gradle Daemon toolchain support · Project isolation initiative.
          </p>
        </a>
      </AnimatedCard>
    </div>);

};

export const MemberContributions = () => {
  const [selectedQuote, setSelectedQuote] = useState<QuoteItem | null>(null);
  const [videoItem, setVideoItem] = useState<QuoteItem | null>(null);

  return (
    <section id="member-contributions" className="section-gray section-spacing relative">

      <div className="container-kotlin">
        <AnimatedSection>
          <h2 className="heading-section mb-8 group">
            Members Contribution
            <SectionAnchor id="member-contributions" />
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quotes.filter(item => item.company !== "Kotzilla").map((item, index) =>
          <QuoteCard
            key={item.company}
            item={item}
            index={index}
            onReadMore={() => setSelectedQuote(item)}
            onPlayVideo={() => setVideoItem(item)} />

          )}
        </div>

        {/* Collaboration sub-block */}
        <CollaborationBlock />
      </div>

      {/* Video popup */}
      <Dialog open={!!videoItem} onOpenChange={() => setVideoItem(null)}>
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-black border-white/10">
          <DialogHeader>
            <DialogTitle className="sr-only">Video from {videoItem?.author}</DialogTitle>
          </DialogHeader>
          {videoItem?.videoUrl &&
          <div className="relative w-full aspect-video">
            <iframe
              src={`${videoItem.videoUrl}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
              title={`${videoItem.author} - ${videoItem.company}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full" />
          </div>
          }
        </DialogContent>
      </Dialog>

      {/* Full quote modal */}
      <Dialog open={!!selectedQuote} onOpenChange={() => setSelectedQuote(null)}>
        <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Quote from {selectedQuote?.author}</DialogTitle>
          </DialogHeader>
          {selectedQuote &&
          <div className="pt-2">
              {/* Video embed in modal */}
              {selectedQuote.videoUrl && (() => {
              const match = selectedQuote.videoUrl!.match(/embed\/([^?]+)/);
              const vid = match ? match[1] : null;
              return vid ?
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                    <iframe
                  src={`${selectedQuote.videoUrl}?modestbranding=1&rel=0&playsinline=1`}
                  title={`${selectedQuote.author} - ${selectedQuote.company}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full" />

                  </div> :
              null;
            })()}
              <div className="flex items-center gap-3 mb-4">
                {selectedQuote.photo ?
              <img
                src={selectedQuote.photo}
                alt={selectedQuote.author}
                className="w-12 h-12 rounded-full object-cover" /> :


              <div className="w-12 h-12 rounded-full bg-kotlin-gray-light flex items-center justify-center">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
              }
                <div>
                  <p className="font-medium">{selectedQuote.author}</p>
                  <span className="text-sm font-semibold text-kotlin-purple">{selectedQuote.company}</span>
                </div>
              </div>
              <Quote className="w-5 h-5 text-muted-foreground/30 mb-3" />
              <div className="text-muted-foreground leading-relaxed space-y-3">
                {selectedQuote.quote.split('\n\n').map((paragraph, i) =>
              <p key={i}>{paragraph}</p>
              )}
              </div>
            </div>
          }
        </DialogContent>
      </Dialog>
    </section>);

};
