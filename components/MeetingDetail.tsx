import type { ReactNode } from 'react';
import MeetingTypeBadge from './MeetingTypeBadge';
import { formatMeetingDate } from '@/lib/dates';
import { isSacramentMeeting } from '@/lib/meeting-labels';
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

function ProgramItem({ item }: { item: SpeakerItem }) {
  if (item.type === 'musical-number') {
    return (
      <li className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">Musical number</span>
        <span>
          {item.name}
          {item.topic && <span className="text-muted"> — {item.topic}</span>}
        </span>
      </li>
    );
  }
  return (
    <li className="flex flex-col">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">Speaker</span>
      <span>
        {item.name}
        {item.topic && <span className="text-muted"> — {item.topic}</span>}
      </span>
    </li>
  );
}

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  const announcements = meeting.announcements ?? [];
  const sacrament = isSacramentMeeting(meeting.meetingType);

  return (
    <article className="mx-auto max-w-2xl rounded-xl border border-line bg-surface p-6 shadow-sm sm:p-10 print:max-w-none print:border-0 print:p-0 print:shadow-none">
      <header className="mb-6 text-center">
        <p className="text-sm text-muted">
          {WARD.name} · {WARD.stake}
        </p>
        <h1 className="mt-1 font-serif text-3xl font-semibold">
          <time dateTime={meeting.date}>{formatMeetingDate(meeting.date)}</time>
        </h1>
        <div className="mt-3">
          <MeetingTypeBadge type={meeting.meetingType} />
        </div>
        {meeting.location && <p className="mt-3 text-sm text-muted">{meeting.location}</p>}
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
        {announcements.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5">
            {announcements.map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No announcements</p>
        )}
      </ProgramSection>

      <ProgramSection title="Opening Hymn">
        <HymnLine hymn={meeting.openingHymn} />
      </ProgramSection>

      <ProgramSection title="Opening Prayer">
        <p>{meeting.openingPrayer}</p>
      </ProgramSection>

      <ProgramSection title="Ward Business">
        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No ward business</p>
        )}
      </ProgramSection>

      <ProgramSection title="Stake Business">
        <p>{meeting.stakeBusiness ? 'Yes — stake business will be conducted' : 'None'}</p>
      </ProgramSection>

      {sacrament && meeting.sacramentHymn && (
        <ProgramSection title="Sacrament Hymn">
          <HymnLine hymn={meeting.sacramentHymn} />
          <p className="mt-1 text-sm italic text-muted">Administration of the sacrament</p>
        </ProgramSection>
      )}

      <ProgramSection title={meeting.meetingType === 'testimony' ? 'Testimonies' : 'Speakers & Musical Numbers'}>
        {meeting.meetingType === 'testimony' && (
          <p className={meeting.speakers.length > 0 ? 'mb-3' : undefined}>
            Bearing of testimonies by members of the congregation
          </p>
        )}
        {meeting.speakers.length > 0 ? (
          <ol className="space-y-3">
            {meeting.speakers.map((item) => (
              <ProgramItem key={`${item.type}-${item.name}`} item={item} />
            ))}
          </ol>
        ) : (
          meeting.meetingType !== 'testimony' && <p className="text-muted">To be announced</p>
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
