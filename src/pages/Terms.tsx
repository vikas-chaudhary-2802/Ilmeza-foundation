import LegalDoc from "@/components/LegalDoc";
import { termsSections } from "@/data/legal";
import { ScrollText } from "lucide-react";

const Terms = () => (
  <LegalDoc
    eyebrow="Legal"
    title="Terms &"
    highlight="Conditions"
    icon={ScrollText}
    sections={termsSections}
    otherLabel="Privacy Policy"
    otherTo="/privacy"
  />
);

export default Terms;
