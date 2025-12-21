import { Lexend, Marcellus, Outfit } from "next/font/google";

export const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});
