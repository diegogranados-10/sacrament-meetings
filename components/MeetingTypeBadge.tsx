import { MEETING_TYPES } from '@/lib/meeting-types';
import type { MeetingType } from '@/lib/types';

const BADGE_CLASSES: Record<MeetingType, string> = {
  regular: 'bg-sky-100 text-sky-900 ring-sky-300',
  testimony: 'bg-emerald-100 text-emerald-900 ring-emerald-300',
  stake: 'bg-amber-100 text-amber-900 ring-amber-300',
  general: 'bg-violet-100 text-violet-900 ring-violet-300',
};

export default function MeetingTypeBadge({ type }: { type: MeetingType }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${BADGE_CLASSES[type]}`}
    >
      {MEETING_TYPES[type].label}
    </span>
  );
}
