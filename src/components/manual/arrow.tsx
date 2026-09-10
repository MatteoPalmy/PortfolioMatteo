/** Freccia disegnata, stesso sistema di tratto delle icone social. */
export function Arrow({ className = "size-[1em]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 12h15" />
      <path d="M13 5.5 20 12l-7 6.5" />
    </svg>
  );
}
