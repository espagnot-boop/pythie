import type { SVGProps } from "react";

const s = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "butt" as const,
  strokeLinejoin: "miter" as const,
};

export function BentoLivePrice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="2" y="2" width="16" height="16" />
      <path d="M4 14l3-4 3 2 3-5 3 3" stroke="var(--accent)" />
      <rect x="14" y="10" width="2" height="2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function BentoShrink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="3" y="6" width="10" height="8" />
      <rect x="13" y="8" width="5" height="6" />
      <path d="M3 16h10M13 16h5" />
    </svg>
  );
}

export function BentoCompetitor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="2" y="3" width="16" height="14" />
      <path d="M2 8h16M2 12h16M8 3v14" />
    </svg>
  );
}

export function BentoMarket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M3 16V11M7 16V8M11 16V10M15 16V5" strokeWidth={2} />
    </svg>
  );
}

export function BentoAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M4 8l6-4 6 4v6H4V8z" />
      <path d="M8 14h4" />
      <rect x="9" y="3" width="2" height="2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function BentoExport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="3" y="3" width="14" height="14" />
      <path d="M10 6v6M7 11l3 3 3-3M6 16h8" />
    </svg>
  );
}
