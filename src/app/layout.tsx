import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lilita_One, Palanquin_Dark, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lilitaOne = Lilita_One({
  weight: "400",
  variable: "--font-lilita",
  subsets: ["latin"],
});

const palanquinDark = Palanquin_Dark({
  weight: ["400", "500", "600", "700"],
  variable: "--font-palanquin-dark",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "daven.dev",
  description: "Daven Austhine Sumagang's experimental developer portfolio. Turn syntax errors into happy accidents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${lilitaOne.variable} ${palanquinDark.variable} ${roboto.variable} min-h-screen bg-background text-foreground antialiased selection:bg-[#F59E0B]/30 selection:text-[#F59E0B]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
