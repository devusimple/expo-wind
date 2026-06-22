import MockSwitch from "./mock-switch";

export default function PhoneScreenContent({ index }: { index: number }) {
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