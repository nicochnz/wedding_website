import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Programme', href: '#programme' },
  { label: 'Menu', href: '#menu' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Paiement', href: '#paiement' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Petite latence pour laisser le menu se fermer
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between md:justify-center">
            
            {/* Logo Mobile (Visible uniquement si menu fermé) */}
            <div className={`md:hidden font-serif text-xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              C & N
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 md:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`nav-link-wedding transition-colors ${
                    isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-gold-light'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Burger Button */}
            <button
              className={`md:hidden relative z-50 p-2 -mr-2 transition-colors ${
                isMenuOpen 
                  ? 'text-foreground' // Bouton noir quand menu ouvert
                  : isScrolled ? 'text-foreground' : 'text-white' // Sinon dépend du scroll
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Plein écran) */}
      <div 
        className={`fixed inset-0 z-40 bg-background md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-serif text-3xl text-foreground hover:text-primary transition-colors transform hover:scale-105 active:scale-95"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {link.label}
            </a>
          ))}
          
          <div className="mt-8 text-sm text-muted-foreground font-light">
            19 — 21 Août 2026
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
