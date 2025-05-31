
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calculator, Target } from "lucide-react";

const PricingComparison = () => {
  const comparisons = [
    {
      option: "Skilled Full-Time Editor",
      cost: "$8,000+/month",
      details: "salary + benefits + software + management time",
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      color: "red"
    },
    {
      option: "Quality Freelancers (25 videos)",
      cost: "$3,000-5,000/month",
      details: "+ 10+ hours managing them",
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      color: "orange"
    },
    {
      option: "\"Cheap\" Fiverr Editors",
      cost: "$5,000+ true cost",
      details: "$500/month + 20 hours fixing/redoing + opportunity cost of poor quality",
      icon: <Calculator className="w-8 h-8 text-yellow-500" />,
      color: "yellow"
    },
    {
      option: "Clipsicle",
      cost: "$1,497/month",
      details: "+ zero management time + guaranteed quality",
      icon: <Target className="w-8 h-8 text-green-500" />,
      color: "green"
    }
  ];

  const benefits = [
    "Reclaiming 15+ hours weekly for strategic work",
    "Predictable, scalable content engine",
    "Professional brand image that converts",
    "Peace of mind knowing video is handled"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Why Smart Businesses Pay</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              $1,497/Month
            </span>
            <br />
            <span className="text-gray-900">Instead of "Saving" Money on Fiverr</span>
          </h2>
        </div>

        {/* Math comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Here's the math that'll shock you:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisons.map((comparison, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 ${comparison.color === 'green' ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center">
                    {comparison.icon}
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    {comparison.option}
                  </h4>
                  
                  <div className={`text-2xl font-bold mb-4 ${comparison.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    {comparison.cost}
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {comparison.details}
                  </p>
                  
                  {comparison.color === 'green' && (
                    <div className="mt-6 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      BEST VALUE
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value proposition */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                You're not paying for editing. You're investing in:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 rounded-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <p className="text-xl font-bold text-gray-900 leading-relaxed">
                    The question isn't "Can I afford Clipsicle?" 
                    <br />
                    It's "Can I afford NOT to have reliable video production?"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
