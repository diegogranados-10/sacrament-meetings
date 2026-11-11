import Link from 'next/link';
import MeetingTypeBadge from './MeetingTypeBadge';
import { formatMeetingDate } from '@/lib/dates';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
  isCurrent?: boolean;
}

export default function MeetingCard({ meeting, isCurrent = false }: MeetingCardProps) {
  const speakers = meeting.speakers.filter((item) => item.type === 'speaker');

  return (
    <article
      className={`relative flex flex-col gap-3 rounded-xl border bg-surface p-5 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-brand ${
        isCurrent ? 'border-brand' : 'border-line'
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <MeetingTypeBadge type={meeting.meetingType} />
        {isCurrent && (
          <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">
            This Sunday
          </span>
        )}
      </div>

      <h3 className="font-serif text-lg font-semibold">
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-foreground outline-none after:absolute after:inset-0 after:content-[''] hover:text-brand"
        >
          <time dateTime={meeting.date}>{formatMeetingDate(meeting.date)}</time>
        </Link>
      </h3>

      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="text-muted">Presiding</dt>
        <dd>{meeting.presiding}</dd>
        <dt className="text-muted">Conducting</dt>
        <dd>{meeting.conducting}</dd>
        <dt className="text-muted">Speakers</dt>
        <dd>
          {meeting.meetingType === 'testimony'
            ? 'Testimonies from the congregation'
            : speakers.length > 0
              ? speakers.map((s) => s.name).join(', ')
              : 'To be announced'}
        </dd>
      </dl>
    </article>
  );
}
