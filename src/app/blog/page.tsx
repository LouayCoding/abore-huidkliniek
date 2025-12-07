import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Kennisbank Huidverzorging | Blog | Aboré Huidkliniek Rijswijk",
  description: "Alles over huidbehandelingen, acne, pigmentvlekken, laserontharing en meer. Expert tips van Aboré Huidkliniek in Rijswijk.",
  keywords: "huidverzorging blog, acne tips, pigmentvlekken informatie, laserontharing uitleg, huidkliniek Rijswijk",
};

const blogPosts = [
  {
    slug: "verschil-acne-rosacea",
    title: "Wat is het verschil tussen acne en rosacea?",
    excerpt: "Acne en rosacea lijken op elkaar, maar vereisen verschillende behandelingen. Ontdek de verschillen en de juiste aanpak.",
    category: "Acne & Rosacea",
    image: "/hero/2.jpg",
    readTime: "5 min",
    date: "2025-01-15"
  },
  {
    slug: "pigmentvlekken-oorzaken-behandelingen",
    title: "Pigmentvlekken: oorzaken en behandelingen",
    excerpt: "Van ouderdomsvlekken tot melasma - ontdek wat pigmentvlekken veroorzaakt en hoe je ze effectief kunt behandelen.",
    category: "Pigmentbehandeling",
    image: "/hero/6.jpg",
    readTime: "7 min",
    date: "2025-01-10"
  },
  {
    slug: "striae-na-zwangerschap",
    title: "Striae na zwangerschap: wat kun je eraan doen?",
    excerpt: "Zwangerschapsstriemen zijn normaal, maar behandelbaar. Lees over effectieve behandelingen zoals microneedling en RF.",
    category: "Lichaamsbehandelingen",
    image: "/hero/8.jpg",
    readTime: "6 min",
    date: "2025-01-05"
  },
  {
    slug: "laserontharing-definitief",
    title: "Alles over laserontharing: is het definitief?",
    excerpt: "Is laserontharing echt permanent? Hoeveel sessies heb je nodig? Alle antwoorden op je vragen over permanente ontharing.",
    category: "Laserontharing",
    image: "/hero/5.jpg",
    readTime: "8 min",
    date: "2024-12-28"
  },
  {
    slug: "lpg-endermologie-uitleg",
    title: "Hoe werkt LPG Endermologie?",
    excerpt: "LPG Endermologie voor cellulitis en huidverslapping. Ontdek hoe deze technologie je huid strakker en gladder maakt.",
    category: "Lichaamsbehandelingen",
    image: "/hero/9.jpg",
    readTime: "6 min",
    date: "2024-12-20"
  },
  {
    slug: "microneedling-acne-littekens",
    title: "Microneedling voor acne littekens: werkt het?",
    excerpt: "Alles over microneedling voor acne littekens. Resultaten, aantal sessies, kosten en wat je kunt verwachten.",
    category: "Acne & Rosacea",
    image: "/hero/3.jpg",
    readTime: "7 min",
    date: "2024-12-15"
  },
];

export default function BlogPage() {
  return (
    <>
      <HeaderTransparent variant="light" />
      
      {/* Hero */}
      <section className="relative isolate min-h-[50vh] overflow-hidden flex items-center justify-center bg-[#faf6ea]">
        <Container className="relative z-10 text-center py-20">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6`}>
            Kennisbank
          </h1>
          <p className={`${syne.className} text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto`}>
            Expert tips en informatie over huidbehandelingen van Aboré Huidkliniek
          </p>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-zinc-200 overflow-hidden hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${syne.className} inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-1 text-xs font-medium text-foreground`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`${syne.className} flex items-center gap-4 text-xs text-zinc-500 mb-3`}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} leestijd</span>
                  </div>
                  <h2 className={`${marcellus.className} text-2xl text-foreground mb-3 group-hover:text-primary transition-colors`}>
                    {post.title}
                  </h2>
                  <p className={`${syne.className} text-zinc-600 mb-4`}>
                    {post.excerpt}
                  </p>
                  <div className={`${syne.className} flex items-center gap-2 text-primary font-medium`}>
                    Lees meer
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#faf6ea]">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
              Vragen over je huid?
            </h2>
            <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
              Plan een gratis consult bij Aboré Huidkliniek in Rijswijk
            </p>
            <a
              href="https://abor.boekingapp.nl/"
              className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20`}
            >
              Boek gratis consult
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
