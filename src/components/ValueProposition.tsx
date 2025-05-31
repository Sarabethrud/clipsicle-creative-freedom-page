
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, BarChart, Handshake } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-pink-500" />,
      title: "Proactive Brand Immersion",
      description: "Your dedicated editor doesn't just follow instructions — they learn your brand voice so well that videos feel authentically 'you' from day one.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Strategic Content Repurposing", 
      description: "Send us one long-form video, get back 5-8 optimized clips for different platforms. Multiply your content ROI instantly.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-500" />,
      title: "Guaranteed Minimum Output",
      description: "Not just 'unlimited' — expect at least 25 professional videos monthly with our transparent workflow system.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-500" />,
      title: "True Partnership Experience",
      description: "Monthly strategy calls, proactive suggestions, and editors who understand your business goals, not just your editing requirements.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Introducing</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              "Predictable Creative Output at Scale"
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The Reliable Video Partner That Grows Your Brand While You Focus on What You Do Best
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What if you could "scale up your content output without getting bogged down" in editing? What if video production felt effortless instead of overwhelming?
          </p>
        </div>

        {/* Missing 1% Formula header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Our "Missing 1%" Formula:
          </h3>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
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
            Not Just Editing. A Complete Content Engine.
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
