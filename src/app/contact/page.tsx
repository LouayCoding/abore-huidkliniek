"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    behandeling: "",
    bericht: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero parallax
    if (heroRef.current) {
      const heroImage = heroRef.current.querySelector(".hero-bg");
      gsap.to(heroImage, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero text animation
      const heroContent = heroRef.current.querySelector(".hero-content");
      gsap.fromTo(
        heroContent?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }

    // Content animations
    if (contentRef.current) {
      const leftCol = contentRef.current.querySelector(".left-col");
      const rightCol = contentRef.current.querySelector(".right-col");

      gsap.fromTo(
        leftCol,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        rightCol,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
        }
      );
    }

    // Map section animation
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current.querySelector(".map-title"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        mapRef.current.querySelector(".map-container"),
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 75%" },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <HeaderTransparent />
      
      {/* Hero with Background Image */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 scale-110">
          <Image 
            src="/hero/7.jpg" 
            alt="Contact Aboré" 
            fill 
            priority
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
        
        <Container className="relative z-10 text-center py-20">
          <div className="hero-content">
            <p className={`${outfit.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
              Contact
            </p>
            <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
              Neem contact op
            </h1>
            <p className={`${outfit.className} text-lg text-white/80 max-w-xl mx-auto`}>
              We staan klaar om al je vragen te beantwoorden
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div ref={contentRef} className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16">
              
              {/* Left: Contact Info */}
              <div className="left-col lg:col-span-2 space-y-10">
                {/* Direct Contact */}
                <div>
                  <h2 className={`${marcellus.className} text-2xl text-foreground mb-6`}>
                    Direct contact
                  </h2>
                  <div className="space-y-4">
                    <a 
                      href="tel:+31634533358" 
                      className={`${outfit.className} flex items-center gap-3 text-zinc-600 hover:text-primary transition-colors`}
                    >
                      <span className="text-primary">Tel</span>
                      +31 6 34 53 33 58
                    </a>
                    <a 
                      href="mailto:info@huidkliniekabore.nl" 
                      className={`${outfit.className} flex items-center gap-3 text-zinc-600 hover:text-primary transition-colors`}
                    >
                      <span className="text-primary">Mail</span>
                      info@huidkliniekabore.nl
                    </a>
                    <a 
                      href="https://wa.me/31634533358" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${outfit.className} flex items-center gap-3 text-zinc-600 hover:text-primary transition-colors`}
                    >
                      <span className="text-primary">WhatsApp</span>
                      Stuur een bericht
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h2 className={`${marcellus.className} text-2xl text-foreground mb-6`}>
                    Bezoek ons
                  </h2>
                  <div className={`${outfit.className} text-zinc-600 space-y-1`}>
                    <p>Waldhoornplein 14</p>
                    <p>2287 EA Rijswijk</p>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h2 className={`${marcellus.className} text-2xl text-foreground mb-6`}>
                    Openingstijden
                  </h2>
                  <div className={`${outfit.className} text-zinc-600 space-y-2`}>
                    <div className="flex justify-between">
                      <span>Dinsdag - Zaterdag</span>
                      <span>10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Maandag & Zondag</span>
                      <span>Gesloten</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a
                    href="https://abor.boekingapp.nl/"
                    className={`${outfit.className} inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-white hover:bg-primary-hover hover:scale-105 transition-all duration-300`}
                  >
                    Direct afspraak maken
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="right-col lg:col-span-3">
                <div className="bg-[#faf6ea] rounded-2xl p-8 sm:p-10">
                  <h2 className={`${marcellus.className} text-2xl text-foreground mb-2`}>
                    Stuur een bericht
                  </h2>
                  <p className={`${outfit.className} text-zinc-600 mb-8`}>
                    We reageren binnen 24 uur
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className={`${marcellus.className} text-2xl text-foreground mb-2`}>
                        Bericht verzonden
                      </h3>
                      <p className={`${outfit.className} text-zinc-600`}>
                        We nemen zo snel mogelijk contact met je op.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="naam" className={`${outfit.className} block text-sm text-foreground mb-2`}>
                          Naam
                        </label>
                        <input
                          type="text"
                          id="naam"
                          required
                          value={formData.naam}
                          onChange={(e) => setFormData({...formData, naam: e.target.value})}
                          className={`${outfit.className} w-full bg-white border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20`}
                          placeholder="Je naam"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className={`${outfit.className} block text-sm text-foreground mb-2`}>
                            E-mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={`${outfit.className} w-full bg-white border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20`}
                            placeholder="je@email.nl"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefoon" className={`${outfit.className} block text-sm text-foreground mb-2`}>
                            Telefoon
                          </label>
                          <input
                            type="tel"
                            id="telefoon"
                            value={formData.telefoon}
                            onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                            className={`${outfit.className} w-full bg-white border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20`}
                            placeholder="06 12345678"
                          />
                        </div>
                      </div>

                      {/* Treatment */}
                      <div>
                        <label htmlFor="behandeling" className={`${outfit.className} block text-sm text-foreground mb-2`}>
                          Interesse in
                        </label>
                        <select
                          id="behandeling"
                          value={formData.behandeling}
                          onChange={(e) => setFormData({...formData, behandeling: e.target.value})}
                          className={`${outfit.className} w-full bg-white border-0 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20`}
                        >
                          <option value="">Selecteer een behandeling</option>
                          <option value="laserontharing">Laserontharing</option>
                          <option value="acne">Acne & Rosacea</option>
                          <option value="pigment">Pigmentbehandeling</option>
                          <option value="huidverjonging">Huidverjonging</option>
                          <option value="lichaam">Lichaamsbehandelingen</option>
                          <option value="haargroei">Haargroeitherapie</option>
                          <option value="anders">Anders / Weet ik nog niet</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="bericht" className={`${outfit.className} block text-sm text-foreground mb-2`}>
                          Bericht
                        </label>
                        <textarea
                          id="bericht"
                          rows={4}
                          value={formData.bericht}
                          onChange={(e) => setFormData({...formData, bericht: e.target.value})}
                          className={`${outfit.className} w-full bg-white border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none`}
                          placeholder="Waar kunnen we je mee helpen?"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${outfit.className} w-full rounded-lg bg-foreground px-8 py-4 text-white hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                      </button>

                      <p className={`${outfit.className} text-xs text-zinc-500 text-center`}>
                        Of bel direct: <a href="tel:+31634533358" className="text-primary hover:underline">+31 6 34 53 33 58</a>
                      </p>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps Section */}
      <section ref={mapRef} className="bg-[#faf6ea]">
        <Container className="py-16 sm:py-20">
          <div className="map-title text-center mb-10">
            <p className={`${outfit.className} text-sm font-medium uppercase tracking-widest text-primary mb-4`}>
              Locatie
            </p>
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
              Bezoek onze kliniek
            </h2>
            <p className={`${outfit.className} text-zinc-600`}>
              Waldhoornplein 14, 2287 EA Rijswijk
            </p>
          </div>
          
          {/* Map Container */}
          <div className="map-container relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.8876543210987!2d4.3234567890123456!3d52.0123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b12345678901%3A0x1234567890abcdef!2sWaldhoornplein%2014%2C%202287%20EA%20Rijswijk!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-white rounded-xl p-6 shadow-lg">
              <h3 className={`${marcellus.className} text-xl text-foreground mb-2`}>
                Aboré Huidkliniek
              </h3>
              <p className={`${outfit.className} text-sm text-zinc-600 mb-4`}>
                Waldhoornplein 14<br />
                2287 EA Rijswijk
              </p>
              <div className="flex gap-3">
                <a
                  href="https://maps.google.com/?q=Waldhoornplein+14+Rijswijk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${outfit.className} inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-white hover:bg-primary-hover transition-all`}
                >
                  Route plannen
                </a>
                <a
                  href="tel:+31634533358"
                  className={`${outfit.className} inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm text-foreground hover:border-primary transition-all`}
                >
                  Bellen
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
