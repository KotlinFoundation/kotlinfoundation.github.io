import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { SectionAnchor } from "@/components/ui/SectionAnchor";
import { DraftBadge } from "@/components/ui/DraftBadge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, TooltipProps, CartesianGrid } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const financeData = [
  { 
    year: "2024", 
    income: 182,
    operating: 58,
    sponsorship: 39,
    trademark: 15,
    legal: 0,
  },
  { 
    year: "2025", 
    income: null,
    operating: null,
    sponsorship: null,
    trademark: null,
    legal: null,
  },
];

// Calculate percentages for 2024
const total2024Expenses = 58 + 39 + 15;
const expensePercents = {
  operating: Math.round((58 / total2024Expenses) * 100),
  sponsorship: Math.round((39 / total2024Expenses) * 100),
  trademark: Math.round((15 / total2024Expenses) * 100),
};

const categoryInfo: Record<string, { label: string; description: string; color: string; mutedColor: string; amount: number; percent: number }> = {
  operating: { 
    label: "Operating", 
    description: "Business operations & administration, tax filing, independent board member",
    color: "#7F52FF",
    mutedColor: "#B8A3E8",
    amount: 58,
    percent: expensePercents.operating,
  },
  sponsorship: { 
    label: "Sponsorship", 
    description: "Support for the Grants program and the student contest",
    color: "#9F7AFF",
    mutedColor: "#C9B8F0",
    amount: 39,
    percent: expensePercents.sponsorship,
  },
  trademark: { 
    label: "Trademark", 
    description: "Ensuring the validity and stability of the Kotlin trademark",
    color: "#BFA3FF",
    mutedColor: "#DDD0F5",
    amount: 15,
    percent: expensePercents.trademark,
  },
  legal: { 
    label: "Legal", 
    description: "Expanding the Foundation through new members",
    color: "#DFCCFF",
    mutedColor: "#EDE6FA",
    amount: 0,
    percent: 0,
  },
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null;
  
  const yearData = financeData.find(d => d.year === label);
  const hasData = yearData?.income !== null;
  
  if (!hasData) {
    return (
      <div className="bg-kotlin-black text-white p-3 rounded-lg shadow-xl border border-white/10">
        <p className="font-medium mb-1">{label}</p>
        <p className="text-sm text-white/60">Data not yet available</p>
      </div>
    );
  }

  return (
    <div className="bg-kotlin-black text-white p-4 rounded-lg shadow-xl border border-white/10 min-w-[220px]">
      <p className="font-medium mb-3">{label}</p>
      {payload.map((entry) => {
        if (!entry.value || entry.value === 0) return null;
        const key = entry.dataKey as string;
        const info = categoryInfo[key];
        
        if (key === "income") {
          return (
            <div key={key} className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-kotlin-purple to-glow-magenta" />
                <span className="text-sm">Income</span>
              </div>
              <span className="text-sm font-semibold">${entry.value}K</span>
            </div>
          );
        }
        
        if (info) {
          return (
            <div key={key} className="mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: info.color }} />
                  <span className="text-sm">{info.label}</span>
                </div>
                <span className="text-sm font-semibold">${entry.value}K</span>
              </div>
              <p className="text-xs text-white/50 ml-5 mt-0.5">{info.description}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

// Custom label for expense bars - muted colors, percentages only
const renderBarLabel = (dataKey: string, isMobile: boolean) => (props: any) => {
  const { x, y, width, height, value } = props;
  if (!value || value === 0 || height < 20) return null;
  
  // Hide labels on mobile
  if (isMobile) return null;
  
  const info = categoryInfo[dataKey];
  if (!info) return null;
  
  // Muted colors to match the chart
  const textColor = "rgba(25,25,28,0.7)";
  const textColorMuted = "rgba(25,25,28,0.5)";
  
  return (
    <g>
      <text
        x={x + 14}
        y={y + height / 2}
        fill={textColor}
        textAnchor="start"
        dominantBaseline="middle"
        fontSize={13}
        fontWeight={400}
      >
        {info.percent}%
        <tspan fill={textColorMuted}> {info.label}</tspan>
      </text>
    </g>
  );
};

export const Finances = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="finances" className="section-light section-spacing">
      <div className="container-kotlin">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="heading-section group">
              Finance Report
              <SectionAnchor id="finances" />
            </h2>
            <DraftBadge variant="section" tooltip="Financial data needs final verification before publishing" />
          </div>
        </AnimatedSection>

        {/* Finance Report - Combined Chart */}
        <AnimatedCard delay={0.1}>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-kotlin-purple to-glow-magenta" />
                  <span className="text-muted-foreground">Income</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-kotlin-purple/50" />
                  <span className="text-muted-foreground">Expenses</span>
                </div>
              </div>
              {/* Mobile tap hint */}
              {isMobile && (
                <p className="text-xs text-muted-foreground">Tap bars for details</p>
              )}
            </div>
            <div className="h-[380px] md:h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={financeData} barGap={32} barCategoryGap="10%">
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    vertical={false} 
                    stroke="#E8E8E8"
                  />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#19191C', fontSize: 14, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#888', fontSize: 12 }}
                    tickFormatter={(value) => `$${value}K`}
                    domain={[0, 200]}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(127, 82, 255, 0.05)' }} />
                  <defs>
                    <linearGradient id="incomeGradient2024" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#B8A3E8" />
                      <stop offset="100%" stopColor="#D4A5DC" />
                    </linearGradient>
                  </defs>
                  {/* Income bar - muted for 2024 */}
                  <Bar 
                    dataKey="income" 
                    name="Income" 
                    fill="url(#incomeGradient2024)" 
                    radius={[6, 6, 0, 0]}
                    barSize={160}
                  />
                  {/* Stacked expenses bars with labels */}
                  <Bar 
                    dataKey="operating" 
                    name="Operating" 
                    stackId="expenses"
                    fill={categoryInfo.operating.mutedColor}
                    barSize={160}
                    label={renderBarLabel("operating", isMobile)}
                  />
                  <Bar 
                    dataKey="sponsorship" 
                    name="Sponsorship" 
                    stackId="expenses"
                    fill={categoryInfo.sponsorship.mutedColor}
                    barSize={160}
                    label={renderBarLabel("sponsorship", isMobile)}
                  />
                  <Bar 
                    dataKey="trademark" 
                    name="Trademark" 
                    stackId="expenses"
                    fill={categoryInfo.trademark.mutedColor}
                    radius={[6, 6, 0, 0]}
                    barSize={160}
                    label={renderBarLabel("trademark", isMobile)}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Quick summary below chart */}
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-semibold text-kotlin-purple/60">$182K</p>
                <p className="text-xs text-muted-foreground">2024 Income</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-muted-foreground/70">$112K</p>
                <p className="text-xs text-muted-foreground">2024 Expenses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-muted-foreground/40">TBD</p>
                <p className="text-xs text-muted-foreground">2025 Income</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-muted-foreground/40">TBD</p>
                <p className="text-xs text-muted-foreground">2025 Expenses</p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};
