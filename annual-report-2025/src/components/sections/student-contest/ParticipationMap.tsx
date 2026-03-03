import { useMemo } from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

const participationData = [
  { name: "India", count: 17 },
  { name: "United States", count: 7 },
  { name: "Nigeria", count: 7 },
  { name: "Kenya", count: 5 },
  { name: "Germany", count: 4 },
  { name: "Ethiopia", count: 3 },
  { name: "Ghana", count: 3 },
  { name: "Turkey", count: 3 },
  { name: "Vietnam", count: 2 },
  { name: "Australia", count: 2 },
  { name: "Colombia", count: 2 },
  { name: "Mexico", count: 2 },
  { name: "France", count: 2 },
  { name: "Bangladesh", count: 1 },
  { name: "China", count: 1 },
  { name: "Egypt", count: 1 },
  { name: "Uzbekistan", count: 1 },
  { name: "Pakistan", count: 1 },
  { name: "Algeria", count: 1 },
  { name: "Indonesia", count: 1 },
  { name: "Austria", count: 1 },
  { name: "Uganda", count: 1 },
  { name: "Bulgaria", count: 1 },
  { name: "Chile", count: 1 },
  { name: "Rwanda", count: 1 },
  { name: "Philippines", count: 1 },
  { name: "Japan", count: 1 },
  { name: "Azerbaijan", count: 1 },
  { name: "Singapore", count: 1 },
  { name: "Angola", count: 1 },
  { name: "Hungary", count: 1 },
  { name: "Ecuador", count: 1 },
];

const totals = participationData.reduce(
  (acc, d) => ({ total: acc.total + d.count, countries: acc.countries + 1 }),
  { total: 0, countries: 0 },
);

const getOpacity = (count: number) => {
  if (count >= 10) return 1;
  if (count >= 5) return 0.75;
  if (count >= 3) return 0.5;
  return 0.25;
};

const CustomTreemapContent = (props: any) => {
  const { x, y, width, height, name, count } = props;
  if (width < 4 || height < 4) return null;

  const showCount = width > 30 && height > 28;
  const showName = width > 40 && height > 22;
  const charWidth = 6.5; // approximate px per character at fontSize 10
  const nameWidth = (name?.length || 0) * charWidth;
  const fontSize = width > 80 && height > 50 ? 13 : nameWidth > width - 8 ? Math.max(7, Math.floor((width - 8) / (name?.length || 1) * 1.55)) : 10;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={`hsla(265, 60%, 55%, ${getOpacity(count)})`}
        stroke="white"
        strokeWidth={2}
      />
      {showName && (
        <text
          x={x + width / 2}
          y={y + height / 2 + (showCount ? -6 : 2)}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={fontSize}
          fontWeight={500}
          style={{ pointerEvents: "none" }}
        >
          {name}
        </text>
      )}
      {showCount && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="central"
          fill="hsla(0, 0%, 100%, 0.8)"
          fontSize={11}
          fontWeight={700}
          style={{ pointerEvents: "none" }}
        >
          {count}
        </text>
      )}
    </g>
  );
};

export const ParticipationMap = () => {
  const treeData = useMemo(
    () => [
      {
        name: "",
        children: participationData.map((d) => ({
          name: d.name,
          size: d.count,
          count: d.count,
        })),
      },
    ],
    [],
  );

  return (
    <AnimatedCard delay={0.2}>
      <div className="bg-white rounded-2xl p-5 mb-8 border border-border">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-base font-medium text-foreground">
            Students from around the world
          </h3>
          <div className="flex items-center gap-5 shrink-0">
            <div className="text-right">
              <p className="text-xl font-semibold text-foreground">{totals.countries}</p>
              <p className="text-xs text-muted-foreground">countries</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-kotlin-purple">{totals.total}</p>
              <p className="text-xs text-muted-foreground">submissions</p>
            </div>
          </div>
        </div>

        {/* Treemap */}
        <div className="w-full h-56 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={treeData}
              dataKey="size"
              aspectRatio={4 / 3}
              content={<CustomTreemapContent />}
              isAnimationActive={false}
            />
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
          <span className="text-[11px] text-muted-foreground/60">Submissions</span>
          <div className="flex items-center gap-3">
            {[
              { label: "10+", opacity: 1 },
              { label: "5–9", opacity: 0.75 },
              { label: "3–4", opacity: 0.5 },
              { label: "1–2", opacity: 0.25 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: `hsla(265, 60%, 55%, ${item.opacity})`,
                  }}
                />
                <span className="text-[11px] text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};
