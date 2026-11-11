import type { Metadata } from 'next';
import MeetingCard from '@/components/MeetingCard';
import { fetchMeetings } from '@/lib/api';
import { formatMeetingDate, isISODate, mostRecentSunday, todayISO } from '@/lib/dates';
import type { SacramentMeeting } from '@/lib/types';

export const metadata: Metadata = {
  title: 'All meetings',
};

function MeetingGrid({ meetings, currentSunday }: { meetings: SacramentMeeting[]; currentSunday: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {meetings.map((meeting) => (
        <li key={meeting.id}>
          <MeetingCard meeting={meeting} isCurrent={meeting.date === currentSunday} />
        </li>
      ))}
    </ul>
  );
}

export default async function MeetingsPage({ searchParams }: PageProps<'/meetings'>) {
  const { missing } = await searchParams;
  const meetings = await fetchMeetings();
  const currentSunday = mostRecentSunday(todayISO());

  const upcoming = meetings.filter((m) => m.date > currentSunday);
  const currentAndPast = meetings.filter((m) => m.date <= currentSunday).reverse();
  const missingDate = typeof missing === 'string' && isISODate(missing) ? missing : null;

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-semibold">All meetings</h1>
        <p className="text-muted">Select a meeting to see its full agenda or print its program.</p>
      </div>

      {missingDate && (
        <p role="alert" className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
          No program has been entered yet for Sunday, {formatMeetingDate(missingDate)}.
        </p>
      )}

      <section aria-labelledby="current-past-heading" className="space-y-4">
        <h2 id="current-past-heading" className="font-serif text-2xl font-semibold">
          This week &amp; past weeks
        </h2>
        {currentAndPast.length > 0 ? (
          <MeetingGrid meetings={currentAndPast} currentSunday={currentSunday} />
        ) : (
          <p className="text-muted">No past meetings yet.</p>
        )}
      </section>

      <section aria-labelledby="upcoming-heading" className="space-y-4">
        <h2 id="upcoming-heading" className="font-serif text-2xl font-semibold">
          Upcoming
        </h2>
        {upcoming.length > 0 ? (
          <MeetingGrid meetings={upcoming} currentSunday={currentSunday} />
        ) : (
          <p className="text-muted">No upcoming meetings have been planned.</p>
        )}
      </section>
    </div>
  );
}
