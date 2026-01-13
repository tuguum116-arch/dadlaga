export default function Footer() {
  return (
    <footer className="bg-[#f7f3ea] border-t border-[rgba(181,138,90,0.1)]">
      {/* Stay Connected Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[rgba(181,138,90,0.1)]">
        <p className="serif text-xl md:text-2xl font-semibold text-[var(--ink)]">
          Stay connected to the world of Rosewood
        </p>
        <button className="bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition whitespace-nowrap">
          JOIN OUR MAILING LIST
        </button>
      </div>

      {/* Four Column Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* CONTACT US */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)] mb-4">
            CONTACT US
          </h4>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>
              Room Reservations:{" "}
              <a
                href="tel:+12144147504"
                className="underline hover:text-[var(--ink)]"
              >
                +1 214 414 7504
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Global Reservation Information
              </a>
            </li>
          </ul>
        </div>

        {/* WORLD OF ROSEWOOD */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)] mb-4">
            WORLD OF ROSEWOOD
          </h4>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Rosewood Impacts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Developers
              </a>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-[var(--ink)]">
                Careers
              </a>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Media
              </a>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)] mb-4">
            FOLLOW US
          </h4>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-[var(--ink)]">
                Facebook
              </a>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-[var(--ink)]">
                Instagram
              </a>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-[var(--ink)]">
                WeChat
              </a>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* TERMS */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)] mb-4">
            TERMS
          </h4>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Accessibility Statement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--ink)]">
                Gift Cards Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with Logo */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 border-t border-[rgba(181,138,90,0.1)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[var(--muted)] space-y-1 text-left">
            <p>ICP LICENSE 17035714</p>
            <p>GONGAN BEIAN: 31010102004896</p>
          </div>
          <div className="serif text-7xl md:text-8xl font-bold text-[var(--ink)] tracking-tight leading-none">
            RW
          </div>
          <div className="text-xs text-[var(--muted)] text-right">
            ROSEWOOD HOTEL GROUP © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
