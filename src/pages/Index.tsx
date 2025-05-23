
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import RiskReversal from "@/components/RiskReversal";
import EmotionalAppeal from "@/components/EmotionalAppeal";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <Hero />
      <ValueProposition />
      <SocialProof />
      <EmotionalAppeal />
      <RiskReversal />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
