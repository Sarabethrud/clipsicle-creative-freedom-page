
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const EmotionalAppeal = () => {
  const benefits = [
    {
      title: "Stress Relief",
      description: "Stop worrying about content deadlines, finding reliable editors, or managing multiple freelancers. We handle everything.",
      emotion: "Peace of Mind",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Creative Freedom", 
      description: "Focus on your business vision while we bring your ideas to life. Unlimited revisions until it's perfect.",
      emotion: "Empowerment",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "True Partnership",
      description: "We're not just a service - we're your creative partner invested in your success and growth.",
      emotion: "Support",
      gradient: "from-pink-400 to-orange-400"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">More Than Video Editing</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              It's Creative Freedom
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imagine never worrying about content again. No more stress, no more deadlines, just pure creative freedom to focus on what matters most - growing your business.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Emotion label */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${benefit.gradient} text-white font-semibold text-sm mb-4`}>
                  {benefit.emotion}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </Card>
          ))}
        </div>

        {/* Emotional CTA section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1">
          <div className="bg-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Content Strategy?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the hundreds of business owners who've discovered the freedom of unlimited, professional video editing.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Creative Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalAppeal;
