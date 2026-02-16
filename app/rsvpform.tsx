"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Send, Heart } from 'lucide-react';
import { sendRSVPEmail } from './actions';

const days = [
  { id: 'jour1', label: 'Jeudi 20 Août'},
  { id: 'jour2', label: 'Vendredi 21 Août'},
  { id: 'jour3', label: 'Samedi 22 Août'},
  { id: 'jour4', label: 'Dimanche 23 Août'},
];

const mealOptions = [
  { value: 'viande', label: 'Viande', description: 'Magret de canard & côte de boeuf' },
  { value: 'poisson', label: 'Poisson', description: 'Bar - Daurade - Thon - Saumon' },
  { value: 'vegetarien', label: 'Végétarien', description: 'Tian de légumes' },
];

const RSVPForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<string>("");

  const handleDayChange = (dayId: string, checked: boolean) => {
    setSelectedDays((prev) =>
      checked ? [...prev, dayId] : prev.filter((id) => id !== dayId)
    );
  };

  const clientAction = async (formData: FormData) => {
    setIsSubmitting(true);
    

    selectedDays.forEach(day => formData.append('jours', day));
    if (selectedMeal) formData.append('repas', selectedMeal);

    try {
      const result = await sendRSVPEmail(formData);
      
      if (result.success) {
        toast.success('Merci pour votre réponse !', {
          description: 'Votre réponse a été envoyée par email.',
        });
        setSelectedDays([]);
        setSelectedMeal("");
        (document.getElementById("rsvp-form") as HTMLFormElement)?.reset();
      } else {
         toast.error("Erreur lors de l'envoi", {
          description: "Veuillez réessayer plus tard.",
        });
      }
    } catch (error) {
       toast.error("Erreur inattendue");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-elegant text-muted-foreground mb-2">Confirmez votre présence</p>
          <h2 className="heading-section gold-underline pb-4">Réservation</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form id="rsvp-form" action={clientAction} className="card-wedding space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-sm font-medium">
                  Prénom
                </Label>
                <Input
                  id="prenom"
                  name="prenom"
                  placeholder="Votre prénom"
                  required
                  className="bg-white/50 border-primary/20 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-sm font-medium">
                  Nom
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  className="bg-white/50 border-primary/20 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                required
                className="bg-white/50 border-primary/20 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-medium">
                Jours de présence
              </Label>
              <div className="grid gap-3">
                {days.map((day) => (
                  <label
                    key={day.id}
                    className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedDays.includes(day.id)
                        ? 'border-primary bg-primary/10'
                        : 'border-primary/10 hover:border-primary/30 bg-white/40'
                    }`}
                  >
                    <Checkbox
                      checked={selectedDays.includes(day.id)}
                      onCheckedChange={(checked) => handleDayChange(day.id, checked as boolean)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <div>
                      <span className="font-medium">{day.label}</span>
                      <span className="block text-sm text-muted-foreground">
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Meal Selection */}
            <div className="space-y-4">
              <Label className="text-sm font-medium">
                Choix du plat principal
              </Label>
              <RadioGroup
                value={selectedMeal}
                onValueChange={setSelectedMeal}
                className="grid gap-3"
              >
                {mealOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedMeal === option.value
                        ? 'border-primary bg-primary/10'
                        : 'border-primary/10 hover:border-primary/30 bg-white/50'
                    }`}
                  >
                    <RadioGroupItem value={option.value} className="text-primary" />
                    <div>
                      <span className="font-medium">{option.label}</span>
                      <span className="block text-sm text-muted-foreground">
                        {option.description}
                      </span>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Allergies */}
            <div className="space-y-2">
              <Label htmlFor="allergies" className="text-sm font-medium">
                Allergies (optionnel)
              </Label>
              <Input
                id="allergies"
                name="allergies"
                placeholder="Indiquez vos allergies..."
                className="bg-white/50 border-primary/20 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-medium tracking-wide shadow-md cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 animate-pulse" />
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Confirmer ma présence
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
