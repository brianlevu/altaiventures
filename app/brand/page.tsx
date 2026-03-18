import type { Metadata } from "next";
import Image from "next/image";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Brand Identity & Press Guidelines",
  description:
    "Brand guidelines, design system, and press resources for Altai Ventures. Family-owned East Bay rental property portfolio in Oakland and Castro Valley, California.",
  alternates: {
    canonical: "https://altaiventures.co/brand",
  },
  openGraph: {
    title: "Brand Identity & Press Guidelines | Altai Ventures",
    description:
      "Brand guidelines, design system, and press resources for Altai Ventures.",
    url: "https://altaiventures.co/brand",
  },
};

const colors = [
  {
    name: "Navy",
    token: "Primary",
    hex: "#0D1B2A",
    rgb: "13, 27, 42",
    usage: "Primary backgrounds, headings, and text on light surfaces.",
  },
  {
    name: "Champagne",
    token: "Accent",
    hex: "#C9A87C",
    rgb: "201, 168, 124",
    usage: "Gold accent, dividers, hover highlights, and pull-quote rules.",
  },
  {
    name: "Ivory",
    token: "Background",
    hex: "#F7F4EF",
    rgb: "247, 244, 239",
    usage: "Page backgrounds and light section fills.",
  },
  {
    name: "Slate",
    token: "Secondary Text",
    hex: "#6B7280",
    rgb: "107, 114, 128",
    usage: "Body copy, captions, labels, and secondary information.",
  },
  {
    name: "Taupe",
    token: "Borders",
    hex: "#E8DDD0",
    rgb: "232, 221, 208",
    usage: "Dividers, borders, and subtle section backgrounds.",
  },
];

const typeScale = [
  { label: "Display XL", size: "text-7xl", sample: "Elevated Living", display: true },
  { label: "Display", size: "text-5xl", sample: "Our Properties", display: true },
  { label: "Heading", size: "text-3xl", sample: "East Bay Homes", display: true },
  { label: "Subheading", size: "text-xl", sample: "Private Short-Term Suite", display: false },
  {
    label: "Body",
    size: "text-base",
    sample: "A private lower-level dwelling with separate entrance and dedicated outdoor access.",
    display: false,
  },
  { label: "Label", size: "text-xs", sample: "SHORT-TERM · AVAILABLE", display: false },
];

