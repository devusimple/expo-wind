import Link from "next/link";
import GradientText from "./gradient-text";
import Reveal from "./reveal";
import PhoneMockup from "./phone-mockup";

export default function Hero() {
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
                        v1.0.0 — Uniwind + Tailwind v4
                    </div>
                </Reveal>

                <Reveal delay={80}>
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <GradientText className='font-space-grotesk'>RN-SHADCN</GradientText>
                        <span className='font-mono text-sm'>(React Native Shadcn/ui)</span>
                    </div>
                    <br />
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