"use client";

import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { MapPin, Sparkles, UtensilsCrossed, Music, Coffee, Heart, ChevronRight, CalendarDays, Wine, HouseHeart } from 'lucide-react';

// Données du programme
const programmeData = [
  {
    day: 'Jeudi 20 Août',
    fullDate: '20 Août 2026',
    title: 'Arrivée & Apéro',
    description: 'Installation & répartition des chambres',
    events: [
      { time: '16h00', title: 'Arrivée des proches', icon: MapPin, description: 'Installation dans les chambres' },
      { time: '18h30', title: 'Apéro et installation', icon: Wine, description: 'Apéro et installation des lieux' },
      { time: '20h30', title: 'Dîner', icon: UtensilsCrossed, description: 'Dîner décontracté' },
    ],
  },
  {
    day: 'Vendredi 21 Août',
    fullDate: '21 Août 2026',
    title: 'Jour du mariage',
    description: 'On se marie !',
    events: [
      { time: '9h30', title: 'Départ du domaine', icon: MapPin},
      { time: '11h00', title: 'Mairie de Mérignac', icon: HouseHeart, },
      { time: '13h30', title: 'Vin d\'honneur', icon: Wine,},
      { time: '18h00', title: 'Apéro', icon: Wine, },
      { time: '20h00', title: 'Dîner', icon: UtensilsCrossed, description: 'Dîner du mariage' },
      { time: '23h00', title: 'Soirée', icon: Music, },
    ],
  },
  {
    day: 'Samedi 22 Août',
    fullDate: '22 Août 2026',
    title: 'Journée domaine',
    description: 'Journée au domaine',
    events: [
      { time: '9h00', title: 'Petit-déjeuner', icon: Coffee, description: 'En terrasse' },
      { time: '12h00', title: 'Piscine apéro', icon: Sparkles, },
      { time: '13h30', title: 'Repas', icon: UtensilsCrossed,},
      { time: '18h00', title: 'Apéro', icon: Wine, },
      { time: '20h00', title: 'Dîner', icon: UtensilsCrossed, description: 'Dîner du mariage' },
      { time: '23h00', title: 'Soirée', icon: Music,},
    ],
  },
  {
    day: 'Dimanche 23 Août',
    fullDate: '23 Août 2026',
    title: 'Brunch & Départ',
    description: 'Dernier petit-déjeuner et départ',
    events: [
      { time: '12h00', title: 'Brunch', icon: Coffee, description: 'Café, œufs et bacon' },
      { time: '16h00', title: 'Départ', icon: Heart, description: 'Départ des invités' },
    ],
  },
];

const ProgrammeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Fonction pour passer à la carte suivante
  const nextCard = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % programmeData.length);
  };

  // Gestion du swipe
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -100) {
      // Swipe gauche -> Suivant
      nextCard();
    } else if (info.offset.x > 100) {
      // Swipe droite -> Précédent (optionnel, ici on boucle vers l'avant pour simplifier l'UX "pile")
      // Mais on peut aussi faire : setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
      nextCard(); 
    }
  };

  // Calcul pour l'effet de pile (stack)
  const getCardStyle = (index: number) => {
    // Position relative par rapport à la carte active
    const diff = (index - activeIndex + programmeData.length) % programmeData.length;
    
    // On n'affiche que les 3 premières cartes de la pile
    if (diff > 2) return { zIndex: 0, opacity: 0, scale: 0.8, y: 0 };

    return {
      zIndex: 30 - diff * 10, // 30, 20, 10
      scale: 1 - diff * 0.05, // 1, 0.95, 0.90
      y: diff * 20, // Décalage vertical: 0px, 20px, 40px
      opacity: 1 - diff * 0.3, // 1, 0.7, 0.4
    };
  };

  return (
    <section id="programme" className="py-20 bg-secondary/30 overflow-hidden min-h-[900px]"> {/* Increased min-height */}
      <div className="container mx-auto px-4 h-full flex flex-col">
        <div className="text-center mb-10">
          <p className="text-elegant text-muted-foreground mb-2">Le déroulement</p>
          <h2 className="heading-section gold-underline pb-4">Programme du Week-end</h2>
        </div>

        {/* Zone des cartes */}
        <div className="relative flex-1 flex items-center justify-center min-h-[700px] w-full max-w-md mx-auto perspective-1000"> {/* Increased container min-height */}
          <AnimatePresence initial={false} mode='popLayout'>
            {programmeData.map((day, index) => {
              const isFront = index === activeIndex;
              const style = getCardStyle(index);
              
              // On ne rend que les cartes pertinentes pour la performance
              const diff = (index - activeIndex + programmeData.length) % programmeData.length;
              if (diff > 2 && !isFront) return null;

              return (
                <motion.div
                  key={day.day}
                  className={`absolute w-full top-0 ${isFront ? 'cursor-grab active:cursor-grabbing touch-pan-y' : ''}`} // Added touch-pan-y
                  style={{
                    zIndex: style.zIndex,
                  }}
                  animate={{
                    scale: style.scale,
                    y: style.y,
                    opacity: style.opacity,
                  }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  // Animation de sortie quand on swipe (uniquement pour la carte active qui part)
                  exit={{ x: -300, opacity: 0, rotate: -20, transition: { duration: 0.2 } }}
                  onClick={isFront ? undefined : () => {
                     // Si on clique sur une carte visible derrière, on avance jusqu'à elle
                     setActiveIndex(index);
                  }}
                >
                  {/* Design de la Carte */}
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10 select-none h-[650px] flex flex-col"> {/* Height is 650px */}
                    {/* En-tête de la carte */}
                    <div className="bg-primary/5 p-5 text-center border-b border-primary/10 shrink-0">
                      <div className="inline-flex items-center gap-2 text-primary mb-1 bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold uppercase tracking-widest">
                        <CalendarDays className="w-3 h-3" />
                        {day.fullDate}
                      </div>
                      <h3 className="font-serif text-2xl text-foreground mt-2">{day.day.split(' ')[0]}</h3> {/* Slightly smaller title */}
                      <p className="text-muted-foreground text-xs italic mt-1">{day.title}</p>
                    </div>

                    {/* Contenu de la carte - No overflow-y-auto */}
                    <div className="p-4 flex-1 flex flex-col justify-center"> {/* Centered content vertically */}
                      <p className="text-center text-muted-foreground mb-6 text-sm px-4 shrink-0">
                        {day.description}
                      </p>

                      <div className="space-y-4 relative pl-2">
                         {/* Ligne verticale de temps */}
                         <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/60" />

                        {day.events.map((event, i) => (
                          <div key={i} className="flex items-start gap-4 relative z-10">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center shadow-sm">
                              <event.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="pt-2">
                              <span className="text-xs font-bold text-primary tracking-wide bg-primary/5 px-2 py-0.5 rounded">
                                {event.time}
                              </span>
                              <h4 className="font-medium text-gray-900 mt-1 text-sm">{event.title}</h4> {/* smaller text */}
                              {event.description && <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{event.description}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer de la carte (Indication) */}
                    {isFront && (
                      <div className="p-3 bg-gray-50 text-center text-xs text-muted-foreground border-t border-gray-100 flex items-center justify-center gap-2 animate-pulse shrink-0">
                        Swipez pour la suite <ChevronRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicateurs (points) */}
        <div className="flex justify-center gap-2 mt-8 z-10">
          {programmeData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-primary w-6' : 'bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
