import type { SacramentMeeting } from './types';

type DefaultedField =
  | 'meetingType'
  | 'presiding'
  | 'conducting'
  | 'announcements'
  | 'wardBusiness'
  | 'stakeBusiness'
  | 'speakers';

type MeetingInput = Omit<SacramentMeeting, DefaultedField> &
  Partial<Pick<SacramentMeeting, DefaultedField>>;

const DEFAULT_MEETING: Pick<SacramentMeeting, DefaultedField> = {
  meetingType: 'regular',
  presiding: 'Bishop Smith',
  conducting: 'Brother Jones',
  announcements: [],
  wardBusiness: [],
  stakeBusiness: false,
  speakers: [],
};

function createMeeting(input: MeetingInput): SacramentMeeting {
  return { ...DEFAULT_MEETING, ...input };
}

const meetings: SacramentMeeting[] = [
  createMeeting({
    id: 1,
    date: '2026-05-03',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    sacramentHymn: { number: 183, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' },
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10'],
  }),
  createMeeting({
    id: 2,
    date: '2026-10-04',
    meetingType: 'general',
    presiding: 'General Church leadership',
    conducting: 'Broadcast',
    location: 'Broadcast from the Conference Center; watch at home or at the stake center',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'By assignment',
    speakers: [
      { name: 'General Conference speakers', topic: 'Sunday morning session', type: 'speaker' },
      { name: 'Conference choir', topic: '', type: 'musical-number' },
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'By assignment',
    announcements: ['No sacrament meeting in the ward building today'],
  }),
  createMeeting({
    id: 3,
    date: '2026-10-11',
    conducting: 'Brother Nguyen',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Patel',
    wardBusiness: [
      { description: 'Release of Brother Ortiz as Sunday School president' },
      { description: 'Call of Sister Kimball as Relief Society secretary' },
    ],
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Brother Ortiz', topic: 'Lessons from General Conference', type: 'speaker' },
      { name: 'Sister and Brother Lee', topic: 'Duet: "I Need Thee Every Hour"', type: 'musical-number' },
      { name: 'Sister Ramirez', topic: 'Ministering like the Savior', type: 'speaker' },
    ],
    closingHymn: { number: 98, title: 'I Need Thee Every Hour' },
    closingPrayer: 'Brother Chen',
    announcements: ['Trunk-or-treat in the church parking lot: October 30, 6:00 PM'],
  }),
  createMeeting({
    id: 4,
    date: '2026-10-18',
    meetingType: 'stake',
    presiding: 'President Alvarez, Riverbend Stake',
    conducting: 'President Holt, first counselor',
    location: 'Riverbend Stake Center, 10:00 AM',
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Sister Wright',
    speakers: [
      { name: 'Sister Okafor', topic: 'Stake Relief Society president', type: 'speaker' },
      { name: 'Stake Choir', topic: '"Come, Come, Ye Saints"', type: 'musical-number' },
      { name: 'President Alvarez', topic: 'Gathering Israel in our day', type: 'speaker' },
    ],
    closingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    closingPrayer: 'Brother Silva',
    announcements: ['No meetings in the ward building today'],
  }),
  createMeeting({
    id: 5,
    date: '2026-10-25',
    conducting: 'Brother Nguyen',
    openingHymn: { number: 26, title: "Joseph Smith's First Prayer" },
    openingPrayer: 'Brother Martinez',
    wardBusiness: [{ description: 'Sustaining of Brother Ortiz as ward mission leader' }],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      { name: 'Elder Thompson', topic: 'Returned missionary report', type: 'speaker' },
      { name: 'Primary children', topic: '"I Love to See the Temple"', type: 'musical-number' },
      { name: 'Bishop Smith', topic: 'Preparing for the temple', type: 'speaker' },
    ],
    closingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    closingPrayer: 'Sister Gomez',
    announcements: [
      'Tithing declaration appointments begin November 1',
      'Youth service project: Saturday, 9:00 AM at the food bank',
    ],
  }),
  createMeeting({
    id: 6,
    date: '2026-11-01',
    meetingType: 'testimony',
    conducting: 'Brother Jones',
    openingHymn: { number: 142, title: 'Sweet Hour of Prayer' },
    openingPrayer: 'Sister Kimball',
    wardBusiness: [{ description: 'Baby blessing: Olivia Martinez' }],
    sacramentHymn: { number: 194, title: 'There Is a Green Hill Far Away' },
    closingHymn: { number: 241, title: 'Count Your Blessings' },
    closingPrayer: 'Brother Lee',
    announcements: ['Fast offerings may be given to any member of the bishopric'],
  }),
  createMeeting({
    id: 7,
    date: '2026-11-08',
    conducting: 'Brother Nguyen',
    openingHymn: { number: 92, title: 'For the Beauty of the Earth' },
    openingPrayer: 'Sister Chen',
    wardBusiness: [
      { description: 'Call of Brother Davis as elders quorum secretary' },
      { description: 'Ordination of Sam Patel to the office of priest' },
    ],
    sacramentHymn: { number: 195, title: 'How Great the Wisdom and the Love' },
    speakers: [
      { name: 'Sam Patel', topic: 'Gratitude', type: 'speaker' },
      { name: 'Sister Ramirez', topic: 'Piano solo: "Be Still, My Soul"', type: 'musical-number' },
      { name: 'Brother Gomez', topic: 'Counting our blessings', type: 'speaker' },
    ],
    closingHymn: { number: 94, title: 'Come, Ye Thankful People' },
    closingPrayer: 'Sister Williams',
    announcements: ['Ward Thanksgiving dinner: November 21, 6:00 PM in the cultural hall'],
  }),
  createMeeting({
    id: 8,
    date: '2026-11-15',
    conducting: 'Brother Jones',
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'Brother Silva',
    sacramentHymn: { number: 179, title: 'Again, Our Dear Redeeming Lord' },
    speakers: [
      { name: 'Sister Wright', topic: 'Following the prophet', type: 'speaker' },
      { name: 'Brother Thompson', topic: 'Come, follow me', type: 'speaker' },
    ],
    closingHymn: { number: 116, title: 'Come, Follow Me' },
    closingPrayer: 'Sister Okafor',
  }),
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  const sorted = [...meetings].sort((a, b) => a.date.localeCompare(b.date));
  if (date) return sorted.filter((m) => m.date === date);
  return sorted;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}
