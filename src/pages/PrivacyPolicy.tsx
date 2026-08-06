import LegalDoc from "@/components/LegalDoc";
import { privacySections } from "@/data/legal";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => (
  <LegalDoc
    eyebrow="Legal"
    title="Privacy"
    highlight="Policy"
    icon={ShieldCheck}
    sections={privacySections}
    otherLabel="Terms & Conditions"
    otherTo="/terms"
  />
);

export default PrivacyPolicy;
