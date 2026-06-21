'use client';

import { useSettings } from '@/lib/settings-context';

export function CodeWrapToggle() {
  const { settings, setCodeWrap } = useSettings();

  return (
    <button
      type="button"
      onClick={() => setCodeWrap(!settings.codeWrap)}
      className="text-fd-muted-foreground hover:text-fd-accent-foreground text-xs font-medium transition-colors"
      title={settings.codeWrap ? 'Code wrapping: ON' : 'Code wrapping: OFF'}
    >
      {settings.codeWrap ? 'Wrap' : 'No Wrap'}
    </button>
  );
}
