import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rn-shadcn.vercel.app';

  const docsParams = source.generateParams();

  const docsPages: MetadataRoute.Sitemap = docsParams.map((params) => {
    const slug = params.slug ? params.slug.join('/') : '';
    return {
      url: `${baseUrl}/docs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: slug === '' ? 0.9 : 0.5,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...docsPages,
  ];
}
