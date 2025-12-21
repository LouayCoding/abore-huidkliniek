"use client";
import { useState, useCallback } from "react";
import { Container } from "@/components/ui";
import { outfit, marcellus } from "@/lib/fonts";
import { siteConfig, mainNavigation } from "@/data/site-config";
import { useBodyScrollLock, useEscapeKey } from "@/hooks/useFocusTrap";
import { getFormattedPhone, getWhatsAppUrl } from "@/lib/env";

interface HeaderProps {
  variant?: "transparent" | "light";
}

export function HeaderTransparent({ variant = "transparent" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const isLight = variant === "light";

  const closeMenu = useCallback(() => setOpen(false), []);

  // Use hooks for accessibility
  useBodyScrollLock(open);
  useEscapeKey(open, closeMenu);
  return (
    <div className="absolute left-0 right-0 top-0 z-20">
      <Container className="py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className={`${marcellus.className} text-2xl ${isLight ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/90'} transition-colors z-50 relative`}>
            Aboré
          </a>

          {/* Desktop Navigation */}
          <nav className={`${outfit.className} hidden items-center gap-8 lg:flex`}>
            <a href="/over-ons" className={`${isLight ? 'text-zinc-600 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors text-sm`}>
              Over ons
            </a>
            <a href="/behandelingen" className={`${isLight ? 'text-zinc-600 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors text-sm`}>
              Behandelingen
            </a>
            <a href="/galerij" className={`${isLight ? 'text-zinc-600 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors text-sm`}>
              Galerij
            </a>
            <a href="/contact" className={`${isLight ? 'text-zinc-600 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors text-sm`}>
              Contact
            </a>
            <a
              href="https://abor.boekingapp.nl/"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
            >
              Plan afspraak
            </a>
          </nav>

          {/* Mobile Menu Button - Luxe Hamburger */}
          <button
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`lg:hidden relative z-50 inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition-all group`}
          >
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2 bg-zinc-900' : isLight ? 'bg-zinc-700' : 'bg-white'}`}></span>
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${open ? 'opacity-0 bg-zinc-900' : isLight ? 'bg-zinc-700' : 'bg-white'}`}></span>
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2 bg-zinc-900' : isLight ? 'bg-zinc-700' : 'bg-white'}`}></span>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay - Clean Design */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/95 backdrop-blur-md transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Menu Content */}
        <div 
          className={`relative h-full flex flex-col justify-between p-8 pt-24 transition-all duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-all"
            aria-label="Sluit menu"
          >
            <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className={`${outfit.className} relative z-10 flex flex-col gap-2`}>
            <a 
              href="/over-ons" 
              onClick={() => setOpen(false)} 
              className={`group px-6 py-4 text-zinc-700 hover:text-primary text-lg font-light border-b border-zinc-200 hover:border-primary transition-all ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: open ? '100ms' : '0ms' }}
            >
              <span className="flex items-center justify-between">
                Over ons
                <svg className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="/behandelingen" 
              onClick={() => setOpen(false)} 
              className={`group px-6 py-4 text-zinc-700 hover:text-primary text-lg font-light border-b border-zinc-200 hover:border-primary transition-all ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: open ? '150ms' : '0ms' }}
            >
              <span className="flex items-center justify-between">
                Behandelingen
                <svg className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="/galerij" 
              onClick={() => setOpen(false)} 
              className={`group px-6 py-4 text-zinc-700 hover:text-primary text-lg font-light border-b border-zinc-200 hover:border-primary transition-all ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: open ? '200ms' : '0ms' }}
            >
              <span className="flex items-center justify-between">
                Galerij
                <svg className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className={`group px-6 py-4 text-zinc-700 hover:text-primary text-lg font-light border-b border-zinc-200 hover:border-primary transition-all ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: open ? '250ms' : '0ms' }}
            >
              <span className="flex items-center justify-between">
                Contact
                <svg className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </nav>

          {/* Bottom Section */}
          <div className={`relative z-10 space-y-6 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: open ? '300ms' : '0ms' }}>
            {/* CTA Button */}
            <a
              href="https://abor.boekingapp.nl/"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-primary px-8 py-4 text-center text-lg font-medium text-white hover:bg-primary-hover transition-all"
            >
              Plan gratis consult
            </a>

            {/* Contact Info */}
            <div className={`${outfit.className} space-y-3`}>
              <a href="tel:+31634533358" className="flex items-center justify-center gap-3 text-zinc-600 hover:text-primary transition-colors text-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +31 6 34 53 33 58
              </a>
              <a href="mailto:info@huidkliniekabore.nl" className="flex items-center justify-center gap-3 text-zinc-600 hover:text-primary transition-colors text-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@huidkliniekabore.nl
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <a 
                href="https://instagram.com/huidkliniekabore" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 hover:bg-primary transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/31634533358" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 hover:bg-primary transition-all"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
