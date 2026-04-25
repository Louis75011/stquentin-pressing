import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, Check } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'sending' | 'sent'>(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar hiding logic on scroll down, reappearing on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus(null), 3000); // Reset after 3 seconds
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-brand-red selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        } ${isScrolled ? 'bg-brand-blue shadow-lg py-3' : 'bg-brand-blue py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight">Linge-Box</span>
              <span className="text-brand-red text-xs font-semibold tracking-wider uppercase">by Premium Pressing</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex gap-5 text-sm font-medium text-white/90">
                <a href="#comment-ca-marche" className="hover:text-brand-red transition-colors">Comment ça marche</a>
                <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
              </div>
              <a href="#contact" className="bg-brand-red hover:scale-105 text-white font-bold px-5 py-2 rounded-full transition-all text-sm shadow-md">
                Demander une démo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-blue border-t border-brand-red absolute top-full left-0 right-0 shadow-xl">
            <div className="px-4 py-4 flex flex-col gap-4">
              <a 
                href="#comment-ca-marche" 
                className="text-white hover:text-brand-red transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-brand-red transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="bg-brand-red text-white font-bold px-4 py-3 rounded-md transition-colors text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander une démo
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20 bg-brand-blue"></div>

      {/* 2. HERO */}
      <section className="bg-brand-blue py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Column (60%) */}
            <div className="w-full lg:w-3/5 space-y-8 z-10 text-center lg:text-left">
              <div className="inline-block bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 w-fit">
                Conciergerie pressing B2B · Agglo SQY
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                Votre pressing, livré dans votre entreprise. <br className="hidden lg:block"/><span className="text-brand-red">24h/24.</span>
              </h1>
              
              <p className="text-brand-grey text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
                Installez une Linge-Box dans vos locaux et offrez à vos collaborateurs un service pressing premium, sans déplacement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a 
                  href="#contact" 
                  className="bg-brand-red text-white px-6 py-3 rounded-md font-bold text-sm shadow-lg shadow-brand-red/20 hover:scale-105 transition-all text-center"
                >
                  Demander une installation
                </a>
                <a 
                  href="#comment-ca-marche" 
                  className="border border-brand-grey text-brand-grey px-6 py-3 rounded-md font-bold text-sm hover:bg-white/10 transition-colors text-center"
                >
                  Voir comment ça marche
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-[10px] sm:text-xs text-brand-grey font-medium">
                <span>✓ Zéro contrainte RH</span>
                <span>✓ Installation offerte</span>
                <span>✓ Facturation mensuelle</span>
              </div>
            </div>

            {/* Right Column (40%) */}
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center mt-8 lg:mt-0 z-10">
              <div className="relative">
                <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-[3px] border-brand-red overflow-hidden relative z-10 bg-white">
                  <img 
                    src="https://i.ibb.co/27yZxds8/stephane-fialip.jpg" 
                    alt="Stéphane Fialip" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-blue px-4 py-1.5 text-center whitespace-nowrap border border-white/20 rounded-md z-20 shadow-lg">
                  <div className="text-white font-bold text-xs sm:text-sm">Stéphane Fialip</div>
                  <div className="text-brand-red text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">Fondateur - Premium Pressing</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. BRAND ANCHOR */}
      <section className="bg-white py-10 border-b border-brand-grey">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <img 
            src="https://i.ibb.co/nN6RyTnx/premium-pressing.jpg" 
            alt="Premium Pressing Logo" 
            className="h-32 md:h-50 object-contain max-w-full"
          />
          <div className="hidden md:block w-px h-16 bg-brand-grey"></div>
          <p className="text-brand-blue font-medium text-sm md:text-base">
            15 ans d'expertise pressing<br/>
            <span className="text-brand-red font-bold">Voisins-le-Bretonneux (78)</span>
          </p>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="comment-ca-marche" className="bg-bg-light py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-brand-blue border-b-2 border-brand-red pb-1 shrink-0">
              Comment ça marche ?
            </h2>
            <div className="hidden sm:block h-[1px] flex-1 bg-brand-grey"></div>
            <img src="https://i.ibb.co/nN6RyTnx/premium-pressing.jpg" className="hidden lg:block h-12 object-contain" alt="Logo" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-brand-grey/50 hover:border-l-[3px] hover:border-l-brand-red transition-all duration-200">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-brand-blue mb-2">Je commande</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Appelez vos articles, sélectionnez vos options sur mobile ou PC en quelques clics rapides.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-brand-grey/50 hover:border-l-[3px] hover:border-l-brand-red transition-all duration-200">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-brand-blue mb-2">Je dépose</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Verrouillez votre consigne avec un code à 4 chiffres personnalisé de votre choix.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-brand-grey/50 hover:border-l-[3px] hover:border-l-brand-red transition-all duration-200">
              <div className="text-3xl mb-4">📬</div>
              <h3 className="text-lg font-bold text-brand-blue mb-2">Je récupère</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Recevez un SMS avec votre numéro de casier et numéro de suivi dès que c'est prêt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-10 rounded-xl border border-brand-grey shadow-md max-w-5xl mx-auto">
            <h3 className="font-bold text-lg md:text-xl text-brand-blue mb-8 flex items-center gap-3">
              <span className="w-2 h-6 bg-brand-red"></span>
              Nos services pour vos collaborateurs
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {[
                { icon: '👔', label: 'Pressing' },
                { icon: '🧺', label: 'Chemises & repassage' },
                { icon: '🛏️', label: 'Draps & couettes' },
                { icon: '🪡', label: 'Couture' },
                { icon: '👞', label: 'Cordonnerie' },
                { icon: '🧥', label: 'Cuir & daim' },
                { icon: '🧶', label: 'Tapis & rideaux' },
                { icon: '🍃', label: 'Lessive écologique' },
                { icon: '✨', label: 'Désinfection' },
              ].map((service, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 text-sm md:text-base font-medium text-brand-blue/90 hover:text-brand-red transition-colors p-2"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span>{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CURRENT OFFER BANNER */}
      <section className="bg-bg-light py-16 text-center border-y border-brand-grey flex flex-col items-center justify-center">
        <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-4">Offre en cours</span>
        <img 
          src="https://i.ibb.co/pSX73qV/image.png" 
          alt="Offre du moment - Premium Pressing" 
          className="w-full max-w-[320px] md:max-w-[400px] rounded-lg shadow-sm border mb-6 border-white"
        />
        <a 
          href="#contact" 
          className="bg-brand-red text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-tighter hover:scale-105 hover:bg-red-800 transition-all shadow-md"
        >
          Profiter de l'offre
        </a>
      </section>

      {/* 7. WHY LINGE-BOX */}
      <section className="bg-dark py-20 lg:py-24 text-white border-t-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-brand-red border-b-2 border-brand-red pb-1 shrink-0">
              Pourquoi choisir Linge-Box ?
            </h2>
            <div className="hidden md:block h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg hover:border-brand-red/50 transition-colors duration-200">
              <div className="text-2xl mb-4 text-brand-red">🔧</div>
              <h3 className="text-lg font-bold mb-2">Installation sans travaux</h3>
              <p className="text-sm text-brand-grey leading-relaxed">
                Posée dans un espace commun existant. Aucun aménagement structurel requis, juste une simple prise standard.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg hover:border-brand-red/50 transition-colors duration-200">
              <div className="text-2xl mb-4 text-brand-red">🎯</div>
              <h3 className="text-lg font-bold mb-2">Service clé en main</h3>
              <p className="text-sm text-brand-grey leading-relaxed">
                Logistique, collecte, livraison et SAV : nous gérons tout. Vous et votre équipe RH ne gérez rien.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg hover:border-brand-red/50 transition-colors duration-200">
              <div className="text-2xl mb-4 text-brand-red">🧾</div>
              <h3 className="text-lg font-bold mb-2">Facturation mensuelle</h3>
              <p className="text-sm text-brand-grey leading-relaxed">
                Une facture claire, regroupée et mensuelle par entreprise. Pas d'avance de frais pour vos collaborateurs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg hover:border-brand-red/50 transition-colors duration-200">
              <div className="text-2xl mb-4 text-brand-red">⏰</div>
              <h3 className="text-lg font-bold mb-2">Disponible 24h/24</h3>
              <p className="text-sm text-brand-grey leading-relaxed">
                Dépôt et retrait à toute heure via les casiers connectés, sans file d'attente ni contrainte d'horaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section id="contact" className="bg-dark py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 text-white">
            
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <h4 className="text-brand-red font-bold text-lg mb-6">Nous contacter</h4>
              <p className="text-sm text-brand-grey leading-relaxed mb-6">
                Prêt à simplifier le quotidien de vos équipes ? Demandez une démonstration sans engagement.
              </p>
              
              <div className="space-y-4 text-sm mb-8 font-medium">
                <div className="flex items-center gap-3 text-brand-grey">
                  <span className="text-xl">📞</span> 
                  <span>07 60 31 24 24</span>
                </div>
                <div className="flex items-center gap-3 text-brand-grey">
                  <span className="text-xl">✉</span> 
                  <span className="break-all">premiumpressing.voisins@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-brand-grey">
                  <span className="text-xl">📍</span> 
                  <span>Rue aux Fleurs, 78960 Voisins-le-Bretonneux</span>
                </div>
              </div>
            </div>

            {/* Right Column / Form */}
            <div className="w-full md:w-1/2">
              <form className="grid grid-cols-1 gap-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    id="prenom" 
                    required
                    className="bg-white/10 border border-white/20 rounded p-3 text-sm outline-none focus:border-brand-red transition-colors text-white placeholder:text-gray-400 w-full"
                    placeholder="Nom complet"
                  />
                  <input 
                    type="text" 
                    id="entreprise" 
                    required
                    className="bg-white/10 border border-white/20 rounded p-3 text-sm outline-none focus:border-brand-red transition-colors text-white placeholder:text-gray-400 w-full"
                    placeholder="Entreprise"
                  />
                </div>

                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-white/10 border border-white/20 rounded p-3 text-sm outline-none focus:border-brand-red transition-colors text-white placeholder:text-gray-400 w-full"
                  placeholder="Email professionnel"
                />

                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="bg-white/10 border border-white/20 rounded p-3 text-sm outline-none focus:border-brand-red transition-colors text-white placeholder:text-gray-400 w-full resize-none"
                  placeholder="Votre projet d'installation..."
                ></textarea>

                <button 
                  type="submit" 
                  disabled={formStatus !== null}
                  className={`w-full font-bold text-sm py-3 rounded transition-all flex justify-center items-center cursor-pointer ${
                    formStatus === 'sent' 
                      ? 'bg-green-600 text-white' 
                      : formStatus === 'sending'
                      ? 'bg-brand-red opacity-70 text-white cursor-wait'
                      : 'bg-brand-red text-white hover:bg-red-800 hover:scale-[1.02]'
                  }`}
                >
                  {formStatus === 'sent' ? (
                    <span className="flex items-center gap-2"><Check size={16} /> Demande envoyée</span>
                  ) : formStatus === 'sending' ? (
                    'Envoi...'
                  ) : (
                    'Envoyer la demande'
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-brand-blue border-t border-brand-red py-6 text-[10px] md:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-brand-grey">
            
            <div className="text-center md:text-left">
              © 2026 Premium Pressing · Voisins-le-Bretonneux (78)
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>

            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors cursor-pointer"><Facebook size={16}/></a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors cursor-pointer"><Instagram size={16}/></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors cursor-pointer"><Linkedin size={16}/></a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
