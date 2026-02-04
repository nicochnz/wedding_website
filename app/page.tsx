"use client";

import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import MenuSection from "./menusection";
import ProgrammeSection from "./programmesection";
import RSVPForm from "./rsvpform";
import PaymentBanner from "./paymentbanner";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <RSVPForm />
      <PaymentBanner />
      <ProgrammeSection />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
