import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; 

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Llogaritësi i Izotopeve',
  description: 'Identifikoni dhe analizoni izotopet menjëherë.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${pjs.variable}`}>
      <body className="bg-white text-[#10203D] antialiased selection:bg-[#10203D] selection:text-white font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
