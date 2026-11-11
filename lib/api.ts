import { headers } from 'next/headers';
import type { SacramentMeeting } from './types';

async function apiUrl(path: string): Promise<string> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? 'localhost:3000';
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');
  const protocol = requestHeaders.get('x-forwarded-proto')?.split(',')[0] ?? (isLocal ? 'http' : 'https');
  return `${protocol}://${host}${path}`;
}

export async function fetchMeetings(date?: string): Promise<SacramentMeeting[]> {
  const query = date ? `?date=${encodeURIComponent(date)}` : '';
  const response = await fetch(await apiUrl(`/api/meetings${query}`), { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`GET /api/meetings failed with status ${response.status}`);
  }
  return (await response.json()) as SacramentMeeting[];
}

export async function fetchMeeting(id: string): Promise<SacramentMeeting | null> {
  const response = await fetch(await apiUrl(`/api/meetings/${encodeURIComponent(id)}`), {
    cache: 'no-store',
  });
  if (response.status === 400 || response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`GET /api/meetings/${id} failed with status ${response.status}`);
  }
  return (await response.json()) as SacramentMeeting;
}
