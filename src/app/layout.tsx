import type { Metadata } from 'next';
import { Cormorant_Garamond, Great_Vibes, Lora, Pinyon_Script } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

// Font definitions
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pinyon-script',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zoya & Ayaans Wedding Invitation',
  description: 'Mr. & Mrs. Ovias Siraj solicit your esteemed presence with your family on the occasion of the Wedding of Zoya Ovias & Mohammed Ayaan.',
  keywords: ['Wedding Invitation', 'Islamic Wedding', 'Nikah', 'Valima', 'Zoya Ovias', 'Mohammed Ayaan'],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Zoya & Ayaans Wedding Invitation',
    description: 'We request your blessings and presence at our wedding ceremonies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable} ${pinyonScript.variable} ${lora.variable}`}>
      <body className="antialiased bg-[#FAF8F5] text-[#2E2E2E] selection:bg-[#B8860B]/20 selection:text-[#B8860B]">
        {children}
      </body>
    </html>
  );
}
