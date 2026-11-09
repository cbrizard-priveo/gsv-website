// Blog posts, read from the imported page metadata (Yoast's Open Graph tags and JSON-LD).
import pages from '../wp/pages.json';
import type { WpPageData } from '../layouts/WpPage.astro';
import type { Lang } from '../data/site';

export interface Post {
  route: string;
  title: string;
  excerpt: string;
  image: string;
  date: Date;
}

const meta = (head: string[], property: string) =>
  head.map((tag) => tag.match(new RegExp(`property="${property}" content="([^"]*)"`))?.[1]).find(Boolean) ?? '';

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&#039;|&rsquo;/g, '’').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…');

export function latestPosts(lang: Lang, count = 3): Post[] {
  return (pages as WpPageData[])
    .filter((p) => p.lang === lang && /\bsingle-post\b/.test(p.bodyClass) && !/\bsingle-vaccination\b/.test(p.bodyClass))
    .map((p) => {
      const published = p.head.join('').match(/"datePublished":"([^"]+)"/)?.[1];
      return {
        route: p.route,
        title: decode(meta(p.head, 'og:title').replace(/\s*\|\s*Groupe Santé Voyage$/, '')),
        excerpt: decode(meta(p.head, 'og:description')),
        image: meta(p.head, 'og:image').replace(/^https?:\/\/(www\.)?cliniquesantevoyage\.com/, ''),
        date: new Date(published ?? 0),
      };
    })
    .filter((p) => p.image)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, count);
}
