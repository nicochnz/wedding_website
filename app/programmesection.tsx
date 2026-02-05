"use client";

import { useRef } from 'react';
import { MapPin, Sparkles, UtensilsCrossed, Music, Coffee, Heart, CalendarDays, Wine, House, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const programmeData = [
  {
    day: 'Jeudi 20 Août',
    fullDate: '20 Août 2026',
    title: 'Arrivée & Apéro',
    events: [
      { time: '16h00', title: 'Arrivée des proches', icon: MapPin},
      { time: '18h30', title: 'Apéro et installation', icon: Wine},
      { time: '20h30', title: 'Dîner', icon: UtensilsCrossed},
    ],
  },
  {
    day: 'Vendredi 21 Août',
    fullDate: '21 Août 2026',
    title: 'Jour du mariage',
    events: [
      { time: '9h30', title: 'Départ du domaine', icon: MapPin},
      { time: '11h00', title: 'Mairie de Mérignac', icon: House, },
      { time: '13h30', title: 'Vin d\'honneur', icon: Wine,},
      { time: '18h00', title: 'Apéro', icon: Wine, },
      { time: '20h00', title: 'Dîner', icon: UtensilsCrossed},
      { time: '23h00', title: 'Soirée', icon: Music},
    ],
  },
  {
    day: 'Samedi 22 Août',
    fullDate: '22 Août 2026',
    title: 'Journée domaine',
    events: [
      { time: '9h00', title: 'Petit-déjeuner', icon: Coffee},
      { time: '11h00', title: 'Multiples activités', icon: Sparkles, },
      { time: '13h30', title: 'Repas', icon: UtensilsCrossed,},
      { time: '18h00', title: 'Apéro', icon: Wine, },
      { time: '20h00', title: 'Dîner', icon: UtensilsCrossed},
      { time: '23h00', title: 'Soirée', icon: Music},
    ],
  },
  {
    day: 'Dimanche 23 Août',
    fullDate: '23 Août 2026',
    title: 'Brunch & Départ',
    events: [
      { time: '12h00', title: 'Brunch', icon: Coffee},
      { time: '16h00', title: 'Départ', icon: Heart},
    ],
  },
];

const ProgrammeSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Largeur approximative d'une carte + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="programme" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-elegant text-muted-foreground mb-2">Le déroulement</p>
          <h2 className="heading-section gold-underline pb-4 md:text-4xl text-3xl">Programme du Week-end</h2>
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white/60 backdrop-blur-md border border-primary/20 rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center text-sm text-muted-foreground leading-relaxed text-center md:text-left">
            <div className="shrink-0 p-3 bg-primary/10 rounded-full text-primary">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="mb-2 text-left">
                <span className="font-medium text-foreground">Activités & Détente :</span> Dans le domaine, profitez de la piscine, du spa, du terrain de pétanque, du ping-pong, du baby-foot, du terrain de beach-volley, des jeux de société, etc.
              </p>
              <p className="text-left ">
                <span className="font-medium text-foreground">À ne pas oublier :</span> Vos lunettes de soleil, maillot de bain, bouteille d&apos;eau et tenue de sport !
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto group">
          {/* Boutons de navigation (visibles sur desktop au survol) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 p-2 rounded-full shadow-lg border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 p-2 rounded-full shadow-lg border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 
             Carrousel unifié avec scrollbar cachée
          */}
          <div 
            ref={scrollContainerRef}
            className="
              flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-4 gap-6 snap-x snap-mandatory
              no-scrollbar /* Utilisation de notre classe personnalisée */
            "
          >
            {programmeData.map((day, index) => (
              <div 
                key={index} 
                className="snap-center shrink-0 w-[85vw] md:w-[320px] h-[550px]"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-primary/10 overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300">
                  
                  {/* En-tête de la carte */}
                  <div className="bg-primary/5 p-6 text-center border-b border-primary/10 shrink-0">
                    <div className="inline-flex items-center gap-2 text-primary mb-3 bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold uppercase tracking-widest mx-auto">
                      <CalendarDays className="w-3 h-3" />
                      {day.fullDate}
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">{day.day.split(' ')[0]}</h3>
                    <p className="text-muted-foreground text-sm italic mt-1">{day.title}</p>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-6 flex-1 flex flex-col overflow-y-auto no-scrollbar"> {/* Scrollbar cachée ici aussi */}
                    <div className="space-y-6 relative pl-2">
                       {/* Ligne verticale de temps */}
                       <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/60" />

                      {day.events.map((event, i) => (
                        <div key={i} className="flex items-start gap-4 relative z-10">
                          <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center shadow-sm">
                            <event.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="pt-1">
                            <span className="text-[10px] font-bold text-primary tracking-wide bg-primary/5 px-2 py-0.5 rounded uppercase">
                              {event.time}
                            </span>
                            <h4 className="font-medium text-gray-900 mt-1 text-sm">{event.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
