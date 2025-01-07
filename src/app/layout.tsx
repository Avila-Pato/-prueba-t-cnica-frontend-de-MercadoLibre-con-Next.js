
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import  Link  from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Challange Mercado libre",
  description: "Prueba de programdor frontend con next y typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex h-16 bg-yellow-400 px-4">
          <form action="/items" className="m-auto flex flex-1 max-w-screen-xl">
          {/* form action nos diriga a /items */}
          <Link className="text-white px-5 font-bold" href="/" >MercadoLibre</Link>
            <input type="text" className=" h-8 flex-1 px-2  "  name="search"/>
            <button type="submit" className="h-8 bg-gray-300 px-2 py-1 text-slate-700">
              Buscar
              </button>
          </form>
        </header>
        <main className="max-w-screen-xl p-4">
         <Suspense fallback={<div>Cargando....</div>}>
           {children}
          
          </Suspense>
          </main>
        <footer className="flex justify-center ">Challange MercadoLibre </footer>
        <button ></button>
      </body>
    </html>
  );
}
