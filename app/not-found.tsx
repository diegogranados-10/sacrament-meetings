import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl space-y-4 py-12 text-center">
      <h1 className="font-serif text-3xl font-semibold">Page not found</h1>
      <p className="text-muted">We couldn&apos;t find that page or meeting.</p>
      <Link href="/meetings" className="inline-block font-semibold text-brand underline">
        Back to all meetings
      </Link>
    </div>
  );
}
