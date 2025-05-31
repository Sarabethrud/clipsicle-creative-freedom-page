
import Hero from "@/components/Hero";
import PainAgitation from "@/components/PainAgitation";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import PricingComparison from "@/components/PricingComparison";
import ObjectionHandling from "@/components/ObjectionHandling";
import RiskReversal from "@/components/RiskReversal";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <Hero />
      <PainAgitation />
      <ValueProposition />
      <SocialProof />
      <PricingComparison />
      <ObjectionHandling />
      <RiskReversal />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
