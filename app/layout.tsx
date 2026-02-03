import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cam & Nico",
  description: "Cam & Nico's Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
