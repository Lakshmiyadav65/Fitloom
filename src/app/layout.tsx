import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium modern font
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "700"], // Light to Bold
});

export const metadata: Metadata = {
  title: "Fitloom | Future of Fashion",
  description: "AI-powered unisex clothing store with virtual try-on.",
};

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
