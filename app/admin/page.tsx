import QRCode from "qrcode";
import { guests } from "@/data/guests";
import PrintButton from "./print-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin — QR Codes invités" };

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

async function generateQR(url: string): Promise<string> {
  return QRCode.toDataURL(url, {
    width: 300,
    margin: 2,
    color: { dark: "#3d2f1e", light: "#fdfaf5" },
  });
}

export default async function AdminPage() {
  const qrCodes = await Promise.all(
    guests.map(async (guest) => {
      const url = `${BASE_URL}/invite/${guest.slug}`;
      const dataUrl = await generateQR(url);
      return { guest, url, dataUrl };
    })
  );

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-3xl text-foreground">QR Codes invités</h1>
          <p className="text-muted-foreground mt-1">
            {guests.length} invités
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 print:grid-cols-4">
          {qrCodes.map(({ guest, url, dataUrl }) => (
            <div
              key={guest.slug}
              className="bg-white/70 border border-primary/20 rounded-xl p-4 flex flex-col items-center gap-2 text-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={dataUrl} alt={`QR ${guest.name}`} className="w-36 h-36" />
              <p className="font-medium text-sm text-foreground leading-tight">{guest.name}</p>
              <p className="text-xs text-primary font-medium">{guest.house}</p>
              <p className="text-xs text-muted-foreground break-all">{url}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <PrintButton />
        </div>
      </div>
    </div>
  );
}
