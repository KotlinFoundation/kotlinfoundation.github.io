import { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// 2025 participation data – ISO 3166-1 numeric codes
const participationByCode: Record<string, { count: number; name: string }> = {
  "356": { count: 17, name: "India" },
  "840": { count: 7, name: "United States" },
  "566": { count: 7, name: "Nigeria" },
  "404": { count: 5, name: "Kenya" },
  "276": { count: 4, name: "Germany" },
  "231": { count: 3, name: "Ethiopia" },
  "288": { count: 3, name: "Ghana" },
  "792": { count: 3, name: "Turkey" },
  "704": { count: 2, name: "Vietnam" },
  "036": { count: 2, name: "Australia" },
  "170": { count: 2, name: "Colombia" },
  "484": { count: 2, name: "Mexico" },
  "250": { count: 2, name: "France" },
  "050": { count: 1, name: "Bangladesh" },
  "156": { count: 1, name: "China" },
  "818": { count: 1, name: "Egypt" },
  "860": { count: 1, name: "Uzbekistan" },
  "586": { count: 1, name: "Pakistan" },
  "012": { count: 1, name: "Algeria" },
  "360": { count: 1, name: "Indonesia" },
  "040": { count: 1, name: "Austria" },
  "800": { count: 1, name: "Uganda" },
  "100": { count: 1, name: "Bulgaria" },
  "152": { count: 1, name: "Chile" },
  "646": { count: 1, name: "Rwanda" },
  "608": { count: 1, name: "Philippines" },
  "392": { count: 1, name: "Japan" },
  "031": { count: 1, name: "Azerbaijan" },
  "702": { count: 1, name: "Singapore" },
  "024": { count: 1, name: "Angola" },
  "348": { count: 1, name: "Hungary" },
  "218": { count: 1, name: "Ecuador" },
};

const getCountryFill = (code: string) => {
  const data = participationByCode[code];
  if (!data) return "hsl(var(--muted-foreground) / 0.15)";
  if (data.count >= 10) return "hsl(var(--kotlin-purple))";
  if (data.count >= 5) return "hsl(var(--kotlin-purple) / 0.75)";
  if (data.count >= 3) return "hsl(var(--kotlin-purple) / 0.55)";
  return "hsl(var(--kotlin-purple) / 0.38)";
};

const totals = Object.values(participationByCode).reduce(
  (acc, d) => ({ total: acc.total + d.count, countries: acc.countries + 1 }),
  { total: 0, countries: 0 },
);

const top5 = Object.values(participationByCode)
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);

const legendItems = [
  { label: "10+", opacity: 1 },
  { label: "5–9", opacity: 0.75 },
  { label: "3–4", opacity: 0.55 },
  { label: "1–2", opacity: 0.38 },
];

const MapChart = memo(() => {
  const [tooltipContent, setTooltipContent] = useState<{
    name: string;
    count: number;
  } | null>(null);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={!!tooltipContent}>
        <TooltipTrigger asChild>
          <div className="relative h-56 md:h-72 w-full overflow-hidden">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 210,
                center: [20, 30],
              }}
              style={{ width: "100%", height: "100%", marginTop: "-30px" }}
            >
              <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const code = geo.id;
                      const data = participationByCode[code];
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={getCountryFill(code)}
                          stroke="hsl(var(--border))"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none", transition: "fill 0.2s ease" },
                            hover: {
                              outline: "none",
                              cursor: data ? "pointer" : "default",
                            },
                            pressed: { outline: "none" },
                          }}
                          onMouseEnter={() => {
                            if (data) setTooltipContent(data);
                          }}
                          onMouseLeave={() => setTooltipContent(null)}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </TooltipTrigger>
        {tooltipContent && (
          <TooltipContent
            side="top"
            className="bg-white text-foreground border-border px-3 py-2"
          >
            <div className="text-sm">
              <p className="font-semibold">{tooltipContent.name}</p>
              <p className="text-xs text-muted-foreground">
                {tooltipContent.count} submission{tooltipContent.count > 1 ? "s" : ""}
              </p>
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
});

MapChart.displayName = "MapChart";

export const ParticipationMap = () => {
  return (
    <AnimatedCard delay={0.2}>
      <div className="bg-white rounded-2xl p-5 mb-8 border border-border">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-2">
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

        {/* Map + Top 5 sidebar */}
        <div className="flex items-stretch gap-4">
          <div className="flex-1 -mx-2">
            <MapChart />
          </div>

          {/* Top 5 */}
          <div className="hidden md:flex flex-col justify-center gap-1.5 shrink-0 pr-1">
            <p className="text-[11px] font-medium text-muted-foreground/60 uppercase tracking-wider mb-1">
              Top countries
            </p>
            {top5.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{d.name}</span>
                <span className="text-foreground font-semibold tabular-nums">{d.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-2 pt-2 border-t border-border">
          <span className="text-[11px] text-muted-foreground/60">Submissions</span>
          <div className="flex items-center gap-3">
            {legendItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: `hsl(var(--kotlin-purple) / ${item.opacity})`,
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
