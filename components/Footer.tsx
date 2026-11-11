import { WARD } from '@/lib/ward';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface print:hidden">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-6 text-sm text-muted">
        <p>
          {WARD.name} · {WARD.stake}
        </p>
        <p>Sacrament meeting every Sunday at {WARD.meetingTime}</p>
      </div>
    </footer>
  );
}
