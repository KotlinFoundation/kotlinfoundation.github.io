import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { Award, Users, GraduationCap, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import boothDemo from "@/assets/kotlinconf/booth-demo.jpg";
import crowd from "@/assets/kotlinconf/crowd.jpg";
import educationSession from "@/assets/kotlinconf/education-session.jpg";
import grantWinnerDemo from "@/assets/kotlinconf/grant-winner-demo.jpg";
import kodeeMascot from "@/assets/kotlinconf/kodee-mascot.jpg";
import boothConversation from "@/assets/kotlinconf/booth-conversation.jpg";

const photos = [
  { src: boothDemo, caption: "Kotlin Foundation booth" },
  { src: grantWinnerDemo, caption: "Grant winner demo" },
  { src: educationSession, caption: "Education Track session" },
  { src: crowd, caption: "KotlinConf 2025 venue" },
  { src: kodeeMascot, caption: "Kodee meets the community" },
  { src: boothConversation, caption: "Community conversations" },
];

const educationLinks = [
  {
    title: "How to Build Your Own Kotlin Course",
    url: "https://2025.kotlinconf.com/schedule/?day=2025-05-22&session=d651b439-7f20-5c73-b932-92b5ea894b2f",
  },
  {
    title: "Interactive Session on Shaping Kotlin Education",
    url: "https://2025.kotlinconf.com/schedule/?day=2025-05-22&session=551c16b0-70a5-542f-8362-7fd18fc55ac8",
  },
];

export const KotlinConfPresence = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <section id="kotlinconf-presence" className="section-white section-spacing">
      <div className="container-kotlin">
        <AnimatedSection>
          <h2 className="heading-section mb-4 group">
            Kotlin Foundation at KotlinConf
            <SectionAnchor id="kotlinconf-presence" />
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">
            In 2025, we expanded community engagement by bringing grant winners and Student Contest winners to KotlinConf, where they had the chance to showcase their projects at the Kotlin Foundation booth.
          </p>
        </AnimatedSection>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <AnimatedCard delay={0.05}>
            <div className="bg-white rounded-2xl p-5 border border-border text-center h-full flex flex-col justify-center">
              <Award className="w-8 h-8 text-kotlin-purple mx-auto mb-3" />
              <p className="text-sm font-medium">
                Grant winners showcased their projects at the Kotlin Foundation booth
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={0.1}>
            <div className="bg-white rounded-2xl p-5 border border-border text-center h-full flex flex-col justify-center">
              <Users className="w-8 h-8 text-kotlin-purple mx-auto mb-3" />
              <p className="text-sm font-medium">
                Student Contest winners presented their apps at the Kotlin Foundation booth
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={0.15}>
            <div className="bg-white rounded-2xl p-5 border border-border text-center h-full flex flex-col justify-center">
              <GraduationCap className="w-8 h-8 text-kotlin-purple mx-auto mb-3" />
              <p className="text-sm font-medium mb-2">
                Education Track sessions at KotlinConf supported Kotlin educators.
              </p>
              <div className="space-y-1">
                {educationLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 text-xs text-kotlin-purple hover:underline leading-tight"
                  >
                    {link.title}
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Photo Grid - Masonry-lite layout */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* First photo - larger, spans 2 columns on desktop */}
            <div 
              className="col-span-2 md:col-span-2 md:row-span-2 cursor-pointer group relative overflow-hidden rounded-2xl border border-border shadow-sm"
              onClick={() => openLightbox(0)}
            >
              <div className="aspect-[16/10] md:aspect-[4/3] h-full">
                <img
                  src={photos[0].src}
                  alt={photos[0].caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{photos[0].caption}</p>
                </div>
              </div>
            </div>

            {/* Remaining 5 photos */}
            {photos.slice(1).map((photo, index) => (
              <div
                key={index + 1}
                className="cursor-pointer group relative overflow-hidden rounded-2xl border border-border shadow-sm"
                onClick={() => openLightbox(index + 1)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black/95 border-none">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50"
              aria-label="Next photo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Photo */}
            <div className="flex items-center justify-center min-h-[60vh] p-8">
              <img
                src={photos[currentPhotoIndex].src}
                alt={photos[currentPhotoIndex].caption}
                className="max-h-[75vh] max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-center font-medium">
                {photos[currentPhotoIndex].caption}
              </p>
              <p className="text-white/50 text-center text-sm mt-1">
                {currentPhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