export default function BrandPage() {
  return (
    <div className="bg-ivory">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-navy pt-40 pb-28 text-ivory">
        <div className="container-shell">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-champagne">
            Brand Identity & Press Guidelines
          </p>
          <h1 className="display text-[clamp(4rem,12vw,9rem)] leading-[0.88] text-ivory">
            Altai<br />Ventures
          </h1>
          <div className="mt-16 border-t border-white/10 pt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Version", "1.0"],
              ["Year", "2025"],
              ["Location", "East Bay, CA"],
              ["Tagline", "Spaces Worth Staying In"],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">{label}</p>
                <p className="text-sm text-white/70">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 Brand Overview ─────────────────────────────── */}
      <section className="py-24 border-b border-taupe">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionLabel number="01" title="Brand Overview" />
            <div className="lg:col-span-9 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="display text-4xl text-navy mb-4">Who We Are</h2>
                <p className="text-slate leading-relaxed text-sm">
                  Altai Ventures is a family-owned residential real estate portfolio based in the
                  East Bay, California. We manage three properties — one private short-term suite
                  and two long-term homes — with an emphasis on quality, care, and long-term
                  relationships with the people we house.
                </p>
              </div>
              <div>
                <h2 className="display text-4xl text-navy mb-4">Our Position</h2>
                <p className="text-slate leading-relaxed text-sm">
                  We are not a management company. We are owners who care deeply about the spaces
                  we provide. Every decision — from how we maintain our properties to how we
                  communicate with guests and residents — reflects that personal standard.
                </p>
              </div>
              <div className="lg:col-span-2 border-l-2 border-champagne pl-8 py-2">
                <p className="display text-3xl md:text-4xl text-navy italic leading-snug">
                  "Spaces Worth Staying In."
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-slate">
                  Brand Tagline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 Logo & Wordmark ────────────────────────────── */}
      <section className="py-24 border-b border-taupe">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionLabel number="02" title="Logo & Wordmark" />
            <div className="lg:col-span-9 space-y-12">

              {/* ── 1. Horizontal lockup ── */}
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">
                  Horizontal Lockup — Primary Format
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <LogoVariant bg="bg-ivory border border-taupe" label="Primary · On Light">
                    <Logo variant="horizontal" color="dark" size="lg" />
                  </LogoVariant>
                  <LogoVariant bg="bg-navy" label="Reversed · On Dark" labelLight>
                    <Logo variant="horizontal" color="light" size="lg" />
                  </LogoVariant>
                  <LogoVariant bg="bg-navy" label="Gold Edition · On Dark" labelLight>
                    <Logo variant="horizontal" color="gold" size="lg" />
                  </LogoVariant>
                  <LogoVariant bg="bg-white border border-taupe" label="On White">
                    <Logo variant="horizontal" color="dark" size="lg" />
                  </LogoVariant>
                </div>
              </div>

              {/* ── 2. Stacked lockup ── */}
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">
                  Stacked Lockup — Centred Format
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <LogoVariant bg="bg-ivory border border-taupe" label="Primary · On Light">
                    <Logo variant="stacked" color="dark" size="lg" />
                  </LogoVariant>
                  <LogoVariant bg="bg-navy" label="Reversed · On Dark" labelLight>
                    <Logo variant="stacked" color="light" size="lg" />
                  </LogoVariant>
                  <LogoVariant bg="bg-navy" label="Gold Edition · On Dark" labelLight>
                    <Logo variant="stacked" color="gold" size="lg" />
                  </LogoVariant>
                </div>
              </div>

              {/* ── 3. Mark / Crest only ── */}
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">
                  Crest Mark — Symbol Only
                </p>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                  <LogoVariant bg="bg-ivory border border-taupe" label="Mark · On Light" compact>
                    <Logo variant="mark" color="dark" size="xl" />
                  </LogoVariant>
                  <LogoVariant bg="bg-navy" label="Mark · On Dark" compact labelLight>
                    <Logo variant="mark" color="light" size="xl" />
                  </LogoVariant>
                  <LogoVariant bg="bg-navy" label="Mark · Gold" compact labelLight>
                    <Logo variant="mark" color="gold" size="xl" />
                  </LogoVariant>
                  <LogoVariant bg="bg-white border border-taupe" label="Mark · On White" compact>
                    <Logo variant="mark" color="dark" size="xl" />
                  </LogoVariant>
                </div>
              </div>

              {/* ── 4. App icons ── */}
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">
                  App Icon &amp; Favicon
                </p>
                <div className="flex flex-wrap gap-6 items-end">
                  {/* App icon navy */}
                  <div>
                    <div className="w-24 h-24 rounded-2xl bg-navy flex items-center justify-center">
                      <Logo variant="mark" color="light" size="xl" />
                    </div>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate">App · Navy</p>
                  </div>
                  {/* App icon ivory */}
                  <div>
                    <div className="w-24 h-24 rounded-2xl bg-ivory border border-taupe flex items-center justify-center">
                      <Logo variant="mark" color="dark" size="xl" />
                    </div>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate">App · Ivory</p>
                  </div>
                  {/* Favicon 64px */}
                  <div>
                    <div className="w-16 h-16 bg-navy flex items-center justify-center">
                      <Logo variant="mark" color="light" size="lg" />
                    </div>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate">Favicon · 64px</p>
                  </div>
                  {/* Favicon 32px */}
                  <div>
                    <div className="w-8 h-8 bg-navy flex items-center justify-center">
                      <Logo variant="mark" color="light" size="sm" />
                    </div>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate">Favicon · 32px</p>
                  </div>
                  {/* Favicon 16px */}
                  <div>
                    <div className="w-4 h-4 bg-navy flex items-center justify-center">
                      <Logo variant="mark" color="light" size="xs" />
                    </div>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate">Favicon · 16px</p>
                  </div>
                </div>
              </div>

              {/* ── 5. Web navbar actual size ── */}
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">
                  Web Navbar — Actual Size
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-ivory border border-taupe px-6 h-20 flex items-center">
                    <Logo variant="horizontal" color="dark" size="sm" />
                  </div>
                  <div className="bg-navy px-6 h-20 flex items-center">
                    <Logo variant="horizontal" color="light" size="sm" />
                  </div>
                </div>
              </div>

              {/* Usage rules */}
              <div className="grid gap-8 md:grid-cols-2 pt-6 border-t border-taupe">
                <RulesList
                  title="Use"
                  accent="text-champagne"
                  marker="—"
                  items={[
                    "Horizontal lockup for navbars, headers, and email signatures",
                    "Stacked lockup for centred hero placements and print",
                    "Mark only for app icons, favicons, and contexts under 80px wide",
                    "On navy, ivory, or white backgrounds only",
                  ]}
                />
                <RulesList
                  title="Avoid"
                  accent="text-slate"
                  marker="×"
                  items={[
                    "Do not stretch, skew, or alter proportions",
                    "Do not place on busy photographic backgrounds without overlay",
                    "Do not recolor outside the approved palette",
                    "Do not use the horizontal lockup smaller than 120px wide",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Color Palette ──────────────────────────────── */}
      <section className="py-24 border-b border-taupe">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionLabel number="03" title="Color Palette" />
            <div className="lg:col-span-9">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {colors.map((color) => (
                  <div key={color.name} className="overflow-hidden border border-taupe">
                    <div className="h-28 w-full" style={{ backgroundColor: color.hex }} />
                    <div className="bg-white p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm font-medium text-navy">{color.name}</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate mt-0.5">
                            {color.token}
                          </p>
                        </div>
                        <p className="font-mono text-xs text-slate">{color.hex}</p>
                      </div>
                      <p className="text-[11px] text-slate font-mono mb-2">RGB {color.rgb}</p>
                      <p className="text-xs text-slate leading-relaxed">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Typography ─────────────────────────────────── */}
      <section className="py-24 border-b border-taupe">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionLabel number="04" title="Typography" />
            <div className="lg:col-span-9 space-y-16">

              {/* Display font specimen */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between border-b border-taupe pb-4 mb-8 gap-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate">
                    Display — Cormorant Garamond
                  </p>
                  <p className="text-[10px] text-slate">Headings, pull quotes, display text</p>
                </div>
                <div className="space-y-4">
                  <p className="display text-[7rem] leading-[0.8] text-navy">Aa</p>
                  <p className="display text-5xl text-navy">The East Bay Standard</p>
                  <p className="display text-3xl italic text-navy">"Spaces Worth Staying In."</p>
                  <p className="display text-lg text-navy tracking-wide">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <p className="display text-lg text-slate">
                    abcdefghijklmnopqrstuvwxyz 0123456789
                  </p>
                </div>
              </div>

              {/* Body font specimen */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between border-b border-taupe pb-4 mb-8 gap-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate">
                    Body — Montserrat
                  </p>
                  <p className="text-[10px] text-slate">UI, body copy, labels, navigation</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[6rem] leading-[0.8] font-light text-navy">Aa</p>
                  <p className="text-lg text-slate leading-relaxed max-w-2xl font-light">
                    Thoughtfully managed properties for guests and residents who value quality,
                    care, and a consistent experience above all else.
                  </p>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate">
                    Navigation · Labels · Captions
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3 text-xs uppercase tracking-[0.2em] text-slate">
                    <p className="font-light">Weight 300 — Light</p>
                    <p className="font-medium">Weight 500 — Medium</p>
                    <p className="font-semibold">Weight 600 — Semibold</p>
                  </div>
                </div>
              </div>

              {/* Type scale */}
              <div>
                <div className="border-b border-taupe pb-4 mb-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate">Type Scale</p>
                </div>
                <div className="space-y-0">
                  {typeScale.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-baseline gap-6 border-b border-taupe/60 py-5"
                    >
                      <p className="w-24 text-[10px] text-slate uppercase tracking-[0.15em] shrink-0">
                        {item.label}
                      </p>
                      <p
                        className={`${item.size} ${item.display ? "display" : "font-light"} text-navy leading-tight`}
                      >
                        {item.sample}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 Brand Voice ────────────────────────────────── */}
      <section className="py-24 border-b border-taupe">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionLabel number="05" title="Brand Voice" />
            <div className="lg:col-span-9 space-y-12">

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    trait: "Warm",
                    desc: "We speak like people, not landlords. Personal, direct, and genuine — never corporate or distant.",
                  },
                  {
                    trait: "Refined",
                    desc: "We choose words carefully. Our copy is edited, unhurried, and precise. No filler, no hype.",
                  },
                  {
                    trait: "Honest",
                    desc: "If a property is occupied, we say so. We don't oversell. Trust is built through transparency.",
                  },
                ].map((v) => (
                  <div key={v.trait} className="border-t-2 border-champagne pt-6">
                    <p className="display text-2xl text-navy mb-3">{v.trait}</p>
                    <p className="text-sm text-slate leading-relaxed font-light">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">We say</p>
                  <div className="space-y-4">
                    {[
                      '"Private lower-level suite with separate entrance."',
                      '"Currently occupied — join our waitlist for updates."',
                      '"Family-owned and personally managed."',
                    ].map((ex) => (
                      <p key={ex} className="text-sm text-navy border-l-2 border-champagne pl-4 font-light">
                        {ex}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-slate">We don't say</p>
                  <div className="space-y-4">
                    {[
                      '"Amazing opportunity! Don\'t miss out!"',
                      '"Premium luxury experience awaits!"',
                      '"Best-in-class property management solutions."',
                    ].map((ex) => (
                      <p key={ex} className="text-sm text-slate border-l-2 border-taupe pl-4 font-light line-through decoration-slate/40">
                        {ex}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 Imagery ────────────────────────────────────── */}
      <section className="py-24 border-b border-taupe">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionLabel number="06" title="Imagery" />
            <div className="lg:col-span-9">
              <div className="grid gap-8 md:grid-cols-2">
                <RulesList
                  title="Photography Style"
                  accent="text-champagne"
                  marker="—"
                  items={[
                    "Natural light — no harsh flash or over-processed HDR",
                    "Warm, residential tone — homes that look lived-in and cared for",
                    "Wide establishing shots balanced with intimate detail shots",
                    "Neutral or warm color grading — avoid cool/blue casts",
                    "Candid lifestyle over posed when people are included",
                  ]}
                />
                <RulesList
                  title="Avoid"
                  accent="text-slate"
                  marker="×"
                  items={[
                    "Stock images with obviously staged, over-styled interiors",
                    "Dark or moody photography that obscures property details",
                    "Portrait-only crops for hero and listing images",
                    "Heavy vignetting or dramatic lighting effects",
                    "Exterior shots without surrounding context",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Press Contact ──────────────────────────────── */}
      <section className="bg-navy py-28 text-ivory">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-champagne">07</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-champagne mt-1">Press & Contact</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display text-5xl text-ivory mb-6">Media Inquiries</h2>
              <p className="text-white/50 max-w-xl leading-relaxed mb-12 text-sm font-light">
                For press coverage, media requests, or brand partnership inquiries, please reach
                out directly. We aim to respond within 2 business days.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  ["Email", "hello@altaiventures.co", true],
                  ["Location", "East Bay, California", false],
                  ["Response Time", "Within 2 business days", false],
                ].map(([label, val, isLink]) => (
                  <div key={String(label)}>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-champagne mb-2">
                      {label}
                    </p>
                    {isLink ? (
                      <a
                        href={`mailto:${val}`}
                        className="text-sm text-ivory hover:text-champagne transition-colors"
                      >
                        {val}
                      </a>
                    ) : (
                      <p className="text-sm text-white/60 font-light">{val}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────── */

function LogoVariant({
  bg,
  label,
  compact = false,
  labelLight = false,
  children,
}: {
  bg: string;
  label: string;
  compact?: boolean;
  labelLight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`${bg} flex items-center justify-center ${compact ? "h-36" : "h-48"}`}
      >
        {children}
      </div>
      <p
        className={`mt-2 text-[10px] uppercase tracking-[0.2em] ${labelLight ? "text-slate" : "text-slate"}`}
      >
        {label}
      </p>
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="lg:col-span-3 lg:pt-1">
      <p className="text-[10px] uppercase tracking-[0.25em] text-slate">{number}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-slate mt-1">{title}</p>
    </div>
  );
}

function RulesList({
  title,
  accent,
  marker,
  items,
}: {
  title: string;
  accent: string;
  marker: string;
  items: string[];
}) {
  return (
    <div>
      <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-slate">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-navy font-light">
            <span className={`${accent} shrink-0 mt-0.5`}>{marker}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
