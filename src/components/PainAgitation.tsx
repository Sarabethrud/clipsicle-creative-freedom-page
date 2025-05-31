
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, TrendingDown, AlertTriangle } from "lucide-react";

const PainAgitation = () => {
  const painPoints = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Time Hemorrhage",
      description: "15-20 hours weekly you could spend on strategy, sales, or scaling — worth $50K+ annually for most business owners.",
      cost: "$50K+ annually"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-500" />,
      title: "Opportunity Massacre",
      description: "Every missed video is a missed chance to convert viewers into customers. Poor-quality content actively hurts your brand.",
      cost: "Lost customers"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: "The Freelancer Gamble",
      description: "Sometimes it's fine to go with someone you know will give you quality work in one-shot than to deal with the headaches that can come with cheap freelancers.",
      cost: "Quality chaos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">The Hidden</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              $100K+ Cost
            </span>
            <br />
            <span className="text-gray-900">of DIY Video Editing</span>
          </h2>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Why "Cheap" Freelancers Are Actually the Most Expensive Option
          </p>
        </div>

        {/* Pain cycle description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
            You know the drill. "Video editing can be such a time-consuming task."
          </p>
          <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
            Every week, you're caught in the same exhausting cycle:
          </p>
          
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span className="leading-relaxed">Spending hours "balancing content creation, editing, and managing a channel"</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span className="leading-relaxed">Getting "burned with shoddy deliverables" from budget freelancers</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span className="leading-relaxed">"Stressing about quality control" instead of growing your business</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
              <span className="leading-relaxed">Watching competitors scale while you're "bogged down in the nitty-gritty"</span>
            </li>
          </ul>
        </div>

        {/* Cost breakdown */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Here's what this is REALLY costing you:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="relative overflow-hidden border-2 border-red-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center">
                      {point.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    {point.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {point.description}
                  </p>
                  
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full text-sm">
                    {point.cost}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom conclusion */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            The result? You're trapped in a cycle where creating more content means working more hours, not building a bigger business.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PainAgitation;
