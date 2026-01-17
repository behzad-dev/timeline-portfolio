import { site } from '@/config/site';

export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];
}
