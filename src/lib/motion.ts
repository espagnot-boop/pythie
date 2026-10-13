export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  snap: [0.2, 0, 0, 1] as const,
  linear: "linear" as const,
};

export const dur = {
  instant: 0.06,
  fast: 0.12,
  base: 0.2,
  mid: 0.28,
  slow: 0.5,
  reveal: 0.7,
  draw: 0.9,
} as const;

export const stagger = { tight: 0.04, base: 0.07, loose: 0.12 } as const;

export const inView = { once: true, margin: "0px 0px -12% 0px" } as const;
