type EuFlagProps = {
  height?: number;
  className?: string;
  title?: string;
};

const STAR =
  "M0,-1.2 L0.35,-0.35 L1.2,-0.35 L0.45,0.15 L0.75,1.05 L0,0.55 L-0.75,1.05 L-0.45,0.15 L-1.2,-0.35 L-0.35,-0.35 Z";

/** EU flag — 3:2, crisp at nav sizes (not a tiny decorative dot). */
export function EuFlag({ height = 24, className, title = "European Union" }: EuFlagProps) {
  const width = Math.round(height * 1.5);
  const cx = 45;
  const cy = 30;
  const r = 14;
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (-Math.PI / 2) + (i * (2 * Math.PI)) / 12;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 60"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <rect width="90" height="60" fill="#003399" />
      {stars.map((s, i) => (
        <path key={i} d={STAR} fill="#FFCC00" transform={`translate(${s.x} ${s.y}) scale(1.15)`} />
      ))}
    </svg>
  );
}
