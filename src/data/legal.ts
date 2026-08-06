import { siteConfig } from "@/data/siteConfig";

export type LegalBlock = { h?: string; p?: string; list?: string[] };

export const legalEffectiveDate = "01/04/2026";

export const privacySections: LegalBlock[] = [
  { p: "At Ilmeza Foundation, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or interact with our programs, services, events, or campaigns. By accessing or using our website, you agree to the practices described in this Privacy Policy." },
  { h: "1. Information We Collect", p: "We may collect personal information (full name, email, phone, postal address, organization name, and details provided through contact forms, volunteer or event registrations and partnership inquiries) and non-personal information (IP address, browser type, device information, pages visited, time spent, referring website, and cookies)." },
  { h: "2. How We Use Your Information", list: ["Respond to your inquiries and requests.", "Process volunteer, internship, and partnership applications.", "Register participants for events, workshops, and campaigns.", "Send newsletters and updates (only if you have subscribed).", "Improve our website, programs, and user experience.", "Maintain website security and comply with legal obligations."] },
  { h: "3. Cookies", p: "Our website may use cookies and similar technologies to enhance your browsing experience and improve our services. You may disable cookies through your browser settings; however, some features may not function properly." },
  { h: "4. Information Sharing", p: "Ilmeza Foundation respects your privacy and does not sell, rent, or trade your personal information. We may share information only with trusted service providers, when required by law, to protect rights and safety, or with your explicit consent." },
  { h: "5. Data Security", p: "We implement reasonable administrative, technical, and organizational measures to protect your personal information. However, no method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security." },
  { h: "6. Third-Party Links", p: "Our website may contain links to third-party websites. Ilmeza Foundation is not responsible for their privacy practices or content, and we encourage you to review their respective policies." },
  { h: "7. Children's Privacy", p: "Protecting children's privacy is important to us. We do not knowingly collect personal information from children without appropriate consent. If you believe a child has provided personal information, please contact us." },
  { h: "8. Your Rights", p: "Depending on applicable laws, you may access, correct, or request deletion of your personal data, withdraw consent, and opt out of promotional communications. To exercise these rights, please contact us." },
  { h: "9. Changes to This Policy", p: "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date." },
  { h: "10. Contact Us", p: `Ilmeza Foundation • Email: ${siteConfig.brand.email} • Website: www.ilmeza.com` },
];

export const termsSections: LegalBlock[] = [
  { p: "Welcome to the Ilmeza Foundation website. These Terms & Conditions govern your access to and use of our website, services, programs, and digital platforms. By accessing or using this website, you agree to comply with these Terms. If you do not agree with any part, please discontinue use of the website." },
  { h: "1. About Ilmeza Foundation", p: "Ilmeza Foundation is a not-for-profit organization committed to promoting social development through initiatives in education, health, environmental sustainability, and legal awareness." },
  { h: "2. Acceptance of Terms", p: "By using this website, you confirm that you have read, understood, and agreed to be bound by these Terms & Conditions and our Privacy Policy." },
  { h: "3. Use of the Website", list: ["Use the website only for lawful purposes.", "Do not engage in unlawful, fraudulent, or harmful activity.", "Do not attempt unauthorized access to our systems or data.", "Do not upload viruses, malware, or malicious code.", "Do not misrepresent your identity or provide false information."] },
  { h: "4. Intellectual Property", p: "Unless otherwise stated, all content on this website is the property of Ilmeza Foundation or used with permission. You may view and download content for personal, educational, or non-commercial use, but may not reproduce, modify, distribute, or commercially exploit it without prior written permission." },
  { h: "5. Donations", p: "Donations made to Ilmeza Foundation are voluntary. Donors are responsible for the accuracy of the information they provide. Donations support the Foundation's charitable objectives, and any applicable tax benefits are subject to prevailing laws." },
  { h: "6. Volunteer, Internship & Event Participation", p: "When registering, you agree to provide accurate information, follow all applicable rules and instructions, and maintain respectful, professional conduct. The Foundation may refuse or cancel participation where necessary to protect participants, staff, or the organization." },
  { h: "7. Third-Party Links", p: "This website may contain links to third-party websites for informational purposes. Ilmeza Foundation is not responsible for their content, policies, or practices, and accessing them is at your own risk." },
  { h: "8. Disclaimer", p: "Information on this website is for general informational and educational purposes only. While we strive for accuracy, we make no warranties regarding completeness or reliability. Reliance on any information is at your own discretion." },
  { h: "9. Limitation of Liability", p: "To the fullest extent permitted by law, Ilmeza Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from use or inability to use the website, technical interruptions, errors, or unauthorized access." },
  { h: "10. Governing Law", p: "These Terms are governed by the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in India." },
  { h: "11. Contact Us", p: `Ilmeza Foundation • Email: ${siteConfig.brand.email} • Website: www.ilmeza.com` },
];
