import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoM.AI — Smart Minutes of Meeting Generator",
  description:
    "Transcribe, summarize, and extract insights from your meetings instantly with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${inter.className} bg-[#0f172a] text-gray-100 antialiased min-h-screen flex flex-col`}
      >
        {/* Persistent Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}

