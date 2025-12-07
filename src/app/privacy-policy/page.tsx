import { Metadata } from "next";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Aboré Huidkliniek Rijswijk",
  description: "Lees ons privacybeleid. Hoe Aboré Huidkliniek omgaat met uw persoonsgegevens conform de AVG/GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeaderTransparent variant="light" />
      
      {/* Hero */}
      <section className="bg-[#faf6ea] pt-32 pb-16">
        <Container>
          <h1 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground text-center`}>
            Privacy Policy
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
              1. Wie zijn wij?
            </h2>
            <p>
              Aboré Laser- & Huidkliniek is gevestigd aan Waldhoornplein 14, 2287 EA Rijswijk. 
              Wij zijn verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in deze privacyverklaring.
            </p>
            <p>
              <strong>Contactgegevens:</strong><br />
              Aboré Laser- & Huidkliniek<br />
              Waldhoornplein 14<br />
              2287 EA Rijswijk<br />
              Telefoon: +31 6 34 53 33 58<br />
              E-mail: info@huidkliniekabore.nl
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              2. Welke persoonsgegevens verwerken wij?
            </h2>
            <p>Wij verwerken de volgende persoonsgegevens:</p>
            <ul>
              <li>Voor- en achternaam</li>
              <li>Geslacht</li>
              <li>Geboortedatum</li>
              <li>Adresgegevens</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Medische gegevens relevant voor behandelingen</li>
              <li>Foto's (voor en na behandelingen, alleen met toestemming)</li>
              <li>Betalingsgegevens</li>
              <li>IP-adres en browsergegevens (via cookies)</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              3. Waarom verwerken wij uw gegevens?
            </h2>
            <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
            <ul>
              <li>Het uitvoeren van huidbehandelingen en het bijhouden van uw behandelhistorie</li>
              <li>Het maken en beheren van afspraken</li>
              <li>Het versturen van afspraakbevestigingen en herinneringen</li>
              <li>Het afhandelen van betalingen</li>
              <li>Het beantwoorden van uw vragen via telefoon, e-mail of contactformulier</li>
              <li>Het voldoen aan wettelijke verplichtingen (zoals belastingwetgeving)</li>
              <li>Het verbeteren van onze dienstverlening</li>
              <li>Het versturen van nieuwsbrieven (alleen met uw toestemming)</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              4. Rechtsgrond voor verwerking
            </h2>
            <p>Wij verwerken uw persoonsgegevens op basis van:</p>
            <ul>
              <li><strong>Uitvoering van een overeenkomst:</strong> Voor het uitvoeren van behandelingen en afspraken</li>
              <li><strong>Wettelijke verplichting:</strong> Voor fiscale en administratieve verplichtingen</li>
              <li><strong>Toestemming:</strong> Voor het versturen van nieuwsbrieven en het gebruik van foto's</li>
              <li><strong>Gerechtvaardigd belang:</strong> Voor het verbeteren van onze dienstverlening</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              5. Bewaartermijnen
            </h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk:
            </p>
            <ul>
              <li><strong>Medische gegevens:</strong> 20 jaar na laatste behandeling (wettelijke verplichting)</li>
              <li><strong>Financiële gegevens:</strong> 7 jaar (fiscale bewaarplicht)</li>
              <li><strong>Contactgegevens:</strong> Tot 2 jaar na laatste contact</li>
              <li><strong>Nieuwsbrief gegevens:</strong> Tot uitschrijving</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              6. Delen met derden
            </h2>
            <p>
              Wij delen uw persoonsgegevens alleen met derden indien dit noodzakelijk is voor onze dienstverlening:
            </p>
            <ul>
              <li>Boekhouder/accountant (financiële administratie)</li>
              <li>Betalingsdienstverleners (voor betalingsverwerking)</li>
              <li>IT-dienstverleners (voor hosting en onderhoud)</li>
              <li>Afsprakensysteem (voor het beheren van afspraken)</li>
            </ul>
            <p>
              Wij verkopen uw gegevens nooit aan derden. Met bedrijven die uw gegevens verwerken 
              in onze opdracht, sluiten wij een verwerkersovereenkomst.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              7. Cookies
            </h2>
            <p>
              Onze website maakt gebruik van cookies. Cookies zijn kleine tekstbestanden die op uw 
              apparaat worden opgeslagen. Wij gebruiken:
            </p>
            <ul>
              <li><strong>Functionele cookies:</strong> Noodzakelijk voor het functioneren van de website</li>
              <li><strong>Analytische cookies:</strong> Voor het analyseren van websitegebruik (Google Analytics)</li>
              <li><strong>Marketing cookies:</strong> Voor het tonen van relevante advertenties (alleen met toestemming)</li>
            </ul>
            <p>
              U kunt cookies uitschakelen via uw browserinstellingen. Dit kan de functionaliteit 
              van de website beïnvloeden.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              8. Uw rechten
            </h2>
            <p>Op grond van de AVG heeft u de volgende rechten:</p>
            <ul>
              <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
              <li><strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
              <li><strong>Recht op verwijdering:</strong> U kunt verzoeken uw gegevens te verwijderen</li>
              <li><strong>Recht op beperking:</strong> U kunt de verwerking laten beperken</li>
              <li><strong>Recht op overdraagbaarheid:</strong> U kunt uw gegevens opvragen in een gangbaar formaat</li>
              <li><strong>Recht op bezwaar:</strong> U kunt bezwaar maken tegen de verwerking</li>
            </ul>
            <p>
              Voor het uitoefenen van uw rechten kunt u contact opnemen via info@huidkliniekabore.nl. 
              Wij reageren binnen 4 weken op uw verzoek.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              9. Beveiliging
            </h2>
            <p>
              Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om 
              misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking tegen te gaan:
            </p>
            <ul>
              <li>SSL-versleuteling op onze website</li>
              <li>Beveiligde opslag van gegevens</li>
              <li>Beperkte toegang tot persoonsgegevens</li>
              <li>Regelmatige back-ups</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              10. Klachten
            </h2>
            <p>
              Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan contact met 
              ons op. Komen wij er samen niet uit, dan heeft u het recht om een klacht in te dienen 
              bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              11. Wijzigingen
            </h2>
            <p>
              Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De meest actuele versie 
              vindt u altijd op deze pagina. Bij belangrijke wijzigingen informeren wij u via e-mail 
              of via onze website.
            </p>

          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
