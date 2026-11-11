import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import { fetchMeetings } from '@/lib/api';
import { currentSundayISO } from '@/lib/dates';

export default async function CurrentMeetingPage() {
  await connection();
  const sunday = currentSundayISO();
  const [meeting] = await fetchMeetings(sunday);
  redirect(meeting ? `/meetings/${meeting.id}` : `/meetings?missing=${sunday}`);
}
