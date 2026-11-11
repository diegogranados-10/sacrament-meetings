import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import { mostRecentSunday, todayISO } from '@/lib/dates';
import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  await connection();
  const sunday = mostRecentSunday(todayISO());
  const [meeting] = getMeetings(sunday);

  if (!meeting) redirect(`/meetings?missing=${sunday}`);
  redirect(`/meetings/${meeting.id}`);
}
