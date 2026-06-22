"use client"

import { useState } from "react";
import Reveal from "./reveal";

export default function InstallSection() {
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
                            <span className="size-2.5 rounded-full bg-green-700" />
                            <span className="size-2.5 rounded-full bg-yellow-700" />
                        </div>
                    </div>
                    <div className="px-5 py-6 text-sm font-fira-code">
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