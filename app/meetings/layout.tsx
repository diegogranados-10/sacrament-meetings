import NavLinks, { type NavLinkItem } from '@/components/NavLinks';

const MEETING_LINKS: NavLinkItem[] = [
  { href: '/meetings', label: 'All meetings', exact: true },
  { href: '/meetings/current', label: 'This Sunday' },
];

export default function MeetingsLayout({ children }: LayoutProps<'/meetings'>) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3 print:hidden">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">Meeting programs</p>
        <NavLinks label="Meetings" links={MEETING_LINKS} />
      </div>
      {children}
    </div>
  );
}
