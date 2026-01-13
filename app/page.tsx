// app/page.tsx
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const experiences = [
  {
    title: "Desert Canyon Experience",
    location: "Las Ventanas al Paraíso, A Rosewood Resort",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Soar Over the Alps",
    location: "Rosewood Schloss Fuschl",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Ancient Art of Falconry",
    location: "Rosewood Doha",
    image: "https://aeb-qatar.com/wp-content/uploads/2019/11/ROSEWOOD-980.jpg",
  },
  {
    title: "Polo by the Mountains",
    location: "Rosewood Mandarina",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ocean Guardian",
    location: "Rosewood Baha Mar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const destinations = [
  {
    name: "Rosewood Luang Prabang",
    location: "Luang Prabang, Laos",
    image:
      "https://media.worldnomads.com/Explore/laos/aerial-view-of-luang-prabang-laos-gettyimages-marcinkilarski.jpg",
  },
  {
    name: "Rosewood Phuket",
    location: "Phuket, Thailand",
    image:
      "https://www.aleenta.com/wp-content/uploads/Islands-to-Explore-from-Phuket.jpg",
  },
  {
    name: "Rosewood Hong Kong",
    location: "Hong Kong SAR, China",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rosewood London",
    location: "London, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rosewood Bangkok",
    location: "Bangkok, Thailand",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rosewood Courchevel",
    location: "French Alps",
    image:
      "https://www.barnes-montblanc.com/uploads/posts/5/pictures/14071/show_detail.jpg?1639066862",
  },
];

const wellness = [
  {
    title: "A Fresh Start",
    description:
      "Reset with curated wellness pathways—nutrition, movement, and spa rituals.",
  },
  {
    title: "The Scent of Rosewood",
    description:
      "An exclusive fragrance created with L'OBJET, evoking warmth and wanderlust.",
  },
  {
    title: "The Sleep Edit",
    description:
      "Crafted linens, calming teas, and tailored turndown rituals for deep rest.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f7f3ea] min-h-screen">
      <Navbar />

      {/* Hero: The Scent of Rosewood */}
      <section className="hero-scent">
        <div className="hero-scent-overlay">
          <h2 className="serif text-4xl md:text-5xl font-semibold text-white tracking-wide uppercase">
            THE SCENT OF ROSEWOOD
          </h2>
        </div>
      </section>
      {/* Your Next Vacation / Hotels Section */}
      <section id="destinations" className="section-shell bg-[#f7f3ea]">
        <h2 className="serif text-4xl md:text-5xl font-semibold text-[var(--ink)] text-center mb-16">
          Your Next Vacation
        </h2>
        <div className="destinations-scroll">
          {destinations.map((destination) => (
            <div key={destination.name} className="destination-card">
              <div
                className="destination-image"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="p-8 text-center bg-white">
                <h3 className="text-lg font-semibold text-[var(--ink)] uppercase tracking-wide mb-2">
                  {destination.name}
                </h3>
                {destination.location && (
                  <p className="text-sm text-[var(--muted)] mb-4">
                    {destination.location}
                  </p>
                )}
                <button className="text-sm text-[var(--ink)] underline hover:no-underline font-medium">
                  Discover
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Exclusive Launch Section */}
      <section className="section-shell bg-[#f7f3ea]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden order-2 md:order-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </div>
          <div className="space-y-6 text-center md:text-left order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-medium">
              EXCLUSIVE LAUNCH
            </p>
            <h2 className="serif text-4xl md:text-5xl font-semibold text-[var(--ink)] leading-tight">
              The Scent of Rosewood, created by L'OBJET
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="section-shell bg-[#f7f3ea]">
        <div className="grid md:grid-cols-[1fr,2fr] gap-16 items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-medium">
              EXPERIENCES
            </p>
            <h2 className="serif text-4xl md:text-5xl font-semibold text-[var(--ink)] leading-tight">
              Seek out new perspectives
            </h2>
            <p className="text-[var(--muted)] max-w-md leading-relaxed">
              Unlock doorways to curated experiences at each destination.
            </p>
          </div>

          <div className="experiences-scroll">
            {experiences.map((experience) => (
              <div key={experience.title} className="experience-card">
                <div
                  className="experience-image"
                  style={{
                    backgroundImage: `url(${experience.image})`,
                  }}
                />
                <div className="p-6 bg-white">
                  <h3 className="serif text-xl font-semibold text-[var(--ink)] mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-5">
                    {experience.location}
                  </p>
                  <button className="bg-black text-white px-6 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition w-full">
                    DISCOVER
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Discovery Journeys Hero */}
      <section
        className="hero-discovery relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="hero-discovery-content relative z-10 text-center px-6 py-32">
          <h2 className="serif text-5xl md:text-6xl font-semibold text-white mb-6 uppercase tracking-wide">
            DISCOVERY JOURNEYS
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            From vibrant city escapes to nature-framed hideaways, explore
            destinations and experiences that transcend the ordinary.
          </p>

          <button className="bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition">
            EXPLORE
          </button>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="section-shell bg-[#f7f3ea]">
        <div className="overflow-x-auto">
          <div className="flex gap-8 w-max px-4">
            {/* Card 1 */}
            <div className="card w-[320px] overflow-hidden group hover:shadow-xl transition-shadow shrink-0">
              <div
                className="h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  THE WORLD OF ROSEWOOD
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  Winter is not just for snow-capped mountains and whisky by a
                  fire, but for the soft hum of distant waves.
                </p>
                <button className="text-sm underline hover:no-underline font-medium">
                  Explore
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card w-[320px] overflow-hidden group hover:shadow-xl transition-shadow shrink-0">
              <div
                className="h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  CHASING THE SUN
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  Winter is not just for snow-capped mountains and whisky by a
                  fire, but for the soft hum of distant waves.
                </p>
                <button className="text-sm underline hover:no-underline font-medium">
                  Explore
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card w-[320px] overflow-hidden group hover:shadow-xl transition-shadow shrink-0">
              <div
                className="h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  A FRESH START FOR THE NEW YEAR
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  Winter is not just for snow-capped mountains and whisky by a
                  fire, but for the soft hum of distant waves.
                </p>
                <button className="text-sm underline hover:no-underline font-medium">
                  Explore
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card w-[320px] overflow-hidden group hover:shadow-xl transition-shadow shrink-0">
              <div
                className="h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  CHASING THE SUN
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  Winter is not just for snow-capped mountains and whisky by a
                  fire, but for the soft hum of distant waves.
                </p>
                <button className="text-sm underline hover:no-underline font-medium">
                  Explore
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card w-[320px] overflow-hidden group hover:shadow-xl transition-shadow shrink-0">
              <div
                className="h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  CHASING THE SUN
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  Winter is not just for snow-capped mountains and whisky by a
                  fire, but for the soft hum of distant waves.
                </p>
                <button className="text-sm underline hover:no-underline font-medium">
                  Explore
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card w-[320px] overflow-hidden group hover:shadow-xl transition-shadow shrink-0">
              <div
                className="h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  CHASING THE SUN
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  Winter is not just for snow-capped mountains and whisky by a
                  fire, but for the soft hum of distant waves.
                </p>
                <button className="text-sm underline hover:no-underline font-medium">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suite Sojourn Section */}
      <section
        className="hero-suite relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="hero-suite-content relative z-10 text-center px-6 py-32">
          <h2 className="serif text-5xl md:text-6xl font-semibold text-white mb-6 uppercase tracking-wide">
            SUITE SOJOURN
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Reserve a suite and enjoy thoughtful additions, offered with our
            compliments, for a more memorable stay.
          </p>
        </div>

        <div className="hero-suite-scroll relative z-10 text-center pb-8">
          <span className="text-white text-sm uppercase tracking-wide">
            DISCOVER
          </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
