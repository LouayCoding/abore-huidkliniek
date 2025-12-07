import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Lichaamsbehandelingen | Tatoeage Verwijdering | Aboré Rijswijk",
  description: "Lichaamsbehandelingen in Rijswijk. Tatoeage verwijdering met picolaser.",
};

export default function LichaamsbehandelingenPage() {
  redirect("/tatoeage-verwijderen");
}
