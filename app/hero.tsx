import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/cam_nico.jpg"
          alt="Mariage Camille & Nicolas"
          fill
          className="object-cover object-[center_25%]" // Focus on the top part (faces)
          priority
          quality={90}
        />
        {/* Couche sombre globale */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Dégradé pour accentuer la lisibilité en haut (navbar) et en bas */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-elegant text-2xl mb-4 opacity-0 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          Nous avons le plaisir de vous convier à notre
        </p>
        <h1 className="heading-display mb-6 opacity-0 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
          Mariage
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.6s' }}>
          <span className="w-16 h-px bg-gold-light shadow-sm" />
          <span className="font-serif text-2xl md:text-3xl tracking-widest text-shadow-sm">Camille & Nicolas</span>
          <span className="w-16 h-px bg-gold-light shadow-sm" />
        </div>
        <p className="text-lg md:text-xl font-light tracking-wide opacity-0 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.8s' }}>
          19 — 21 Août 2026
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2 backdrop-blur-[2px]">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
