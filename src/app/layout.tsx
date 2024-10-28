import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"
import { LangProvider } from "@/context/useLang";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Andre Rimes | Full Stack Developer",
  description: "Andre Rimes is a Full Stack Developer who loves to build things and learn new things. He is passionate about coding and is always looking for new ways to improve his skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <LangProvider>
        <body
          className={`${poppins.variable} bg-[#111111] w-screen h-screen overflow-x-hidden`}
        >
          {children}
        </body>
      </LangProvider>
    </html>
  );
}
