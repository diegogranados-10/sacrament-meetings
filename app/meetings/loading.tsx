export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="space-y-4">
      <span className="sr-only">Loading meetings…</span>
      <div aria-hidden="true" className="h-8 w-56 animate-pulse rounded bg-line" />
      <div aria-hidden="true" className="grid gap-4 sm:grid-cols-2">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className="h-36 animate-pulse rounded-xl bg-line" />
        ))}
      </div>
    </div>
  );
}
