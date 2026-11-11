import type { MeetingType } from './types';

export const MEETING_TYPE_LABELS: Record<MeetingType, string> = {
  regular: 'Sacrament Meeting',
  testimony: 'Fast & Testimony Meeting',
  stake: 'Stake Conference',
  general: 'General Conference',
};

export const MEETING_TYPE_BADGE_CLASSES: Record<MeetingType, string> = {
  regular: 'bg-sky-100 text-sky-900 ring-sky-300',
  testimony: 'bg-emerald-100 text-emerald-900 ring-emerald-300',
  stake: 'bg-amber-100 text-amber-900 ring-amber-300',
  general: 'bg-violet-100 text-violet-900 ring-violet-300',
};

export function isSacramentMeeting(type: MeetingType): boolean {
  return type === 'regular' || type === 'testimony';
}
