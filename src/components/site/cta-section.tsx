"use client";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "form";
}

export function CTASection({ 
  title = "Weet je niet welke behandeling bij jouw huid past?",
  description = "Plan een gratis vrijblijvend consult van 20 minuten. We bekijken je huid, luisteren naar je wensen en stellen een persoonlijk plan op.",
  variant = "default"
}: CTASectionProps) {
  
  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-transparent border-y border-primary/20">
        <Container className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className={`${marcellus.className} text-2xl text-foreground mb-2`}>
                {title}
              </h3>
              <p className={`${syne.className} text-zinc-600`}>
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://abor.boekingapp.nl/"
                className={`${syne.className} inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-white hover:bg-primary-hover transition-all shadow-lg whitespace-nowrap`}
              >
                Plan gratis consult
              </a>
              <a
                href="https://wa.me/31634533358"
                target="_blank"
                rel="noopener noreferrer"
                className={`${syne.className} inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-primary hover:bg-primary hover:text-white transition-all whitespace-nowrap`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variant === "form") {
    return (
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Info */}
              <div>
                <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
                  {title}
                </h2>
                <p className={`${syne.className} text-lg text-zinc-600 mb-6`}>
                  {description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${syne.className} text-zinc-700`}>Gratis en vrijblijvend</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${syne.className} text-zinc-700`}>Persoonlijke huidanalyse</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${syne.className} text-zinc-700`}>Behandelplan op maat</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${syne.className} text-zinc-700`}>Direct antwoord op al je vragen</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+31634533358"
                    className={`${syne.className} inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Bel direct
                  </a>
                  <a
                    href="https://wa.me/31634533358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${syne.className} inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Right: Quick Form */}
              <div className="p-8 rounded-2xl border border-zinc-200 bg-[#faf6ea]">
                <h3 className={`${marcellus.className} text-2xl text-foreground mb-6`}>
                  Snel contact
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className={`${syne.className} block text-sm font-medium text-foreground mb-2`}>
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={`${syne.className} block text-sm font-medium text-foreground mb-2`}>
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="treatment" className={`${syne.className} block text-sm font-medium text-foreground mb-2`}>
                      Interesse in
                    </label>
                    <select
                      id="treatment"
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option>Acne behandeling</option>
                      <option>Laserontharing</option>
                      <option>Pigmentvlekken</option>
                      <option>Tatoeage verwijderen</option>
                      <option>Huidverjonging</option>
                      <option>Anders</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className={`${syne.className} w-full rounded-full bg-primary px-8 py-4 text-white hover:bg-primary-hover transition-all shadow-lg font-medium`}
                  >
                    Verstuur aanvraag
                  </button>
                  <p className={`${syne.className} text-xs text-zinc-600 text-center`}>
                    We nemen binnen 24 uur contact met je op
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Default variant
  return (
    <section className="bg-[#faf6ea]">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
            {title}
          </h2>
          <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://abor.boekingapp.nl/"
              className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20`}
            >
              Plan gratis consult
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/31634533358"
              target="_blank"
              rel="noopener noreferrer"
              className={`${syne.className} inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all`}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+31634533358"
              className={`${syne.className} inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel direct
            </a>
          </div>
          <p className={`${syne.className} text-sm text-zinc-500 mt-6`}>
            📍 Waldhoornplein 14, Rijswijk | ☎️ +31 6 34 53 33 58
          </p>
        </div>
      </Container>
    </section>
  );
}
