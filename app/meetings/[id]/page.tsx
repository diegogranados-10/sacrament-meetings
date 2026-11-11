import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import PrintButton from '@/components/PrintButton';
import { fetchMeeting } from '@/lib/api';
import { formatMeetingDate } from '@/lib/dates';

export async function generateMetadata({ params }: PageProps<'/meetings/[id]'>): Promise<Metadata> {
  const { id } = await params;
  const meeting = await fetchMeeting(id);
  return { title: meeting ? `Program for ${formatMeetingDate(meeting.date, 'short')}` : 'Meeting not found' };
}

export default async function MeetingPage({ params }: PageProps<'/meetings/[id]'>) {
  const { id } = await params;
  const meeting = await fetchMeeting(id);
  if (!meeting) notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/meetings" className="font-semibold text-brand hover:underline">
          <span aria-hidden="true">←</span> All meetings
        </Link>
        <PrintButton />
      </div>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}
