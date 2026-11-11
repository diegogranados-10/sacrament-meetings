'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-strong print:hidden"
    >
      Print program
    </button>
  );
}
