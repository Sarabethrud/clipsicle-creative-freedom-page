
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const RiskReversal = () => {
  const guarantees = [
    {
      title: "30-Day Money-Back Guarantee",
      description: "Not satisfied? Get a full refund within 30 days, no questions asked. We're that confident in our service.",
      icon: "💰"
    },
    {
      title: "No Long-Term Contracts",
      description: "Month-to-month flexibility. No hidden fees, no setup costs, no contracts. Just incredible video editing.",
      icon: "📋"
    },
    {
      title: "Cancel Anytime",
      description: "Pause or cancel your subscription with just one click. No cancellation fees, no hassle, no hard feelings.",
      icon: "✨"
    }
  ];

  const features = [
    "Unlimited video edits per month",
    "48-hour average turnaround time", 
    "Dedicated creative team",
    "Multiple revision rounds included",
    "Content strategy consultation",
    "Direct communication channel"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Zero Risk,</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Maximum Reward
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're so confident you'll love Clipsicle that we've removed all the risk. Try us completely risk-free.
          </p>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="text-6xl mb-6">{guarantee.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {guarantee.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {guarantee.description}
                </p>
              </CardContent>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Pricing section */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Pricing */}
                <div className="text-center md:text-left">
                  <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                    MOST POPULAR PLAN
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Unlimited Everything
                  </h3>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      $2,997
                    </span>
                    <span className="text-xl text-gray-600 ml-2">/month</span>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    Compare to hiring full-time editors ($8,000+/month) or agencies ($5,000+/month)
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Risk-Free Trial
                  </Button>
                </div>
                
                {/* Right side - Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Everything included:</h4>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <Play className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
