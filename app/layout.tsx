import "./globals.css";

export const metadata = {
  title: "Rosewood Inspired Hotel | Discovery Awaits",
  description:
    "A luxury hotel experience inspired by Rosewood Hotels—bespoke journeys, curated wellness, and tailored stays across iconic destinations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ivory text-ink antialiased">{children}</body>
    </html>
  );
}
