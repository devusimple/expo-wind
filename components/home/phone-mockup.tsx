"use client"
import { useEffect, useState } from "react";
import PhoneScreenContent from "./phone-screen-content";

const COMPONENTS_PREVIEW = [
    { name: 'Button', tag: '<Button variant="default" />' },
    { name: 'Switch', tag: '<Switch checked />' },
    { name: 'Card', tag: '<Card />' },
    { name: 'Input', tag: '<Input placeholder="Email" />' },
];

export default function PhoneMockup() {
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