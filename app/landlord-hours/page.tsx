import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LandlordHours — Track Your Path to Tax Qualification",
  description:
    "Track rental property hours toward IRS REPS qualification. 750-hour progress tracking, IRS-ready PDF reports, AI-assisted logging. Built by Altai Ventures.",
};

export default function LandlordHoursPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════ */}
      {/* HERO                                           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy">
        {/* Wave/curved background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[20%] top-[15%] h-[60%] w-[60%] rounded-full bg-[#1A2744] blur-3xl opacity-60" />
          <div className="absolute right-[15%] bottom-[20%] h-[40%] w-[40%] rounded-full bg-champagne/[0.04] blur-3xl" />
          <svg className="absolute top-[40%] left-0 w-full opacity-[0.04]" viewBox="0 0 1440 400" fill="none">
            <path d="M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200V400H0Z" fill="white" />
          </svg>
          <svg className="absolute top-[55%] left-0 w-full opacity-[0.03]" viewBox="0 0 1440 400" fill="none">
            <path d="M0 250C200 150 400 350 720 250C1040 150 1240 300 1440 250V400H0Z" fill="white" />
          </svg>
        </div>

        {/* Centered text */}
        <div className="relative z-10 flex flex-col items-center px-4 pt-36 pb-10 text-center">
          <p className="mb-6 text-xs font-medium tracking-[5px] text-champagne/90">
            TRACK · DEDUCT · QUALIFY
          </p>
          <h1 className="display text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] text-white">
            Your Hours,<br />Your Deduction
          </h1>
          <div className="mx-auto my-6 h-px w-16 bg-champagne/40" />
          <p className="max-w-md text-[15px] leading-[1.8] text-white/60">
            Effortlessly track your rental property hours and qualify for IRS deductions.
          </p>
        </div>

        {/* Phone showcase — large phones, clipped at bottom */}
        <div className="relative z-10 h-[460px] overflow-hidden">
          {/* Decorative ring curves */}
          <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] opacity-[0.05]" viewBox="0 0 900 900" fill="none">
            <circle cx="450" cy="450" r="320" stroke="white" strokeWidth="1" />
            <circle cx="450" cy="450" r="420" stroke="white" strokeWidth="0.5" />
          </svg>

          {/* Left phone — offset lower */}
          <div className="absolute left-1/2 top-14 z-10 hidden -translate-x-[340px] md:block">
            <div className="w-[260px] overflow-hidden rounded-[32px] border border-white/15 bg-[#111] p-1.5 shadow-2xl">
              <Image
                src="/images/landlord-hours/reports-100h.png"
                alt="100h tracking view"
                width={750}
                height={1629}
                className="rounded-[28px]"
              />
            </div>
          </div>

          {/* Center phone — largest, front */}
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
            <div className="w-[280px] overflow-hidden rounded-[36px] border-[2px] border-champagne/20 bg-[#111] p-1.5 shadow-2xl md:w-[300px]">
              <Image
                src="/images/landlord-hours/reports.png"
                alt="LandlordHours Reports Dashboard"
                width={750}
                height={1629}
                className="rounded-[30px]"
              />
            </div>
          </div>

          {/* Right phone — dashboard, offset lower */}
          <div className="absolute left-1/2 top-20 z-10 hidden translate-x-[100px] md:block">
            <div className="w-[260px] overflow-hidden rounded-[32px] border border-white/15 bg-[#111] p-1.5 shadow-2xl">
              <Image
                src="/images/landlord-hours/dashboard.png"
                alt="Dashboard view"
                width={750}
                height={1629}
                className="rounded-[28px]"
              />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute left-1/2 top-4 z-30 hidden -translate-x-[480px] md:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3 backdrop-blur-sm shadow-lg">
              <p className="text-[10px] text-white/40">Weekly Pace</p>
              <p className="display text-xl font-semibold text-champagne tabular-nums">18.2h</p>
            </div>
          </div>

          <div className="absolute left-1/2 top-0 z-30 hidden translate-x-[300px] md:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3 backdrop-blur-sm shadow-lg">
              <p className="text-[10px] text-white/40">REPS Status</p>
              <p className="text-sm font-semibold text-emerald-400">On Track ✓</p>
            </div>
          </div>

          <div className="absolute left-1/2 top-52 z-30 hidden -translate-x-[500px] md:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3 backdrop-blur-sm shadow-lg">
              <p className="text-[10px] text-white/40">50% Rule</p>
              <p className="display text-xl font-semibold text-white tabular-nums">100%</p>
            </div>
          </div>

          <div className="absolute left-1/2 top-60 z-30 hidden translate-x-[340px] md:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3 backdrop-blur-sm shadow-lg">
              <p className="text-[10px] text-white/40">Properties</p>
              <p className="display text-xl font-semibold text-white tabular-nums">3</p>
            </div>
          </div>
        </div>

        {/* Trust bar — pinned to bottom */}
        <div className="relative z-10 border-t border-white/10">
          <div className="container-shell flex flex-wrap items-center justify-center gap-10 py-6">
            {["Trusted by 2,000+ landlords", "Featured on App Store", "Tax-grade accuracy", "iCloud encrypted"].map((t) => (
              <p key={t} className="text-[11px] font-medium tracking-[2px] text-white/30">{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* WHY SECTION — Left text + right features       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-ivory px-6 py-28 md:px-0">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left — headline */}
            <div>
              <p className="mb-4 text-xs font-medium tracking-[4px] text-champagne">WHY LANDLORD HOURS</p>
              <h2 className="display text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-navy">
                Choose us<br />is the right way!
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.8] text-navy/60">
                Transform your tax qualification process with our smart, IRS-compliant hour tracking solution.
              </p>
            </div>

            {/* Right — feature list */}
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  title: "Track 750+ hours with confidence",
                  body: "Real-time progress ring shows exactly where you stand against the IRS REPS threshold.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" />
                    </svg>
                  ),
                  title: "IRS-ready PDF reports for your CPA",
                  body: "Export detailed reports by property, category, and participant. Share in one tap.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" />
                    </svg>
                  ),
                  title: "Auto-detect hours from your calendar",
                  body: "Import property appointments and pre-fill your hours automatically.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-champagne/10 text-champagne">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-navy">{f.title}</h3>
                    <p className="text-sm leading-[1.7] text-navy/60">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* FEATURE SHOWCASE — Rounded cards with UI       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-28 md:px-0">
        <div className="container-shell">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <p className="mb-4 text-xs font-medium tracking-[4px] text-champagne">OUR FEATURES</p>
            <h2 className="display text-[clamp(2rem,4vw,2.75rem)] text-navy">
              Discover the Power of<br />LandlordHours
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-navy/50">
              Everything you need to track, document, and qualify for IRS real estate professional status.
            </p>
          </div>

          {/* Two feature cards side by side */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Track Card */}
            <div className="overflow-hidden rounded-2xl border border-taupe/40 bg-ivory p-8">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-champagne/15 text-champagne">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-navy">750-Hour Progress Tracking</h3>
              </div>
              <p className="mb-6 text-sm leading-[1.7] text-navy/60">
                Visual progress ring and pace tracking keep you on course for REPS qualification all year.
              </p>
              <div className="overflow-hidden rounded-xl bg-navy p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium tracking-[3px] text-champagne/60">PROGRESS</p>
                    <p className="display mt-2 text-[48px] font-bold text-white tabular-nums">525</p>
                    <p className="text-sm text-white/40">of 750 hours</p>
                  </div>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="60" fill="none" stroke="#FFFFFF10" strokeWidth="10" />
                    <circle cx="70" cy="70" r="60" fill="none" stroke="#C9A87C" strokeWidth="10" strokeDasharray="264 377" strokeLinecap="round" transform="rotate(-90 70 70)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Reports Card */}
            <div className="overflow-hidden rounded-2xl border border-taupe/40 bg-ivory p-8">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-champagne/15 text-champagne">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-navy">IRS-Ready Documentation</h3>
              </div>
              <p className="mb-6 text-sm leading-[1.7] text-navy/60">
                Generate compliant reports that satisfy IRS requirements. Export PDFs for your CPA in one tap.
              </p>
              <div className="overflow-hidden rounded-xl border border-taupe/60 bg-white p-5">
                <p className="display mb-3 text-base font-semibold text-navy">Annual Summary</p>
                <div className="h-px bg-taupe/40" />
                {[
                  ["Total Hours", "525h"],
                  ["Properties", "3"],
                  ["REPS Status", "On Track"],
                  ["50% Rule", "100%"],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between border-b border-taupe/20 py-3">
                    <span className="text-sm text-navy/50">{l}</span>
                    <span className="text-sm font-semibold text-navy tabular-nums">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento card — full width */}
          <div className="mt-6 grid overflow-hidden rounded-2xl bg-navy lg:grid-cols-2">
            {/* Left text */}
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/15 text-champagne mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="display mb-3 text-[32px] leading-[1.1] text-white">
                Manage Your<br />Properties with Ease
              </h3>
              <p className="max-w-sm text-[15px] leading-[1.7] text-white/50">
                Track hours across all your properties in one place with per-property breakdowns and progress tracking.
              </p>
            </div>
            {/* Right — property cards + stats */}
            <div className="flex flex-col gap-4 p-8 lg:p-10">
              <div className="flex items-center justify-between rounded-xl bg-white/[0.06] border border-white/10 px-6 py-5">
                <div>
                  <p className="display text-[40px] font-bold text-white tabular-nums">87</p>
                  <p className="text-xs text-white/40">Completion %</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { name: "Yeandle Ave", hours: "210.5h", color: "#C9A87C" },
                    { name: "Delaney Dr", hours: "180.0h", color: "#E8D5B0" },
                    { name: "Mission Bay", hours: "134.5h", color: "#8B9A80" },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="text-xs text-white/60">{p.name}</span>
                      <span className="ml-auto text-xs font-semibold tabular-nums" style={{ color: p.color }}>{p.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              {[
                { name: "20649 Yeandle Ave", meta: "LTR · Castro Valley, CA", hours: "210.5h", color: "#C9A87C" },
                { name: "1827 Delaney Dr", meta: "LTR · Castro Valley, CA", hours: "180.0h", color: "#E8D5B0" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <div className="h-9 w-1 rounded-sm" style={{ backgroundColor: p.color }} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{p.name}</p>
                    <p className="text-[11px] text-white/30">{p.meta}</p>
                  </div>
                  <p className="display text-lg font-semibold tabular-nums" style={{ color: p.color }}>{p.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECONDARY FEATURES — 6 card grid              */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-ivory px-6 py-28 md:px-0">
        <div className="container-shell">
          <div className="mx-auto mb-16 text-center">
            <p className="mb-4 text-xs font-medium tracking-[4px] text-champagne">FEATURES</p>
            <h2 className="display text-[clamp(2rem,4vw,2.75rem)] text-navy">Everything You Need</h2>
          </div>
          <div className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "One-Tap Logging", body: "Start and stop timers with a single tap. Automatically categorize by activity type." },
              { title: "Progress Dashboard", body: "Visual progress rings show exactly where you stand against your 750-hour goal." },
              { title: "Multi-Property", body: "Manage unlimited properties. Track hours per property with individual breakdowns." },
              { title: "Export Reports", body: "PDF and CSV exports ready for your CPA. Share documentation in one tap." },
              { title: "IRS Compliance", body: "Built around IRS rules for REPS qualification. 750h and 50% thresholds tracked automatically." },
              { title: "Smart Analytics", body: "Weekly pace tracking, remaining hours, and projected completion dates at a glance." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-champagne/10 text-champagne">
                  <span className="text-lg">●</span>
                </div>
                <h3 className="display mb-2 text-[22px] font-semibold text-navy">{f.title}</h3>
                <p className="text-sm leading-[1.7] text-navy/50">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CTA — Full width rounded card                 */}
      {/* ═══════════════════════════════════════════════ */}
      <section id="download" className="bg-ivory px-6 pb-28 md:px-0">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl bg-navy">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,#1A2744,#0D1B2A)]" />
            <div className="relative z-10 flex flex-col items-center gap-12 px-8 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-16">
              {/* Text */}
              <div className="max-w-lg text-center lg:text-left">
                <h2 className="display mb-5 text-[clamp(2rem,4vw,2.5rem)] leading-[1.05] text-white">
                  Start Tracking<br />Your Hours Today
                </h2>
                <p className="mb-8 text-base leading-[1.8] text-white/50">
                  Join landlords who are taking control of their IRS real estate professional qualification.
                </p>
                <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 transition-opacity duration-150 hover:opacity-90"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-[9px] leading-none text-black/60">Download on the</p>
                      <p className="text-sm font-semibold leading-tight text-black">App Store</p>
                    </div>
                  </a>
                </div>
                <p className="mt-4 text-[13px] text-white/25">Free · No credit card required</p>
              </div>

              {/* Phone mockups */}
              <div className="flex items-start gap-4">
                <div className="w-[220px] overflow-hidden rounded-[28px] border border-champagne/[0.12] bg-[#0A1420] p-1 shadow-2xl md:w-[240px]">
                  <Image
                    src="/images/landlord-hours/reports.png"
                    alt="LandlordHours Reports"
                    width={750}
                    height={1629}
                    className="rounded-[24px]"
                  />
                </div>
                <div className="hidden mt-10 w-[190px] -rotate-[8deg] overflow-hidden rounded-[24px] border border-white/10 bg-[#0A1420] p-1 shadow-2xl md:block">
                  <Image
                    src="/images/landlord-hours/reports-100h.png"
                    alt="LandlordHours 100h View"
                    width={750}
                    height={1629}
                    className="rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
