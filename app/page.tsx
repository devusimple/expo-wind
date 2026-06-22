import type { Metadata } from 'next';
import NavBar from '@/components/home/nav-bar';
import Hero from '@/components/home/hero';
import ComponentGrid from '@/components/home/component-grid';
import InstallSection from '@/components/home/install-section';
import Footer from '@/components/home/footer';

export const metadata: Metadata = {
  title: 'rn-shadcn — shadcn/ui, made for touch',
  description:
    'shadcn-style React Native components built with Uniwind and Tailwind CSS v4. Copy, paste, and customize — no black-box dependencies.',
  openGraph: {
    title: 'rn-shadcn — shadcn/ui, made for touch',
    description:
      'shadcn-style React Native components built with Uniwind and Tailwind CSS v4. Copy, paste, and customize — no black-box dependencies.',
    url: '/',
  },
  twitter: {
    title: 'rn-shadcn — shadcn/ui, made for touch',
    description:
      'shadcn-style React Native components built with Uniwind and Tailwind CSS v4.',
  },
};

export default function Page() {
  return (
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
      <InstallSection />
      <ComponentGrid />
      <Footer />
    </div>
  );
}
