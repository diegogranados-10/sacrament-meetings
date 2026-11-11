import type { ReactNode } from 'react';
import MeetingTypeBadge from './MeetingTypeBadge';
import { formatLongDate } from '@/lib/dates';
import { MEETING_TYPES } from '@/lib/meeting-types';
import type { Hymn, SacramentMeeting, SpeakerItem } from '@/lib/types';
import { WARD } from '@/lib/ward';

function ProgramSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="break-inside-avoid border-t border-line py-4 first:border-t-0">
      <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">{title}</h2>
      <div className="text-base">{children}</div>
    </section>
  );
}

function HymnLine({ hymn }: { hymn: Hymn }) {
  return (
    <p>
      <span className="font-semibold">Hymn {hymn.number}</span>
      <span aria-hidden="true"> · </span>
      <span className="sr-only">, </span>
      <cite className="not-italic">{hymn.title}</cite>
    </p>
  );
}

const PROGRAM_ITEM_LABELS: Record<SpeakerItem['type'], string> = {
  speaker: 'Speaker',
  'musical-number': 'Musical number',
};

function ProgramItem({ item }: { item: SpeakerItem }) {
  return (
    <li className="flex flex-col">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">{PROGRAM_ITEM_LABELS[item.type]}</span>
      <span>
        {item.name}
        {item.topic && <span className="text-muted"> — {item.topic}</span>}
      </span>
    </li>
  );
}

function BulletList({ items, empty }: { items: string[]; empty: string }) {
  if (items.length === 0) return <p className="text-muted">{empty}</p>;
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  const type = MEETING_TYPES[meeting.meetingType];

  return (
    <article className="mx-auto max-w-2xl rounded-xl border border-line bg-surface p-6 shadow-sm sm:p-10 print:max-w-none print:border-0 print:p-0 print:shadow-none">
      <header className="mb-6 text-center">
        <p className="text-sm text-muted">
          {WARD.name} · {WARD.stake}
        </p>
        <h1 className="mt-1 font-serif text-3xl font-semibold">
          <time dateTime={meeting.date}>{formatLongDate(meeting.date)}</time>
        </h1>
        <div className="mt-3">
          <MeetingTypeBadge type={meeting.meetingType} />
        </div>
        {'location' in meeting && <p className="mt-3 text-sm text-muted">{meeting.location}</p>}
      </header>

      <dl className="mb-4 grid grid-cols-2 gap-4 rounded-lg bg-background p-4 text-sm print:bg-transparent">
        <div>
          <dt className="text-muted">Presiding</dt>
          <dd className="font-semibold">{meeting.presiding}</dd>
        </div>
        <div>
          <dt className="text-muted">Conducting</dt>
          <dd className="font-semibold">{meeting.conducting}</dd>
        </div>
      </dl>

      <ProgramSection title="Announcements">
        <BulletList items={meeting.announcements} empty="No announcements" />
      </ProgramSection>

      <ProgramSection title="Opening Hymn">
        <HymnLine hymn={meeting.openingHymn} />
      </ProgramSection>

      <ProgramSection title="Opening Prayer">
        <p>{meeting.openingPrayer}</p>
      </ProgramSection>

      <ProgramSection title="Ward Business">
        <BulletList items={meeting.wardBusiness.map((item) => item.description)} empty="No ward business" />
      </ProgramSection>

      <ProgramSection title="Stake Business">
        <p>{meeting.stakeBusiness ? 'Yes — stake business will be conducted' : 'None'}</p>
      </ProgramSection>

      {'sacramentHymn' in meeting && (
        <ProgramSection title="Sacrament Hymn">
          <HymnLine hymn={meeting.sacramentHymn} />
          <p className="mt-1 text-sm italic text-muted">Administration of the sacrament</p>
        </ProgramSection>
      )}

      <ProgramSection title={type.programHeading}>
        {type.programIntro && (
          <p className={meeting.speakers.length > 0 ? 'mb-3' : undefined}>{type.programIntro}</p>
        )}
        {meeting.speakers.length > 0 ? (
          <ol className="space-y-3">
            {meeting.speakers.map((item) => (
              <ProgramItem key={`${item.type}-${item.name}`} item={item} />
            ))}
          </ol>
        ) : (
          type.emptyProgram && <p className="text-muted">{type.emptyProgram}</p>
        )}
      </ProgramSection>

      <ProgramSection title="Closing Hymn">
        <HymnLine hymn={meeting.closingHymn} />
      </ProgramSection>

      <ProgramSection title="Closing Prayer">
        <p>{meeting.closingPrayer}</p>
      </ProgramSection>
    </article>
  );
}
