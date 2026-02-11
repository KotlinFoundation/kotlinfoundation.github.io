import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { AtAGlance } from "@/components/sections/AtAGlance";
import { LanguageStewardship } from "@/components/sections/LanguageStewardship";
import { Members } from "@/components/sections/Members";
import { MemberContributions } from "@/components/sections/MemberContributions";
import { GrantsProgram } from "@/components/sections/GrantsProgram";
import { StudentContest } from "@/components/sections/StudentContest";
import { GSoC } from "@/components/sections/GSoC";
import { KotlinConfPresence } from "@/components/sections/KotlinConfPresence";
import { Finances } from "@/components/sections/Finances";
import { LookingAhead } from "@/components/sections/LookingAhead";
import { JoinUs } from "@/components/sections/JoinUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Mission />
        <Members />
        <AtAGlance />
        <LanguageStewardship />
        <MemberContributions />
        <GrantsProgram />
        <StudentContest />
        <KotlinConfPresence />
        <GSoC />
        <Finances />
        <LookingAhead />
        <JoinUs />
      </main>
    </div>
  );
};

export default Index;
