const sections = [
  {
    title: "Portfolio",
    subtitle: "View my work and projects",
    href: "https://portfolio.ronaldgrant.net",
    ariaLabel: "Open Ronald Grant portfolio",
    tone: "portfolio",
  },
  {
    title: "Me",
    subtitle: "Learn more about me",
    href: "https://me.ronaldgrant.net",
    ariaLabel: "Open Ronald Grant personal profile",
    tone: "me",
  },
] as const;

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen flex-col overflow-hidden bg-zinc-950 md:flex-row">
      <h1 className="sr-only">Ronald Grant</h1>
      {sections.map((section) => (
        <a
          key={section.title}
          href={section.href}
          aria-label={section.ariaLabel}
          className={`gateway-section gateway-section--${section.tone} group relative flex h-[50vh] min-h-[50vh] flex-1 cursor-pointer items-center justify-center overflow-hidden px-6 py-10 outline-none transition-[filter,transform] duration-300 ease-in-out hover:z-10 hover:scale-[1.015] focus-visible:z-20 focus-visible:ring-4 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-0 active:scale-[0.995] md:h-screen md:min-h-screen`}
        >
          <div className="gateway-grid" aria-hidden="true" />
          <div className="gateway-noise" aria-hidden="true" />
          <div className="gateway-overlay" aria-hidden="true" />

          <section className="gateway-card relative z-10 w-full max-w-md translate-y-3 animate-[content-enter_800ms_ease-out_120ms_both] border px-8 py-9 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.25)] md:px-10 md:py-11">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] opacity-75">
              Enter
            </p>
            <h2 className="text-5xl font-semibold tracking-normal text-balance sm:text-6xl md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-xs text-base leading-7 opacity-[0.82] sm:text-lg">
              {section.subtitle}
            </p>
            <span className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-90">
              Open
              <svg
                className="size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </section>
        </a>
      ))}
    </main>
  );
}
