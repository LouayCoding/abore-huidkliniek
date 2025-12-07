import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Acne & Rosacea Behandeling | Aboré Huidkliniek Rijswijk",
  description: "Professionele acne en rosacea behandeling in Rijswijk. Bekijk alle behandelingen en prijzen.",
};

export default function AcneRosaceaPage() {
  redirect("/acne-behandeling");
}
