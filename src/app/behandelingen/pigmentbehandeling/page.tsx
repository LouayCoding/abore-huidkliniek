import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Pigmentbehandeling | Pigmentvlekken Verwijderen | Aboré Rijswijk",
  description: "Pigmentbehandeling in Rijswijk. Verwijder ouderdomsvlekken, melasma en pigmentvlekken met picolaser.",
};

export default function PigmentbehandelingPage() {
  redirect("/pigmentvlekken-verwijderen");
}
