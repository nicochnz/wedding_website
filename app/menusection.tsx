import { Utensils } from 'lucide-react';

const menuItems = {
  entrees: [
    'Foie gras de canard, chutney de figues',
    'Salade de homard, vinaigrette aux agrumes',
    'Velouté de butternut, éclats de noisettes',
  ],
  plats: [
    { name: 'Filet de bœuf Wellington', type: 'Viande' },
    { name: 'Saint-Jacques poêlées, risotto crémeux', type: 'Poisson' },
    { name: 'Tian de légumes, sauce vierge', type: 'Végétarien' },
  ],
  desserts: [
    'Pièce montée traditionnelle',
    'Assortiment de mignardises',
    'Fontaine de champagne',
  ],
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-elegant text-muted-foreground mb-2">Dîner de réception</p>
          <h2 className="heading-section gold-underline pb-4">Le Menu</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-wedding">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Entrées */}
              <div className="text-center">
                <h3 className="font-serif text-xl mb-4 text-primary flex items-center justify-center gap-2">
                  <span className="w-8 h-px bg-primary/30" />
                  Entrées
                  <span className="w-8 h-px bg-primary/30" />
                </h3>
                <ul className="space-y-3">
                  {menuItems.entrees.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plats */}
              <div className="text-center">
                <h3 className="font-serif text-xl mb-4 text-primary flex items-center justify-center gap-2">
                  <span className="w-8 h-px bg-primary/30" />
                  Plats
                  <span className="w-8 h-px bg-primary/30" />
                </h3>
                <ul className="space-y-3">
                  {menuItems.plats.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      <span className="block">{item.name}</span>
                      <span className="text-xs text-primary/70 font-medium uppercase tracking-wider">
                        {item.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desserts */}
              <div className="text-center">
                <h3 className="font-serif text-xl mb-4 text-primary flex items-center justify-center gap-2">
                  <span className="w-8 h-px bg-primary/30" />
                  Desserts
                  <span className="w-8 h-px bg-primary/30" />
                </h3>
                <ul className="space-y-3">
                  {menuItems.desserts.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Utensils className="w-4 h-4 text-primary" />
                <span className="text-sm italic">
                  Merci de nous indiquer votre préférence de plat dans le formulaire ci-dessous
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
