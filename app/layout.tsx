import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { JetBrains_Mono, Fira_Code, Space_Grotesk } from 'next/font/google';
import { SettingsProvider } from '@/lib/settings-context';
import { cn } from '@/lib/cn';
import './global.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code'
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: {
    default: 'rn-shadcn — shadcn/ui, made for touch',
    template: '%s | rn-shadcn',
  },
  description:
    'shadcn-style React Native components built with Uniwind and Tailwind CSS v4. Copy, paste, and customize — no black-box dependencies.',
  metadataBase: new URL('https://rn-shadcn.vercel.app'),
  openGraph: {
    title: 'rn-shadcn — shadcn/ui, made for touch',
    description:
      'shadcn-style React Native components built with Uniwind and Tailwind CSS v4. Copy, paste, and customize — no black-box dependencies.',
    siteName: 'rn-shadcn',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rn-shadcn — shadcn/ui, made for touch',
    description:
      'shadcn-style React Native components built with Uniwind and Tailwind CSS v4.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo-512x512.jpg',
    apple: '/logo-512x512.jpg',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(jetbrainsMono.variable, firaCode.variable, spaceGrotesk.variable)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <SettingsProvider>
            {children}
          </SettingsProvider>
        </RootProvider>
      </body>
    </html>
  );
}
