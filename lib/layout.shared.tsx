import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <h1 className='font-space-grotesk text-xl'>RNS</h1>,
      url: "/",
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
    ],
    themeSwitch: {
      enabled: true,
    },
    githubUrl: "https://github.com/devusimple/rn-shadcn-docs.git",
    searchToggle: { enabled: true },
  };
}
