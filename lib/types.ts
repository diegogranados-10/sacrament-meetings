export interface Hymn {
  number: number;
  title: string;
}

export interface SpeakerItem {
  name: string;
  topic: string;
  type: 'speaker' | 'musical-number';
}

export interface WardBusinessItem {
  description: string;
}

interface MeetingBase {
  id: number;
  date: string; // ISO date string: 'YYYY-MM-DD'
  presiding: string;
  conducting: string;
  announcements: string[];
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[];
  stakeBusiness: boolean;
  speakers: SpeakerItem[];
  closingHymn: Hymn;
  closingPrayer: string;
}

export interface WardMeeting extends MeetingBase {
  meetingType: 'regular' | 'testimony';
  sacramentHymn: Hymn;
}

export interface ConferenceMeeting extends MeetingBase {
  meetingType: 'stake' | 'general';
  location: string;
}

export type SacramentMeeting = WardMeeting | ConferenceMeeting;
export type MeetingType = SacramentMeeting['meetingType'];

export interface ApiError {
  error: string;
}
