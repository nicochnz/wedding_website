"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Home, ZoomIn, X } from "lucide-react";
import type { Guest } from "@/data/guests";

const HOUSE_PLANS: Record<number, string> = {
  1: "/maison_haute_du_lac.png",
  2: "/maisonette_du_lac.png",
  3: "/gite_nature_detente.png",
  4: "/gite_de_groupe.png",
  5: "/maison_landaise.png",
};

const HOUSE_PHOTOS: Record<number, string> = {
  1: "/chambres_maison_haute_du_lac.png",
  2: "/chambres_maisonette_du_lac.png",
  3: "/chambres_gite_et_nature.png",
  4: "/chambres_gite_de_groupe.png",
  5: "/chambres_landaise.png",
};

const DAYS = [
  {
    label: "Jeu. 20",
    date: "Jeudi 20 Août",
    events: [
      { time: "16h00", title: "Arrivée & installation", desc: "Accueil dans votre hébergement" },
      { time: "19h00", title: "Apéro", desc: "On se retrouve autour d'un verre" },
      { time: "21h00", title: "Dîner", desc: "Premier repas tous ensemble" },
    ],
  },
  {
    label: "Ven. 21",
    date: "Vendredi 21 Août",
    events: [
      { time: "9h00", title: "Départ du domaine", desc: "RDV Mairie à 10h30" },
      { time: "11h00", title: "Mariage", desc: "Mairie de Mérignac" },
      { time: "13h30", title: "Vin d'honneur", desc: "On profite de la journée + Photos" },
      { time: "18h00", title: "Soirée", desc: "Apéro + Repas" },
    ],
  },
  {
    label: "Sam. 22",
    date: "Samedi 22 Août",
    events: [
      { time: "11h00", title: "Brunch"},
      { time: "13h00", title: "Activités diverses", desc: "Volley, Jaccuzi, Piscine..." },
      { time: "19h00", title: "Apéro", desc: "Comme d'hab" },
      { time: "20h30", title: "Burger du chef", desc: "FoodTruck" },
    ],
  },
  {
    label: "Dim. 23",
    date: "Dimanche 23 Août",
    events: [
      { time: "11h00", title: "Brunch de clôture", desc: "" },
      { time: "15h00", title: "Départs", desc: "Au revoir & à bientôt !" },
    ],
  },
];

function PlanZoomModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <p className="text-white/70 text-sm">Pincez pour zoomer</p>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      {/* overflow-auto + large image = pinch-to-zoom natif sur mobile */}
      <div
        className="flex-1 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="min-w-[200%] md:min-w-0 md:w-full md:max-w-3xl md:mx-auto block"
          style={{ touchAction: "pinch-zoom" }}
        />
      </div>
    </div>
  );
}

function ZoomableImage({ src, alt, label, onZoom }: { src: string; alt: string; label: string; onZoom: () => void }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs text-muted-foreground uppercase tracking-widest px-1">{label}</p>
      <button
        onClick={onZoom}
        className="w-full rounded-xl overflow-hidden border border-primary/20 bg-white/70 shadow-sm relative group cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <ZoomIn size={13} />
            Agrandir
          </div>
        </div>
      </button>
    </div>
  );
}

export default function InviteClient({ guest }: { guest: Guest }) {
  const [tab, setTab] = useState<"map" | "planning">("map");
  const [activeDay, setActiveDay] = useState(0);
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Zoom modal */}
      {zoomedSrc && (
        <PlanZoomModal
          src={zoomedSrc}
          alt={guest.house}
          onClose={() => setZoomedSrc(null)}
        />
      )}

      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-lg mx-auto px-4 py-5 text-center">
          <p className="text-elegant text-primary text-sm mb-0.5">Camille & Nicolas</p>
          <p className="text-muted-foreground text-xs">20 - 23 Août 2026</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-5 space-y-4">

        {/* Carte invité */}
        <div className="card-wedding py-5 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Bienvenue</p>
          <p className="font-serif text-2xl text-foreground">{guest.name}</p>
          <div className="flex items-center justify-center gap-2 mt-3 text-primary">
            <Home size={14} />
            <span className="text-sm font-medium">{guest.house}</span>
          </div>
          {guest.note && (
            <div className="inline-flex items-center gap-1.5 mt-2 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
              <MapPin size={11} />
              {guest.note}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex rounded-lg border border-primary/20 overflow-hidden bg-white/50">
          <button
            onClick={() => setTab("map")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
              tab === "map"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MapPin size={15} />
            Mon hébergement
          </button>
          <button
            onClick={() => setTab("planning")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
              tab === "planning"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Calendar size={15} />
            Planning
          </button>
        </div>

        {/* Onglet hébergement */}
        {tab === "map" && (
          <div className="space-y-4">
            {/* Récap hébergement */}
            <div className="card-wedding py-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Home size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{guest.house}</p>
                  {guest.note && (
                    <p className="text-primary text-sm font-medium mt-0.5">{guest.note}</p>
                  )}
                  <p className="text-muted-foreground text-xs mt-1">
                    Hébergement n°{guest.houseNumber} · Appuyez sur les images pour zoomer
                  </p>
                </div>
              </div>
            </div>

            {/* Plan des chambres */}
            <ZoomableImage
              src={HOUSE_PLANS[guest.houseNumber]}
              alt={`Plan ${guest.house}`}
              label="Plan des chambres"
              onZoom={() => setZoomedSrc(HOUSE_PLANS[guest.houseNumber])}
            />

            {/* Photos des chambres */}
            <ZoomableImage
              src={HOUSE_PHOTOS[guest.houseNumber]}
              alt={`Chambres ${guest.house}`}
              label="Photos des chambres"
              onZoom={() => setZoomedSrc(HOUSE_PHOTOS[guest.houseNumber])}
            />
          </div>
        )}

        {/* Onglet planning */}
        {tab === "planning" && (
          <div className="space-y-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {DAYS.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    activeDay === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white/60 border-primary/20 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>

            <div className="card-wedding">
              <p className="font-serif text-lg text-foreground mb-4">
                {DAYS[activeDay].date}
              </p>
              <div className="space-y-4">
                {DAYS[activeDay].events.map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-right shrink-0 w-14">
                      <span className="text-primary font-medium text-sm">{event.time}</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        {i < DAYS[activeDay].events.length - 1 && (
                          <div className="w-px flex-1 bg-primary/20 mt-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="font-medium text-foreground text-sm">{event.title}</p>
                        {event.desc && (
                          <p className="text-muted-foreground text-xs mt-0.5">{event.desc}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
