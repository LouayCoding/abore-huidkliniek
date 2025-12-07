"use client";
import { useState, useEffect } from "react";
import { syne, marcellus } from "@/lib/fonts";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const allConsent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookie-consent", JSON.stringify(allConsent));
    setShowBanner(false);
    // Here you would initialize analytics/marketing scripts
    initializeScripts(allConsent);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    initializeScripts(preferences);
  };

  const initializeScripts = (consent: typeof preferences) => {
    // Initialize Google Analytics if analytics consent given
    if (consent.analytics && typeof window !== "undefined") {
      // GA4 initialization would go here
      console.log("Analytics cookies enabled");
    }
    // Initialize marketing scripts if marketing consent given
    if (consent.marketing && typeof window !== "undefined") {
      console.log("Marketing cookies enabled");
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[101] p-4 sm:p-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white shadow-2xl border border-zinc-200 overflow-hidden">
            {!showSettings ? (
              // Main Banner
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  {/* Cookie Icon */}
                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`${marcellus.className} text-xl text-foreground mb-2`}>
                      Wij gebruiken cookies
                    </h3>
                    <p className={`${syne.className} text-sm text-zinc-600 mb-4`}>
                      Wij gebruiken cookies om uw ervaring te verbeteren, websiteverkeer te analyseren en 
                      gepersonaliseerde content te tonen. Door op "Accepteer alles" te klikken, gaat u akkoord 
                      met ons gebruik van cookies. Lees meer in ons{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">privacybeleid</a>.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={acceptAll}
                        className={`${syne.className} rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-all`}
                      >
                        Accepteer alles
                      </button>
                      <button
                        onClick={acceptNecessary}
                        className={`${syne.className} rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all`}
                      >
                        Alleen noodzakelijk
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className={`${syne.className} text-sm text-zinc-500 hover:text-primary transition-colors underline`}
                      >
                        Instellingen aanpassen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`${marcellus.className} text-xl text-foreground`}>
                    Cookie instellingen
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-zinc-400 hover:text-zinc-600 transition-colors"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-zinc-50">
                    <div className="flex-1 pr-4">
                      <h4 className={`${syne.className} font-semibold text-foreground`}>Noodzakelijke cookies</h4>
                      <p className={`${syne.className} text-sm text-zinc-600 mt-1`}>
                        Deze cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld.
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="sr-only"
                      />
                      <div className="w-11 h-6 bg-primary rounded-full cursor-not-allowed">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-zinc-200">
                    <div className="flex-1 pr-4">
                      <h4 className={`${syne.className} font-semibold text-foreground`}>Analytische cookies</h4>
                      <p className={`${syne.className} text-sm text-zinc-600 mt-1`}>
                        Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken, zodat we deze kunnen verbeteren.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className="relative"
                    >
                      <div className={`w-11 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-primary' : 'bg-zinc-300'}`}>
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences.analytics ? 'right-0.5' : 'left-0.5'}`} />
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-zinc-200">
                    <div className="flex-1 pr-4">
                      <h4 className={`${syne.className} font-semibold text-foreground`}>Marketing cookies</h4>
                      <p className={`${syne.className} text-sm text-zinc-600 mt-1`}>
                        Deze cookies worden gebruikt om advertenties relevanter te maken en om de effectiviteit van campagnes te meten.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className="relative"
                    >
                      <div className={`w-11 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-primary' : 'bg-zinc-300'}`}>
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences.marketing ? 'right-0.5' : 'left-0.5'}`} />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex gap-3">
                  <button
                    onClick={savePreferences}
                    className={`${syne.className} flex-1 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-all`}
                  >
                    Voorkeuren opslaan
                  </button>
                  <button
                    onClick={acceptAll}
                    className={`${syne.className} rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all`}
                  >
                    Accepteer alles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
