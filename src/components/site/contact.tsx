"use client";
import { Container, Button } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { Reveal } from "@/components/animations/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <Container className="py-20 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Reveal>
              <h2 className={`${marcellus.className} text-3xl sm:text-4xl tracking-wide text-foreground`}>Neem contact op voor een afspraak of advies</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`${outfit.className} mt-4 text-zinc-700`}>Wij staan klaar om je te helpen met persoonlijk advies en professionele zorg.</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Contact Info */}
            <Reveal>
              <div className="rounded-md border border-border bg-white p-8">
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-6`}>Contactgegevens</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>Telefoon</p>
                      <a href="tel:+31612345678" className={`${outfit.className} text-zinc-900 hover:text-primary`}>+31 6 1234 5678</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>Email</p>
                      <a href="mailto:info@abore.nl" className={`${outfit.className} text-zinc-900 hover:text-primary`}>info@abore.nl</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>Adres</p>
                      <p className={`${outfit.className} text-zinc-900`}>Voorbeeldstraat 123</p>
                      <p className={`${outfit.className} text-zinc-900`}>1234 AB Amsterdam</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Opening Hours */}
            <Reveal delay={0.1}>
              <div className="rounded-md border border-border bg-white p-8">
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-6`}>Openingstijden</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Maandag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Dinsdag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Woensdag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Donderdag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Vrijdag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Zaterdag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${outfit.className} text-zinc-700`}>Zondag</span>
                    <span className={`${outfit.className} text-zinc-900 font-medium`}>Gesloten</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button href="https://abor.boekingapp.nl/" className={`${outfit.className} w-full h-12 rounded-full bg-primary text-white hover:bg-primary-hover`}>
                    Plan direct een afspraak
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
