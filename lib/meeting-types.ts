import type { MeetingType } from './types';

interface MeetingTypeInfo {
  label: string;
  programHeading: string;
  programIntro: string | null;
  emptyProgram: string | null;
}

const SPEAKERS = { programHeading: 'Speakers & Musical Numbers', programIntro: null, emptyProgram: 'To be announced' };

export const MEETING_TYPES: Record<MeetingType, MeetingTypeInfo> = {
  regular: { label: 'Sacrament Meeting', ...SPEAKERS },
  testimony: {
    label: 'Fast & Testimony Meeting',
    programHeading: 'Testimonies',
    programIntro: 'Bearing of testimonies by members of the congregation',
    emptyProgram: null,
  },
  stake: { label: 'Stake Conference', ...SPEAKERS },
  general: { label: 'General Conference', ...SPEAKERS },
};
