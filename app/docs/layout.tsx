import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { SettingsBar } from '@/components/settings-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      themeSwitch={{
        enabled: true,
        component: <SettingsBar />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
