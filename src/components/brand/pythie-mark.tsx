type PythieMarkProps = {
  size?: number;
  className?: string;
};

/** Primary Pythie logomark — square frame, geometric P, accent datum. */
export function PythieMark({ size = 32, className }: PythieMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M9 7.5h8c3.8 0 6.5 2.6 6.5 6.2S20.8 20 17 20h-3.2v5H9V7.5zm4 6.5h3.1c1.9 0 3-1.1 3-2.8s-1.1-2.7-3-2.7H13v5.5z"
        fill="currentColor"
      />
      <rect x="23" y="23" width="5" height="5" fill="var(--accent)" />
    </svg>
  );
}
