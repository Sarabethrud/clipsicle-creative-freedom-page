
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Check } from "lucide-react";

const RiskReversal = () => {
  const tiers = [
    {
      name: "Content Accelerator",
      price: "$997",
      period: "/month",
      description: "Perfect for growing creators ready to scale",
      features: [
        "15 professional videos monthly",
        "72-96 hour turnaround",
        "Standard editing + basic graphics",
        "Email support",
        "Basic brand adherence"
      ],
      bestFor: "Growing YouTubers, Small businesses testing video, Solo entrepreneurs",
      popular: false
    },
    {
      name: "Content Engine",
      price: "$1,497",
      period: "/month",
      description: "The sweet spot for serious content creators",
      features: [
        "25 professional videos monthly",
        "48-72 hour turnaround",
        "Full editing suite + motion graphics",
        "Dedicated editor assignment",
        "Strategic content repurposing (1 long-form → 5-8 clips)",
        "Monthly strategy calls",
        "Priority processing",
        "Rush delivery (5x monthly)"
      ],
      bestFor: "Established YouTubers, SME marketing teams, Course creators, B2B companies",
      popular: true
    },
    {
      name: "Content Domination",
      price: "$2,497",
      period: "/month",
      description: "Maximum firepower for agencies and enterprises",
      features: [
        "40 professional videos monthly",
        "24-48 hour turnaround",
        "Advanced production suite",
        "Dedicated 2-person team",
        "White-label service capability",
        "Bi-weekly strategy intensives",
        "Unlimited rush delivery",
        "Advanced analytics & optimization"
      ],
      bestFor: "Large creators, Marketing agencies, Enterprise companies, High-growth SaaS",
      popular: false
    }
  ];

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

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Choose Your Video</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Production Powerhouse
            </span>
          </h2>
        </div>

        {/* Pricing tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${tier.popular ? 'border-2 border-purple-500 shadow-2xl scale-105' : 'border-0 bg-white/90'} backdrop-blur-sm`}>
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <CardContent className={`p-8 ${tier.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">{tier.period}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Guaranteed Minimums:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Best for:</p>
                  <p className="text-sm text-gray-600">{tier.bestFor}</p>
                </div>
                
                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white border-2 border-gray-300 hover:border-purple-400 text-gray-700'
                  }`}
                >
                  Start Your Risk-Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk reversal guarantees */}
        <div className="mb-16">
          <div className="text-center mb-12">
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

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">{guarantee.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom trust statement */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8">
          <p className="text-lg text-gray-700">
            Why can we offer this? Because our clients typically see results within the first week. When you experience the relief of never worrying about video editing again, you'll understand why our retention rate is 94%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
