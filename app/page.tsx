import type { Metadata } from 'next';
import LandingPage from './landing-client';

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
  return <LandingPage />;
}
