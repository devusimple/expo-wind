import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 text-center p-8">
      <h1 className="text-4xl font-bold">expo-wind</h1>
      <p className="text-lg text-fd-muted-foreground max-w-md">
        A shadcn-style component library for React Native built with Uniwind + Tailwind CSS v4.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 text-sm font-medium"
      >
        View Documentation
      </Link>
    </main>
  );
}
