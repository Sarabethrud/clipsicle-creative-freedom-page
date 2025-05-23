
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowDown, ArrowUp } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: <Play className="w-12 h-12 text-pink-500" />,
      title: "Fixed Pricing",
      subtitle: "No Subscriptions",
      description: "One flat monthly fee for unlimited edits. No hidden costs, no surprises.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Play className="w-12 h-12 text-purple-500" />,
      title: "Content Ideas",
      subtitle: "That Engage Audiences", 
      description: "Strategic content planning that drives real engagement and growth.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: <Play className="w-12 h-12 text-blue-500" />,
      title: "Vids. With Impact",
      subtitle: "Add Wow Factor",
      description: "Professional editing that makes your content stand out from the crowd.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Short-Form Videos That</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create viral content that converts viewers into customers
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Unlimited Edits. Unstoppable Growth.
          </h3>
          <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 rounded-full">
            <div className="bg-white px-8 py-3 rounded-full">
              <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                www.clipsicle.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
