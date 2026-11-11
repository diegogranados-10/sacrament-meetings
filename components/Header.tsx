import Link from 'next/link';
import CurrentDate from './CurrentDate';
import NavLinks, { type NavLinkItem } from './NavLinks';
import { WARD } from '@/lib/ward';

const MAIN_LINKS: NavLinkItem[] = [
  { href: '/', label: 'Home', exact: true },
  { href: '/meetings', label: 'Meetings' },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-surface print:hidden">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div>
          <Link href="/" className="font-serif text-xl font-semibold text-brand hover:underline">
            {WARD.name}
          </Link>
          <p className="min-h-5 text-sm text-muted">
            <CurrentDate />
          </p>
        </div>
        <NavLinks label="Main" links={MAIN_LINKS} />
      </div>
    </header>
  );
}
