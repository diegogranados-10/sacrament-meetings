import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { WARD } from '@/lib/ward';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `Sacrament Meeting Planner | ${WARD.name}`,
    template: `%s | ${WARD.name}`,
  },
  description: 'Plan, review, and print sacrament meeting programs for the ward.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only rounded-md bg-brand px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 print:max-w-none print:p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
