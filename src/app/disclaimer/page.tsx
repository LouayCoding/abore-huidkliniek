import { Metadata } from "next";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Disclaimer | Aboré Huidkliniek Rijswijk",
  description: "Lees onze disclaimer voor het gebruik van de website van Aboré Huidkliniek.",
};

export default function DisclaimerPage() {
  return (
    <>
      <HeaderTransparent variant="light" />
      
      {/* Hero */}
      <section className="bg-[#faf6ea] pt-32 pb-16">
        <Container>
          <h1 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground text-center`}>
            Disclaimer
          </h1>
          <p className={`${syne.className} text-zinc-600 text-center mt-4`}>
            Laatst bijgewerkt: December 2024
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className={`${syne.className} prose prose-lg max-w-4xl mx-auto text-zinc-700`}>
            
            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Algemeen
            </h2>
            <p>
              De informatie op deze website is met de grootste zorg samengesteld door Aboré Laser- & 
              Huidkliniek. Desondanks kan het voorkomen dat informatie onvolledig of onjuist is. 
              Aan de informatie op deze website kunnen geen rechten worden ontleend.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Medische informatie
            </h2>
            <p>
              De informatie op deze website is uitsluitend bedoeld ter algemene informatie en is 
              geen vervanging voor professioneel medisch advies. Raadpleeg altijd een gekwalificeerde 
              zorgverlener voor vragen over uw gezondheid of voordat u een behandeling ondergaat.
            </p>
            <p>
              De resultaten van behandelingen kunnen per persoon verschillen. Foto's en beschrijvingen 
              van behandelresultaten zijn illustratief en bieden geen garantie voor individuele resultaten.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Aansprakelijkheid
            </h2>
            <p>
              Aboré Laser- & Huidkliniek aanvaardt geen aansprakelijkheid voor:
            </p>
            <ul>
              <li>Schade als gevolg van het gebruik van informatie op deze website</li>
              <li>Schade als gevolg van onbereikbaarheid van de website</li>
              <li>Schade als gevolg van virussen of andere schadelijke componenten</li>
              <li>Schade als gevolg van onjuiste of onvolledige informatie</li>
              <li>Schade als gevolg van het gebruik van links naar externe websites</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Externe links
            </h2>
            <p>
              Deze website kan links bevatten naar externe websites. Aboré heeft geen controle over 
              de inhoud van deze websites en is niet verantwoordelijk voor de inhoud, het privacybeleid 
              of de praktijken van externe websites.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Intellectueel eigendom
            </h2>
            <p>
              Alle content op deze website, waaronder teksten, afbeeldingen, logo's, grafisch ontwerp, 
              foto's en video's, is eigendom van Aboré Laser- & Huidkliniek of wordt gebruikt met 
              toestemming van de rechthebbende.
            </p>
            <p>
              Het is niet toegestaan om zonder schriftelijke toestemming van Aboré:
            </p>
            <ul>
              <li>Content van deze website te kopiëren of te reproduceren</li>
              <li>Content te verspreiden of openbaar te maken</li>
              <li>Content te wijzigen of te bewerken</li>
              <li>Content te gebruiken voor commerciële doeleinden</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Prijzen
            </h2>
            <p>
              Alle prijzen op deze website zijn onder voorbehoud van typefouten en wijzigingen. 
              Aan prijzen op de website kunnen geen rechten worden ontleend. De actuele prijzen 
              worden altijd besproken tijdens het consult.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Beschikbaarheid
            </h2>
            <p>
              Aboré streeft ernaar de website 24 uur per dag, 7 dagen per week beschikbaar te houden, 
              maar garandeert dit niet. De website kan tijdelijk onbereikbaar zijn door onderhoud, 
              updates of technische storingen.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Wijzigingen
            </h2>
            <p>
              Aboré behoudt zich het recht voor om de inhoud van deze website en deze disclaimer 
              op elk moment te wijzigen zonder voorafgaande kennisgeving.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Contact
            </h2>
            <p>
              Heeft u vragen over deze disclaimer? Neem dan contact met ons op:
            </p>
            <p>
              <strong>Aboré Laser- & Huidkliniek</strong><br />
              Waldhoornplein 14<br />
              2287 EA Rijswijk<br />
              Tel: +31 6 34 53 33 58<br />
              E-mail: info@huidkliniekabore.nl
            </p>

          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
