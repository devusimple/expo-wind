import Reveal from "./reveal";

export default function ComponentGrid() {
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