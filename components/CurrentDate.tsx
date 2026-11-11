'use client';

import { useSyncExternalStore } from 'react';
import { formatMeetingDate, todayISO } from '@/lib/dates';

const subscribe = () => () => {};

export default function CurrentDate() {
  const today = useSyncExternalStore(subscribe, () => todayISO(), () => null);

  if (!today) return <span aria-hidden="true">&nbsp;</span>;
  return <time dateTime={today}>{formatMeetingDate(today)}</time>;
}
