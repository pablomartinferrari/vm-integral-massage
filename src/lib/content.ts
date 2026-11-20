import siteJson from '../content/site.json';
import servicesJson from '../content/services.json';
import testimonialsJson from '../content/testimonials.json';
import en from '../content/copy/en.json';
import es from '../content/copy/es.json';
import type { Locale } from './i18n';

export const site = siteJson;
export const services = servicesJson;
export const testimonials = testimonialsJson;

export type Service = (typeof services)[number];
export type Copy = typeof en;

const copyByLocale: Record<Locale, Copy> = { en, es };

export function copy(locale: Locale): Copy {
  return copyByLocale[locale];
}

export function serviceBySlug(locale: Locale, slug: string): Service | undefined {
  return services.find((s) => s.slugs[locale] === slug);
}

export function localized<T extends Record<Locale, string>>(value: T, locale: Locale): string {
  return value[locale];
}
