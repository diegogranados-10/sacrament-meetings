import Image from 'next/image';
import Link from 'next/link';
import { WARD } from '@/lib/ward';

const FEATURES = [
  {
    title: 'Plan the agenda',
    body: 'Hymns, prayers, ward business, speakers, and musical numbers for every Sunday in one place.',
  },
  {
    title: 'Review past weeks',
    body: 'Look back at earlier programs to balance speakers, topics, and hymn choices.',
  },
  {
    title: 'Print programs',
    body: 'Open any meeting and print a clean program for the pulpit or the congregation.',
  },
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <Image
          src="/images/chapel-hero.jpg"
          alt="Illustration of a white chapel with a tall steeple on a green hill at sunrise"
          width={1200}
          height={600}
          preload
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-auto w-full"
        />
        <div className="space-y-4 p-6 sm:p-10">
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Sacrament Meeting Planner</h1>
          <p className="max-w-2xl text-lg text-muted">
            Plan and review sacrament meeting agendas for the {WARD.name}, and print programs for
            this Sunday and past weeks.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/meetings/current"
              className="rounded-md bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-strong"
            >
              This Sunday&apos;s program
            </Link>
            <Link
              href="/meetings"
              className="rounded-md border border-brand px-5 py-2.5 font-semibold text-brand hover:bg-brand/10"
            >
              Browse all meetings
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">
          What you can do
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <li key={feature.title} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-serif text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
