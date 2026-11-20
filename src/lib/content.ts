import siteJson from '../content/site.json';
import servicesJson from '../content/services.json';
import testimonialsJson from '../content/testimonials.json';
import pricingJson from '../content/pricing.json';
import en from '../content/copy/en.json';
import es from '../content/copy/es.json';
import type { Locale } from './i18n';

export const site = siteJson;
export const services = servicesJson;
export const testimonials = testimonialsJson;
export const pricing = pricingJson;

export type PriceOption = (typeof pricing.services)[number]['options'][number];

export function pricesForService(serviceId: string): PriceOption[] {
  return pricing.services.find((entry) => entry.serviceId === serviceId)?.options ?? [];
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: pricing.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

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
