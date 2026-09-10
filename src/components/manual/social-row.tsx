function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[17px]" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 7.2a2.51 2.51 0 0 0-1.77-1.78C18.27 5 12 5 12 5s-6.27 0-7.83.42A2.51 2.51 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12c0 1.61.13 3.22.4 4.8a2.51 2.51 0 0 0 1.77 1.78C5.73 19 12 19 12 19s6.27 0 7.83-.42a2.51 2.51 0 0 0 1.77-1.78c.27-1.58.4-3.19.4-4.8s-.13-3.22-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z"
      />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[15px]" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 3.02-4.53v-3.5a6.37 6.37 0 0 0-5.94 10.6 6.37 6.37 0 0 0 10.98-4.31V8.7a8.24 8.24 0 0 0 4.36 1.25V6.85a4.83 4.83 0 0 1-.9-.16Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[15px]"
      aria-hidden
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/matteopalermoo/",
  },
  {
    label: "YouTube",
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/channel/UCFkoFdBYQBJZzzJt3kP7j7Q",
  },
  {
    label: "TikTok",
    Icon: TiktokIcon,
    href: "https://www.tiktok.com/@matteoopalermoo",
  },
];

export function SocialRow({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex shrink-0 items-center gap-2 ${className}`}>
      {SOCIALS.map(({ label, Icon, href }) => {
        const external = href !== "#";
        return (
          <li key={label} className="shrink-0">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex size-9 shrink-0 items-center justify-center border border-[var(--color-hairline)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
