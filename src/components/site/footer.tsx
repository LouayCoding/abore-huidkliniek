"use client";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import Link from "next/link";
import { siteConfig, footerNavigation } from "@/data/site-config";
import { getFormattedPhone, getWhatsAppUrl, getFullAddress } from "@/lib/env";

export function Footer() {
  return (
    <footer className="bg-black">
      <Container className="py-16 sm:py-20">
        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand - Larger Column */}
          <div className="lg:col-span-4">
            <Link href="/" className={`${marcellus.className} text-3xl text-white`}>
              Aboré
            </Link>
            <p className={`${outfit.className} text-sm text-zinc-300 mt-4 leading-relaxed`}>
              Luxe laser- en huidkliniek in Rijswijk. Persoonlijke zorg met premium CE-gecertificeerde apparatuur.
            </p>
            
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a 
                href={siteConfig.social.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={getWhatsAppUrl()} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className={`${outfit.className} text-sm font-medium uppercase tracking-wider text-primary mb-4`}>
              Pagina's
            </h4>
            <nav className={`${outfit.className} flex flex-col gap-2.5 text-sm`}>
              <Link href="/" className="text-zinc-300 hover:text-primary transition-colors">Home</Link>
              <Link href="/over-ons" className="text-zinc-300 hover:text-primary transition-colors">Over ons</Link>
              <Link href="/behandelingen" className="text-zinc-300 hover:text-primary transition-colors">Behandelingen</Link>
              <Link href="/galerij" className="text-zinc-300 hover:text-primary transition-colors">Galerij</Link>
              <Link href="/contact" className="text-zinc-300 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Behandelingen */}
          <div className="lg:col-span-3">
            <h4 className={`${outfit.className} text-sm font-medium uppercase tracking-wider text-primary mb-4`}>
              Behandelingen
            </h4>
            <nav className={`${outfit.className} flex flex-col gap-2.5 text-sm`}>
              <Link href="/behandelingen/laserontharing" className="text-zinc-300 hover:text-primary transition-colors">Laserontharing</Link>
              <Link href="/behandelingen/acne-rosacea" className="text-zinc-300 hover:text-primary transition-colors">Acne & Rosacea</Link>
              <Link href="/behandelingen/pigmentbehandeling" className="text-zinc-300 hover:text-primary transition-colors">Pigmentbehandeling</Link>
              <Link href="/behandelingen/huidverjonging" className="text-zinc-300 hover:text-primary transition-colors">Huidverjonging</Link>
              <Link href="/behandelingen/haargroeitherapie" className="text-zinc-300 hover:text-primary transition-colors">Haargroeitherapie</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className={`${outfit.className} text-sm font-medium uppercase tracking-wider text-primary mb-4`}>
              Contact
            </h4>
            <div className={`${outfit.className} text-sm text-zinc-300 space-y-2.5`}>
              <p>Waldhoornplein 14</p>
              <p>2287 EA Rijswijk</p>
              <a href="tel:+31634533358" className="block hover:text-primary transition-colors">
                +31 6 34 53 33 58
              </a>
              <a href="mailto:info@huidkliniekabore.nl" className="block hover:text-primary transition-colors">
                info@huidkliniekabore.nl
              </a>
              <p className="pt-2 text-zinc-400">Di - Za: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="bg-zinc-900">
        <Container className="py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className={`${outfit.className} text-xs text-zinc-400`}>
              © {new Date().getFullYear()} Aboré Huidkliniek
            </p>
            <nav className={`${outfit.className} flex flex-wrap gap-6 text-xs text-zinc-400`}>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}
