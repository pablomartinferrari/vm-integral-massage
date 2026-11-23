export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const paths = {
  home: { en: '/', es: '/es' },
  about: { en: '/about', es: '/es/nosotros' },
  services: { en: '/services', es: '/es/servicios' },
  contact: { en: '/contact', es: '/es/contacto' },
  journal: { en: '/journal', es: '/es/diario' },
  privacy: { en: '/privacy', es: '/es/privacidad' },
} as const;

export type PageKey = keyof typeof paths;
export type ServicesHash = 'pricing' | 'membership' | 'gift-cards';

export function tPath(locale: Locale, page: PageKey): string {
  return paths[page][locale];
}

/** Anchors on the merged services & pricing page. Old /pricing and /es/precios URLs 301 here via staticwebapp.config.json. */
export function servicesHash(locale: Locale, hash: ServicesHash): string {
  return `${tPath(locale, 'services')}#${hash}`;
}

export function servicePath(locale: Locale, slugs: { en: string; es: string }): string {
  return locale === 'es' ? `/es/servicios/${slugs.es}` : `/services/${slugs.en}`;
}

export function htmlLang(locale: Locale): string {
  return locale === 'es' ? 'es-US' : 'en-US';
}

export function localeFromUrl(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

export function switchLocalePath(
  locale: Locale,
  currentPage: PageKey,
  serviceSlugs?: { en: string; es: string },
): string {
  const next: Locale = locale === 'en' ? 'es' : 'en';
  if (serviceSlugs) return servicePath(next, serviceSlugs);
  return tPath(next, currentPage);
}

export function whatsappUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
