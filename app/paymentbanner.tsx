import { Button } from '@/components/ui/button';
import { Download, Gift } from 'lucide-react';

const PaymentBanner = () => {
  const handleDownloadRIB = () => {
    // Create a dummy RIB file for demo purposes
    const ribContent = `
RELEVÉ D'IDENTITÉ BANCAIRE (RIB)
================================

Titulaire du compte: Camille & Nicolas CHICHE

Banque: Boursobank
Code Banque: 40618
Code Guichet: 80443
Numéro de compte: 00040761947
Clé RIB: 51

IBAN: FR76 4061 8804 4300 0407 6194 751
BIC: BOUS FRPP XXX

================================
Merci de votre présence !
    `.trim();

    const blob = new Blob([ribContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RIB-Mariage-Camille-Nicolas.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="paiement" className="banner-ribbon">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Réservation des chambres ou des tentes
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
           Comme indiqué sur le faire part, vous pouvez procéder à la réservation de vos chambres ou tentes dès maintenant.
          </p>

          <div className="divider-ornament">
            <span className="text-primary">✦</span>
          </div>

          <Button
            onClick={handleDownloadRIB}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 cursor-pointer"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger le RIB
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentBanner;
