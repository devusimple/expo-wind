export default function Footer() {
    return (
        <footer className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-zinc-900 px-6 py-10 sm:flex-row">
            <div className="flex items-center gap-2.5">
                {/* <Logo size={32} /> */}
                <span className="text-sm text-zinc-500">rn-shadcn — MIT licensed</span>
            </div>
            <div className="font-mono text-xs text-zinc-600">v0.4 · built on Uniwind + Tailwind v4</div>
        </footer>
    );
}