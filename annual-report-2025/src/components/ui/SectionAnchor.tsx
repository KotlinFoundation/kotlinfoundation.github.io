import { Link2 } from "lucide-react";
import { useState } from "react";

interface SectionAnchorProps {
  id: string;
  showCopy?: boolean;
}

export const SectionAnchor = ({ id, showCopy = true }: SectionAnchorProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!showCopy) return null;

  return (
    <button
      onClick={handleCopy}
      className="ml-2 inline-flex items-center gap-1 text-sm opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity"
      title="Copy link to section"
    >
      <Link2 className="w-4 h-4" />
      {copied && <span className="text-xs">Copied!</span>}
    </button>
  );
};
