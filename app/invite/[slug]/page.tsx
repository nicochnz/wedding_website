import { notFound } from "next/navigation";
import { getGuestBySlug } from "@/data/guests";
import InviteClient from "./client";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guest = getGuestBySlug(slug);
  if (!guest) return { title: "Invitation" };
  return { title: `${guest.name} - Cam & Nico` };
}

export default async function InvitePage({ params }: Props) {
  const { slug } = await params;
  const guest = getGuestBySlug(slug);

  if (!guest) notFound();

  return <InviteClient guest={guest} />;
}
