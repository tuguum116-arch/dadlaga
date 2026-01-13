import Link from "next/link";

const links = [
  { href: "#journeys", label: "Discover" },
  { href: "#about", label: "About" },
  { href: "#offers", label: "Offers" },
  { href: "#destinations", label: "Hotels" },
  { href: "#residences", label: "Residences" },
  { href: "#dining", label: "Dining" },
  { href: "#wellness", label: "Wellness" },
  { href: "#events", label: "Events" },
  { href: "#shop", label: "Shop" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#f7f3ea]">
      <div className="flex justify-center items-center py-3 border-b border-[rgba(181,138,90,0.1)]">
        <h1 className="serif text-2xl font-semibold text-[var(--ink)] tracking-wide">
          ROSEWOOD
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-[var(--ink)] font-medium hover:opacity-70 transition">
            GLOBAL
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--ink)] font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <button className="bg-[#2d4a2d] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1f331f] transition">
            RESERVE
          </button>
        </div>
      </div>
    </header>
  );
}
