import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PGP Win - Bangladesh's Best Online Casino Slot Site",
  description:
    "Play the best online casino slots in Bangladesh at PGP Win. Enjoy top games, secure payments, and exciting bonuses. Join now for endless fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="text-dark dark:text-light">
          <main className="flex flex-col justify-center relative grow min-h-dvh bg-linear-to-b from-amber-50 to-orange-100 dark:from-slate-900 dark:to-slate-800 pb-16">
            <Toaster position="top-center" />
            <Navbar />
            <div className="grow h-full flex flex-col">{children}</div>
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
