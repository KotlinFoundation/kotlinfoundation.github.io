import { AlertTriangle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DraftBadgeProps {
  /** Placement variant affects sizing and positioning */
  variant?: "section" | "block" | "inline";
  /** Optional custom tooltip text */
  tooltip?: string;
}

/**
 * High-visibility marker for draft/unverified content.
 * Intentionally styled outside the brand aesthetic to stand out.
 * Shows tooltip in a popover on click.
 */
export const DraftBadge = ({ 
  variant = "block",
  tooltip = "Draft – needs review/verification"
}: DraftBadgeProps) => {
  const sizes = {
    section: "px-3 py-1.5 text-xs",
    block: "px-2.5 py-1 text-[11px]",
    inline: "px-2 py-0.5 text-[10px]",
  };

  const iconSizes = {
    section: "w-3.5 h-3.5",
    block: "w-3 h-3",
    inline: "w-2.5 h-2.5",
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className={`
            inline-flex items-center gap-1.5 
            ${sizes[variant]}
            bg-[#FFC107] text-[#111111] 
            font-bold uppercase tracking-wide
            rounded-lg border-2 border-dashed border-[#111111]
            select-none cursor-pointer
            shadow-[0_2px_8px_rgba(0,0,0,0.15)]
            hover:bg-[#FFD54F] transition-colors
          `}
          type="button"
          onClick={(e) => e.stopPropagation()}
        >
          <AlertTriangle className={iconSizes[variant]} />
          Draft Content
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto max-w-[280px] bg-[#1a1a1a] border-white/20 text-white p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm">{tooltip}</p>
      </PopoverContent>
    </Popover>
  );
};
