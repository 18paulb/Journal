import { ImageIcon, Lock, Mic, Pencil, Shield, Users } from "lucide-react";

import CTASection from "./cta-section";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import PrivacySection from "./privacy-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <PrivacySection />
        <CTASection />
      </main>
    </div>
  );
}
