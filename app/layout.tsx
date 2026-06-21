import { RootProvider } from 'fumadocs-ui/provider/next';
import { JetBrains_Mono } from 'next/font/google';
import { SettingsProvider } from '@/lib/settings-context';
import './global.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
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
