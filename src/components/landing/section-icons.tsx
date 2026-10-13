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

export function SectionIconSource(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M7 11l6-6M8 5h5v5" />
      <rect x="3" y="9" width="8" height="8" />
    </svg>
  );
}

export function SectionIconGap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M4 10h12" strokeDasharray="2 2" />
      <rect x="3" y="4" width="6" height="12" />
      <path d="M11 7h6v9h-6z" />
    </svg>
  );
}

export function SectionIconAsk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="3" y="4" width="14" height="10" />
      <path d="M6 14l4 3 4-3" />
      <path d="M7 8h6M7 11h4" />
    </svg>
  );
}

export function SectionIconInvestigate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <circle cx="9" cy="9" r="5" />
      <path d="M13 13l4 4" strokeWidth={2} />
      <path d="M7 9h4M9 7v4" stroke="var(--accent)" />
    </svg>
  );
}

export function SectionIconDecide(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M4 14V6h4v8H4zM9 14V4h4v10H9zM15 14V9h3v5h-3z" strokeWidth={2} />
      <path d="M3 16h14" />
    </svg>
  );
}

export function SectionIconTimer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <circle cx="10" cy="11" r="6" />
      <path d="M10 8v4l2 2M10 3V2M6 4L5 3M14 4l1-1" />
    </svg>
  );
}

export function SectionIconCitation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="3" y="3" width="14" height="14" />
      <path d="M7 7h6M7 10h6M7 13h4" />
      <rect x="13" y="12" width="2" height="2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function SectionIconZeroCode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M5 6l3 3-3 3M11 12h4" />
      <path d="M3 3h14v14H3z" />
    </svg>
  );
}

export function SectionIconMonitor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M4 6l4-3 4 3v6l-4 3-4-3V6z" />
      <circle cx="14" cy="14" r="2" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

export function SectionIconWaitlist(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <rect x="3" y="5" width="14" height="10" />
      <path d="M3 8h14M7 5V3h6v2" />
      <path d="M7 11h2M11 11h2" stroke="var(--accent)" />
    </svg>
  );
}

export function SectionIconApi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <path d="M6 4h8v12H6zM8 8h4M8 11h4" />
      <path d="M4 7h2M4 10h2M14 7h2M14 10h2" />
    </svg>
  );
}

export function SectionIconFaq(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <circle cx="10" cy="10" r="7" />
      <path d="M7.5 7.5a2.5 2.5 0 0 1 4.2 1.8c0 1.5-2.2 1.8-2.2 3.2" />
      <rect x="9.25" y="13.5" width="1.5" height="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SectionIconSources(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...s} {...props}>
      <circle cx="10" cy="10" r="3" />
      <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5 5l1.5 1.5M13.5 13.5L15 15M15 5l-1.5 1.5M6.5 13.5L5 15" />
    </svg>
  );
}

export function SectionIconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden
      {...props}
    >
      <path d="M3 8l3 3 7-7" />
    </svg>
  );
}

export function trustSectionIcon(id?: string) {
  switch (id) {
    case "source":
      return <SectionIconSource />;
    case "gap":
      return <SectionIconGap />;
    case "europe":
      return null;
    default:
      return undefined;
  }
}

export const howStepIcons = [SectionIconAsk, SectionIconInvestigate, SectionIconDecide];

export const numberStatIcons = [
  SectionIconTimer,
  SectionIconCitation,
  SectionIconZeroCode,
  SectionIconMonitor,
];
