'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const LOGO_SRC = '/logo-512x512.png';

const COMPONENTS_PREVIEW = [
  { name: 'Button', tag: '<Button variant="default" />' },
  { name: 'Switch', tag: '<Switch checked />' },
  { name: 'Card', tag: '<Card />' },
  { name: 'Input', tag: '<Input placeholder="Email" />' },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(18px)',
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function MockSwitch({ on }: { on: boolean }) {
  return (
    <div
      style={{
        width: 40,
        height: 24,
        borderRadius: 999,
        background: on ? '#6366F1' : '#27272A',
        padding: 2,
        transition: 'background 0.3s ease',
        display: 'flex',
        justifyContent: on ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 999,
          background: '#FAFAFA',
          boxShadow: '0 1px 2px rgba(0,0,0,0.4)',
          transition: 'transform 0.3s ease',
        }}
      />
    </div>
  );
}

function PhoneScreenContent({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex w-full flex-col gap-3">
        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Button</div>
        <button className="w-full rounded-lg bg-indigo-500 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.45)]">
          Continue
        </button>
        <button className="w-full rounded-lg border border-zinc-700 bg-zinc-800 py-3 text-sm font-medium text-zinc-100">
          Secondary
        </button>
        <button className="w-full rounded-lg border border-zinc-800 bg-transparent py-3 text-sm font-medium text-zinc-400">
          Ghost
        </button>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex w-full flex-col gap-4">
        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Switch</div>
        {[
          ['Push notifications', true],
          ['Dark mode', true],
          ['Analytics', false],
        ].map(([label, on]) => (
          <div key={label as string} className="flex items-center justify-between">
            <span className="text-sm text-zinc-200">{label as string}</span>
            <MockSwitch on={on as boolean} />
          </div>
        ))}
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="flex w-full flex-col gap-3">
        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Card</div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">
          <div className="mb-1 text-sm font-semibold text-zinc-100">Weekly summary</div>
          <div className="mb-3 text-xs text-zinc-500">12 components shipped this week</div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-2/3 rounded-full bg-indigo-500" />
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">
          <div className="size-8 rounded-full border border-indigo-500/40 bg-indigo-500/20" />
          <div>
            <div className="text-sm text-zinc-100">Alex Rivera</div>
            <div className="text-xs text-zinc-500">@alexrivera</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Input</div>
      <div>
        <div className="mb-1.5 text-xs text-zinc-400">Email</div>
        <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-100">
          alex@acme.app
        </div>
      </div>
      <div>
        <div className="mb-1.5 text-xs text-zinc-400">Password</div>
        <div className="rounded-lg border border-indigo-500 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-500 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]">
          ••••••••••
        </div>
      </div>
      <button className="mt-1 w-full rounded-lg bg-indigo-500 py-3 text-sm font-medium text-white">
        Sign in
      </button>
    </div>
  );
}

function PhoneMockup() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % COMPONENTS_PREVIEW.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative select-none" style={{ perspective: 1200 }}>
      <div
        className="pointer-events-none absolute -inset-16 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.08) 45%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="relative h-135 w-65 rounded-[2.4rem] border border-zinc-800 bg-zinc-950 shadow-2xl"
        style={{
          transform: 'rotateY(-8deg) rotateX(2deg)',
          boxShadow:
            '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 60px rgba(99,102,241,0.15)',
        }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl border-x border-b border-zinc-800 bg-zinc-950" />
        <div className="absolute left-0 right-0 top-2 z-10 flex justify-between px-7 font-mono text-[10px] text-zinc-500">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.4rem] px-5 pb-6 pt-12">
          <div className="flex flex-1 flex-col justify-center">
            <div key={active} style={{ animation: 'screenFade 0.5s ease' }}>
              <PhoneScreenContent index={active} />
            </div>
          </div>

          <div className="flex justify-center gap-1.5 pt-4">
            {COMPONENTS_PREVIEW.map((c, i) => (
              <div
                key={c.name}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 18 : 6,
                  background: i === active ? '#6366F1' : '#3F3F46',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -right-10 top-16 rounded-xl border border-zinc-700/60 px-3 py-2 font-mono text-[11px] text-indigo-300 shadow-xl backdrop-blur-xl"
        style={{
          background: 'rgba(24,24,27,0.55)',
          animation: 'floatChip 4.5s ease-in-out infinite',
        }}
      >
        {COMPONENTS_PREVIEW[active].tag}
      </div>

      <div
        className="absolute -left-14 bottom-24 rounded-xl border border-zinc-700/60 px-3 py-2 font-mono text-[11px] text-zinc-300 shadow-xl backdrop-blur-xl"
        style={{
          background: 'rgba(24,24,27,0.55)',
          animation: 'floatChip2 5.5s ease-in-out infinite',
        }}
      >
        bun add rn-shadcn
      </div>
    </div>
  );
}

function Logo({ size = 28 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg font-mono font-bold"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image src={LOGO_SRC} width={0} height={0} alt='Logo' className='w-12 object-contain' />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <div className="flex items-center gap-2.5">
        <GradientText>
          <h1 className='text-xl font-space-grotesk font-bold'>RNS</h1>
        </GradientText>
      </div>
      <div className="hidden items-center gap-7 text-sm text-zinc-400 sm:flex">
        <a href="#components" className="transition-colors hover:text-zinc-100">
          Components
        </a>
        <a href="#install" className="transition-colors hover:text-zinc-100">
          Install
        </a>
        <Link href="/docs" className="transition-colors hover:text-zinc-100">
          Docs
        </Link>
      </div>
      <a
        href="https://github.com/devusimple/rn-shadcn.git"
        className="rounded-lg flex items-center gap-2 border border-zinc-700 px-4 py-1.5 font-mono text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
      >
        <svg role="img" className='w-5 h-5' fill='#fff' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        GitHub
      </a>
    </nav>
  );
}

function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{
        background: 'linear-gradient(135deg, #FAFAFA 30%, #A5B4FC 65%, #6366F1 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-12 md:grid-cols-2">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-150 w-225 -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      <div>
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-xs text-zinc-400">
            <span className="size-1.5 animate-pulse rounded-full bg-indigo-400" />
            v0.4 — Uniwind + Tailwind v4
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            <GradientText>shadcn/ui,</GradientText>
            <br />
            <span className="text-zinc-100">made for touch.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-zinc-400">
            The same components you already copy into web projects — rebuilt with real Tailwind classes for React Native.
            No new API to learn, no black-box dependency. Just{' '}
            <code className="text-zinc-300">components/ui</code>, yours to edit.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/docs"
              className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.45)] transition-colors hover:bg-indigo-400"
            >
              Doc's
            </Link>
            <a
              href="#components"
              className="rounded-lg border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              Browse components
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex items-center gap-6 font-mono text-xs text-zinc-500">
            <span>iOS</span>
            <span className="size-1 rounded-full bg-zinc-700" />
            <span>Android</span>
            <span className="size-1 rounded-full bg-zinc-700" />
            <span>Expo</span>
            <span className="size-1 rounded-full bg-zinc-700" />
            <span>Bare RN</span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200} className="flex justify-center">
        <PhoneMockup />
      </Reveal>
    </section>
  );
}

