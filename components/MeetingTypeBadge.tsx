import { MEETING_TYPE_BADGE_CLASSES, MEETING_TYPE_LABELS } from '@/lib/meeting-labels';
import type { MeetingType } from '@/lib/types';

export default function MeetingTypeBadge({ type }: { type: MeetingType }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${MEETING_TYPE_BADGE_CLASSES[type]}`}
    >
      {MEETING_TYPE_LABELS[type]}
    </span>
  );
}
