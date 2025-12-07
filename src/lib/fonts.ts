import { Lexend, Marcellus, Syne } from "next/font/google";

export const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400","600"],
});