function ComponentGrid() {
  const items = [
    { name: 'Button', desc: 'Variant + size props, no inline style overrides needed.' },
    { name: 'Card', desc: 'Header, content, footer — same slots as the web version.' },
    { name: 'Switch', desc: 'Spring-animated thumb, controlled or uncontrolled.' },
    { name: 'Input', desc: 'Maps to the right native keyboard automatically.' },
    { name: 'Sheet', desc: 'Bottom sheet with drag-to-dismiss, snap points included.' },
    { name: 'Avatar', desc: 'Falls back to initials while the image loads.' },
    { name: 'Tabs', desc: 'Swipe between panels, indicator tracks the gesture.' },
    { name: 'Badge', desc: 'Status dots for list rows and notification counts.' },
  ];

  return (
    <section id="components" className="relative mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-400">components</div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">The same names. The same props you&apos;d expect.</h2>
          </div>
          <span className="font-mono text-sm text-zinc-500">24 shipped</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.name} delay={i * 40}>
            <div className="group relative h-full bg-zinc-950 p-5 transition-colors duration-300 hover:bg-zinc-900">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 70%)',
                }}
              />
              <div className="relative">
                <div className="mb-1.5 font-mono text-sm text-zinc-100">&lt;{item.name} /&gt;</div>
                <div className="text-xs leading-relaxed text-zinc-500">{item.desc}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function InstallSection() {
  const [tab, setTab] = useState('bun');
  const cmds: Record<string, { install: string; add: string }> = {
    bun: { install: 'bunx rn-shadcn init', add: 'bunx rn-shadcn add button card switch' },
    npm: { install: 'npx rn-shadcn init', add: 'npx rn-shadcn add button card switch' },
    pnpm: { install: 'pnpm dlx rn-shadcn init', add: 'pnpm dlx rn-shadcn add button card switch' },
  };
  return (
    <section id="install" className="relative mx-auto max-w-4xl px-6 py-20">
      <Reveal className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-100">Own the code. Not a dependency.</h2>
        <p className="mx-auto max-w-lg text-zinc-400">
          The CLI drops component source straight into your repo. No version bumps to track, no wrapper to work around
          when you need to change something.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div
          className="relative overflow-hidden rounded-2xl border border-zinc-800 backdrop-blur-xl"
          style={{
            background: 'linear-gradient(180deg, rgba(24,24,27,0.7), rgba(9,9,11,0.7))',
            boxShadow: '0 0 60px rgba(99,102,241,0.08)',
          }}
        >
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="flex gap-2">
              {Object.keys(cmds).map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className="rounded-md px-2.5 py-1 font-mono text-xs transition-colors"
                  style={{
                    color: tab === k ? '#E0E7FF' : '#71717A',
                    background: tab === k ? 'rgba(99,102,241,0.15)' : 'transparent',
                  }}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
            </div>
          </div>
          <div className="px-5 py-6 font-mono text-sm">
            <div className="text-zinc-500">
              $ <span className="text-zinc-200">{cmds[tab].install}</span>
            </div>
            <div className="mt-2 text-zinc-500">
              $ <span className="text-zinc-200">{cmds[tab].add}</span>
            </div>
            <div className="mt-2 text-indigo-400">✓ Added 3 components to components/ui</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-zinc-900 px-6 py-10 sm:flex-row">
      <div className="flex items-center gap-2.5">
        <Logo size={32} />
        <span className="text-sm text-zinc-500">rn-shadcn — MIT licensed</span>
      </div>
      <div className="font-mono text-xs text-zinc-600">v0.4 · built on Uniwind + Tailwind v4</div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <div
        className="min-h-screen w-full overflow-x-hidden"
        style={{
          background: '#09090B',
          color: '#FAFAFA',
          fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <NavBar />
        <Hero />
        <ComponentGrid />
        <InstallSection />
        <Footer />
      </div>
    </>
  );
}
