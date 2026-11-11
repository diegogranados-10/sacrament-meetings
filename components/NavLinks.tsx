'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

export interface NavLinkItem {
  href: string;
  label: string;
  exact?: boolean;
}

interface NavLinksProps {
  label: string;
  links: NavLinkItem[];
}

function isActive(link: NavLinkItem, pathname: string | null): boolean {
  if (!pathname) return false;
  if (link.exact) return pathname === link.href;
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

function LinkList({ links, pathname }: { links: NavLinkItem[]; pathname: string | null }) {
  return (
    <ul className="flex flex-wrap gap-1">
      {links.map((link) => {
        const active = isActive(link, pathname);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`inline-block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'bg-brand text-white'
                  : 'text-brand hover:bg-brand/10'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ActiveLinkList({ links }: { links: NavLinkItem[] }) {
  const pathname = usePathname();
  return <LinkList links={links} pathname={pathname} />;
}

export default function NavLinks({ label, links }: NavLinksProps) {
  return (
    <nav aria-label={label}>
      <Suspense fallback={<LinkList links={links} pathname={null} />}>
        <ActiveLinkList links={links} />
      </Suspense>
    </nav>
  );
}
