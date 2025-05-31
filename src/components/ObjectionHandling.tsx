
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ObjectionHandling = () => {
  const included = [
    "Professional editing team (not rotating rookies)",
    "Custom brand style guide development",
    "Priority processing queue",
    "Monthly strategy consultation",
    "Platform-specific optimization",
    "Rush delivery option (5x monthly)",
    "Direct communication channel",
    "Quality guarantee with redo promise"
  ];

  const notIncluded = [
    "Original filming/scriptwriting",
    "Voice-over talent sourcing",
    "Advanced 3D animation",
    "On-location production"
  ];

  const features = [
    {
      title: "TRULY UNLIMITED",
      description: "Submit as many video editing requests as you want"
    },
    {
      title: "SMART WORKFLOW",
      description: "We process 2 videos simultaneously to ensure quality (not artificial limits)"
    },
    {
      title: "GUARANTEED SPEED",
      description: "48-72 hour turnaround for standard videos"
    },
    {
      title: "UNLIMITED REVISIONS",
      description: "We work until it's perfect, period"
    },
    {
      title: "NO SURPRISE FEES",
      description: "One flat rate covers everything listed below"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              "But What Does 'Unlimited' Really Mean?"
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Transparent Truth About Our Service (No Fine Print BS)
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We get it. You've been burned by "unlimited" promises before. Here's exactly what you get:
          </p>
        </div>

        {/* Features breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's included vs not included */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* What's included */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-green-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What's Included Every Month:
              </h3>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What's not included */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What's NOT Included:
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-0.5 rounded-3xl max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Clear expectations = Happy clients = Long-term partnerships
              </h3>
              <p className="text-gray-600 text-lg">
                No surprises, no hidden fees, no gotchas. Just transparent, professional video editing that scales with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
