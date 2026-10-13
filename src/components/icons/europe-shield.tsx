export function EuropeShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M16 3L5 8v8c0 6.2 4.7 12 11 13 6.3-1 11-6.8 11-13V8L16 3z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="miter"
      />
      <circle cx="16" cy="14.5" r="5.25" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M13.2 14.5a2.8 2.8 0 0 1 5.6 0"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
      <path
        d="M11.5 20.5h9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
