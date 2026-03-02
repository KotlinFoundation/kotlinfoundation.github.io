import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";


interface YearFinance {
  year: string;
  income: number;
  incomeFormatted: string;
  totalExpenses: number;
  expensesFormatted: string;
  breakdown: {key: string;label: string;percent: number;color: string;description: string;}[];
  muted?: boolean;
}

const years: YearFinance[] = [
{
  year: "2024",
  income: 182,
  incomeFormatted: "$182K",
  totalExpenses: 112,
  expensesFormatted: "$112K",
  muted: true,
  breakdown: [
  { key: "operating", label: "Operating", percent: 52, color: "#B8A3E8", description: "Business operations and administration" },
  { key: "sponsorship", label: "Sponsorship", percent: 35, color: "#C9B8F0", description: "Grants program and student contest" },
  { key: "trademark", label: "Trademark", percent: 13, color: "#DDD0F5", description: "Kotlin trademark protection" }]

},
{
  year: "2025",
  income: 371,
  incomeFormatted: "$371K",
  totalExpenses: 116,
  expensesFormatted: "$116K",
  muted: false,
  breakdown: [
  { key: "operating", label: "Operating", percent: 54, color: "#7F52FF", description: "Business operations and administration" },
  { key: "trademark", label: "Trademark", percent: 32, color: "#9F7AFF", description: "Kotlin trademark protection" },
  { key: "sponsorship", label: "Sponsorship", percent: 14, color: "#BFA3FF", description: "Grants program and student contest" }]

}];


const maxValue = Math.max(...years.flatMap((y) => [y.income, y.totalExpenses]));

const IncomeBar = ({ data }: {data: YearFinance;}) => {
  const widthPercent = data.income / maxValue * 100;
  return (
    <div className="w-full bg-muted/30 rounded-full h-8 overflow-hidden relative">
      <div
        className={`h-full rounded-full transition-all duration-700 ${data.muted ? 'bg-gradient-to-r from-[#D4A5DC] to-[#B8A3E8]' : 'bg-gradient-to-r from-glow-magenta to-kotlin-purple'}`}
        style={{ width: `${widthPercent}%` }} />

      <span className={`absolute inset-y-0 left-3 flex items-center text-xs font-semibold ${widthPercent > 15 ? 'text-white' : 'text-foreground'}`}>
        {data.incomeFormatted}
      </span>
    </div>);

};

const ExpenseBreakdown = ({ data }: {data: YearFinance;}) => {
  const widthPercent = data.totalExpenses / maxValue * 100;
  return (
    <div className="space-y-2">
      <div className="w-full h-6 relative">
        <div className="bg-muted/30 rounded-full h-full absolute inset-0" />
        <div className="h-full rounded-full overflow-hidden flex" style={{ width: `${widthPercent}%` }}>
          {data.breakdown.map((seg) =>
          <div
            key={seg.key}
            className="h-full transition-all duration-700"
            style={{ width: `${seg.percent}%`, backgroundColor: seg.color }} />

          )}
        </div>
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {data.breakdown.map((seg) =>
        <div key={seg.key} className="flex items-center gap-1.5 text-xs">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-muted-foreground">{seg.label}</span>
            <span className="font-semibold text-foreground">{seg.percent}%</span>
          </div>
        )}
      </div>
    </div>);

};

export const Finances = () => {
  return (
    <section id="finances" className="section-light section-spacing">
      <div className="container-kotlin">
        <AnimatedSection>
          <h2 className="heading-section group mb-8">
            Financial Report
            <SectionAnchor id="finances" />
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {years.map((data, i) =>
          <AnimatedCard key={data.year} delay={0.1 + i * 0.1}>
              <div className={`bg-white rounded-2xl p-6 md:p-8 border border-border ${data.muted ? 'opacity-75' : ''}`}>
                {/* Year header */}
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="text-lg font-semibold">{data.year}</h3>
                  {!data.muted

                }
                </div>

                {/* Income row */}
                <div className="mb-5">
                  <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider font-medium">Income</p>
                  <IncomeBar data={data} />
                </div>

                {/* Expenses row */}
                <div>
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Expenses</p>
                    <span className="text-sm font-semibold text-foreground">{data.expensesFormatted}</span>
                  </div>
                  <ExpenseBreakdown data={data} />
                </div>
              </div>
            </AnimatedCard>
          )}
        </div>
      </div>
    </section>);

};