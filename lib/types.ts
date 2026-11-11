export type MeetingType = 'testimony' | 'regular' | 'stake' | 'general';

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

export interface SacramentMeeting {
  id: number;
  date: string; // ISO date string: 'YYYY-MM-DD'
  meetingType: MeetingType;
  presiding: string;
  conducting: string;
  location?: string;
  announcements?: string[];
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[];
  stakeBusiness: boolean;
  sacramentHymn?: Hymn; // omitted for stake and general meetings, which do not administer the sacrament
  speakers: SpeakerItem[];
  closingHymn: Hymn;
  closingPrayer: string;
}

export interface ApiError {
  error: string;
}
