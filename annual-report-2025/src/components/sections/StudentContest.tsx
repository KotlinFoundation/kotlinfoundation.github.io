import { useState } from "react";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { ExternalLink, Github, ChevronRight, Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import andreeaPhoto from "@/assets/members/andreea-vrabie.webp";
import mikolajPhoto from "@/assets/members/mikolaj-lemanski.webp";
import valeriiPhoto from "@/assets/members/valerii-ovchinnikov.webp";
import { ParticipationMap } from "./student-contest/ParticipationMap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList } from
"recharts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle } from
"@/components/ui/dialog";

const submissionsData = [
{ year: "2023", submissions: 43, highlight: false, inProgress: false },
{ year: "2024", submissions: 59, highlight: false, inProgress: false },
{ year: "2025", submissions: 55, highlight: true, inProgress: false },
{ year: "2026*", submissions: 88, highlight: false, inProgress: true }];


const winners2025 = [
{
  project: "arandomroom",
  author: "Andreea-Ștefana Vrabie",
  university: "University of Copenhagen",
  github: "https://github.com/andreeabirdie/arandomroom",
  initials: "AV",
  avatar: "andreea",
  quote:
  "When I got the email announcing the challenge I thought it sounded cool, but I discarded it because I was a student, working part-time, and didn't have much extra time. The very next day a coworker asked me if I'd heard about it – I took it as a sign that I need to take part.",
  fullQuote:
  "I am one of the winners of the Kotlin Student Challenge 2025. When I got the email announcing the challenge I thought it sounded cool, but I discarded it because, at the time, I was a student, working part-time, and didn't have much extra time on my hands. The very next day a coworker asked me if I'd heard about it and wanted to participate, and I took it as a sign that I need to take part in this to sort of prove myself. Now, looking back I don't regret putting in the effort.\n\nI honestly spent most of the first month just thinking about what I should do, juggling ideas, and re-reading the criteria. I think I restarted the process 3 different times. The idea of being able to do anything was a bit unsettling, especially because you're also judged on creativity and originality, so then it becomes a bit of a personal challenge. I kept coming back to this idea of a text-based game, I just thought it would have been cool, and it sounded fun to work on. And then the idea to combine this with generative AI came almost naturally along the way, because it allowed the game to be replayed, which is neat.\n\nThe process afterwards went pretty fast. I'm not saying it's easy, but it was fun to use what I already knew while also giving CMP a try. It was also imperative for me to keep the architecture as clean as possible and make it look nice, visually, because it's possible and because it just makes the experience of using something that much better.\n\nI would have liked to win, but to me it was important that I managed to do something I was proud of and learn something along the way. Of course, actually winning also felt nice because it validated that idea. I then went to KotlinConf 2025 and it was super fun! It's a bit surreal, to be there with a whole community of people that do the same thing as you everyday. It's one thing to code in your room or at work, it's another to see your ideas resonate with others on that scale."
},
{
  project: "PayFlo",
  author: "Valerii Ovchinnikov",
  university: "Constructor University",
  github: "https://github.com/Valerii3/PayFlo",
  initials: "VO",
  avatar: "valerii" as string | null,
  quote:
  "Kotlin Multiplatform showed me that you can just start building things. It became a starting point for many of my later projects.",
  fullQuote: "Kotlin Multiplatform showed me that you can just start building things. It became a starting point for many of my later projects, helped me explore new technologies, and the trip to KotlinConf was truly inspiring." as string | null
},
{
  project: "TinyComposer",
  author: "Mikołaj Lemański",
  university: "The School of Management and Banking in Cracow",
  github: "https://github.com/lemcoder/TinyComposer",
  initials: "ML",
  avatar: "mikolaj" as string | null,
  quote:
  "Winning the contest and traveling to KotlinConf was an incredible experience. It gave me the opportunity to connect with the community and learn directly from industry experts.",
  fullQuote: "Winning the contest and traveling to KotlinConf was an incredible experience. It gave me the opportunity to connect with the community and learn directly from industry experts. The experience also opened up many opportunities and helped me expand my professional network in a meaningful way." as string | null
}];


const avatarMap: Record<string, string> = { andreea: andreeaPhoto, mikolaj: mikolajPhoto, valerii: valeriiPhoto };

export const StudentContest = () => {
  const [selectedWinner, setSelectedWinner] = useState<typeof winners2025[0] | null>(null);

  return (
    <section id="student-contest" className="section-gray pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="container-kotlin">
        {/* Header */}
        <AnimatedSection>
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-kotlin-purple/20 to-glow-magenta/20 text-kotlin-purple border border-kotlin-purple/20 mb-1.5">
            Year 3
          </span>
          <h2 className="heading-section group mb-4">
            Kotlin Multiplatform Student Contest
            <SectionAnchor id="student-contest" />
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">
            An annual Kotlin Foundation contest for students and recent graduates to build cross-platform apps 
            (Android, iOS, desktop, web, server) and explore Kotlin Multiplatform.
          </p>
        </AnimatedSection>

        {/* Stats + Chart Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* 2025 Snapshot - Now first */}
          <AnimatedCard delay={0.1}>
            <div className="bg-kotlin-black rounded-2xl p-6 text-white h-full flex flex-col justify-center">
              <h3 className="text-sm font-medium text-white/60 mb-4">2025 Results</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-semibold">55</p>
                  <p className="text-sm text-white/60">submissions</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">38</p>
                  <p className="text-sm text-white/60">eligible entries</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-kotlin-purple flex items-center gap-2">
                    3
                    <Trophy className="w-6 h-6" />
                  </p>
                  <p className="text-sm text-white/60">winners</p>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Chart - Now second */}
          <AnimatedCard delay={0.15} className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-border h-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Submissions over time</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={submissionsData} margin={{ top: 20, right: 10, left: -10, bottom: 5 }}>
                    <XAxis
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />

                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      domain={[0, 100]} />

                    <Bar dataKey="submissions" radius={[6, 6, 0, 0]} maxBarSize={48}>
                      {submissionsData.map((entry, index) =>
                      <Cell
                        key={`cell-${index}`}
                        fill={
                        entry.highlight ?
                        'hsl(var(--kotlin-purple))' :
                        entry.inProgress ?
                        'hsl(var(--kotlin-purple) / 0.3)' :
                        'hsl(var(--muted-foreground) / 0.2)'
                        } />

                      )}
                      <LabelList
                        dataKey="submissions"
                        position="top"
                        style={{ fontSize: 12, fontWeight: 600, fill: 'hsl(var(--foreground))' }} />

                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-muted-foreground mt-2">*2026 contest currently in progress</p>
            </div>
          </AnimatedCard>
        </div>

        {/* Global Participation Map */}
        <ParticipationMap />

        {/* 2025 Winners - Unified cards with quotes */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Trophy className="w-5 h-5 text-kotlin-purple" />
              2025 Winners
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Each winner received a trip to KotlinConf 2025 in Copenhagen – tickets, travel, accommodation, and Kotlin swag.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {winners2025.map((winner, index) =>
          <AnimatedCard key={winner.project} delay={0.25 + index * 0.05}>
              <button
              onClick={() => setSelectedWinner(winner)}
              className="bg-white rounded-2xl p-5 border border-border h-full flex flex-col text-left w-full hover:border-kotlin-purple/30 transition-colors group">

                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="w-10 h-10 shrink-0">
                    {winner.avatar && avatarMap[winner.avatar] && <AvatarImage src={avatarMap[winner.avatar]} alt={winner.author} />}
                    <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
                      {winner.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground">{winner.project}</h4>
                    <p className="text-sm text-foreground">{winner.author}</p>
                    <p className="text-xs text-muted-foreground">{winner.university}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 italic flex-1">
                  "{winner.quote}"
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                  href={winner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm text-kotlin-purple hover:underline">

                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-kotlin-purple transition-colors" />
                </div>
              </button>
            </AnimatedCard>
          )}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <a
            href="https://kotlinfoundation.org/news/kmp-contest-winners/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-kotlin-purple hover:underline">

            Read the full announcement
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </AnimatedSection>

        {/* Winner Modal */}
        <Dialog open={!!selectedWinner} onOpenChange={() => setSelectedWinner(null)}>
          <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  {selectedWinner?.avatar && avatarMap[selectedWinner.avatar] && <AvatarImage src={avatarMap[selectedWinner.avatar]} alt={selectedWinner?.author} />}
                  <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                    {selectedWinner?.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-lg font-semibold">{selectedWinner?.author}</DialogTitle>
                  <p className="text-sm text-muted-foreground">{selectedWinner?.university}</p>
                </div>
              </div>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed italic whitespace-pre-line">
                "{selectedWinner?.fullQuote || selectedWinner?.quote}"
              </p>
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-1">Project: {selectedWinner?.project}</p>
                <a
                  href={selectedWinner?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-kotlin-purple hover:underline">

                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>);

};