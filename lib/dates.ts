import { WARD } from './ward';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function parseISODate(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`);
}

export function isISODate(value: string): boolean {
  if (!ISO_DATE.test(value)) return false;
  const date = parseISODate(value);
  return !Number.isNaN(date.getTime()) && toISODate(date) === value;
}

export function todayISO(): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: WARD.timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function currentSundayISO(): string {
  const date = parseISODate(todayISO());
  date.setUTCDate(date.getUTCDate() - date.getUTCDay());
  return toISODate(date);
}

export function formatLongDate(iso: string, style: 'long' | 'short' = 'long'): string {
  return parseISODate(iso).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: style === 'long' ? 'long' : 'short',
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}
