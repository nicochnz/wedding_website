"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium print:hidden"
    >
      Imprimer / Exporter PDF
    </button>
  );
}
