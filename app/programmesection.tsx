import { MapPin, Clock, Sparkles, Church, UtensilsCrossed, Music, Coffee, Heart } from 'lucide-react';

const programmeData = [
  {
    day: 'Vendredi 12 Juillet',
    title: 'Accueil des invités',
    events: [
      { time: '16h00', title: 'Arrivée et installation', icon: MapPin, description: 'Domaine de la Belle Étoile' },
      { time: '18h00', title: 'Cocktail de bienvenue', icon: Sparkles, description: 'Jardins du domaine' },
      { time: '20h00', title: 'Dîner décontracté', icon: UtensilsCrossed, description: 'Sous les étoiles' },
    ],
  },
  {
    day: 'Samedi 13 Juillet',
    title: 'Le Grand Jour',
    events: [
      { time: '15h00', title: 'Cérémonie laïque', icon: Church, description: 'Orangerie du domaine' },
      { time: '16h30', title: 'Vin d\'honneur', icon: Sparkles, description: 'Terrasse panoramique' },
      { time: '19h30', title: 'Dîner de réception', icon: UtensilsCrossed, description: 'Grande salle du château' },
      { time: '23h00', title: 'Soirée dansante', icon: Music, description: 'Jusqu\'au bout de la nuit' },
    ],
  },
  {
    day: 'Dimanche 14 Juillet',
    title: 'Brunch d\'au revoir',
    events: [
      { time: '11h00', title: 'Brunch', icon: Coffee, description: 'Petit-déjeuner gourmand' },
      { time: '14h00', title: 'Au revoir', icon: Heart, description: 'Avec plein de souvenirs' },
    ],
  },
];

const ProgrammeSection = () => {
  return (
    <section id="programme" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-elegant text-muted-foreground mb-2">Trois jours de célébration</p>
          <h2 className="heading-section gold-underline pb-4">Le Programme</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {programmeData.map((day, dayIndex) => (
              <div key={dayIndex} className="card-wedding">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs uppercase tracking-widest rounded-full mb-3">
                    {day.day}
                  </span>
                  <h3 className="font-serif text-xl">{day.title}</h3>
                </div>

                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-champagne flex items-center justify-center">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground font-medium">
                            {event.time}
                          </span>
                        </div>
                        <h4 className="font-medium text-sm mb-0.5">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
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
