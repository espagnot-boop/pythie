import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "butt" as const,
  strokeLinejoin: "miter" as const,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function Minus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8l3 3 7-7" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function Send(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3v8M5 8l3 3 3-3M3 13h10" />
    </svg>
  );
}

export function Bell(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6l4-3 4 3v4l3 2H1l3-2V6z" />
      <path d="M6 13h4" />
    </svg>
  );
}

export function Link(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 10l4-4M7 5h4v4M9 11H5V7" />
    </svg>
  );
}

export function Sun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="5" width="6" height="6" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" />
    </svg>
  );
}

export function Moon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 3H8v8h3V3zM5 5h6v8H5z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5h10M3 8h10M3 11h10" />
    </svg>
  );
}

export function Square(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="10" height="10" />
    </svg>
  );
}

export function Eye(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="6" width="12" height="5" />
      <rect x="6" y="7" width="4" height="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Table(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="10" height="10" />
      <path d="M3 7h10M7 3v10" />
    </svg>
  );
}

export function Chart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13V5h3v8M7 13V3h3v10M11 13V8h3v5" />
    </svg>
  );
}

export function File(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 2h6v12H5zM5 2h4v4H5" />
    </svg>
  );
}
