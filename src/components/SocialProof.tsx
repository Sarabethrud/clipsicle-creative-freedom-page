
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Play } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce CEO",
      company: "StyleCraft",
      content: "Clipsicle transformed our social media presence. Our engagement increased by 340% in just 3 months, and our sales conversion rate doubled!",
      metric: "+340% Engagement",
      avatar: "SJ"
    },
    {
      name: "Marcus Chen", 
      role: "Marketing Director",
      company: "TechFlow",
      content: "The stress relief is incredible. No more scrambling for content or managing freelancers. Clipsicle delivers consistently amazing videos that our audience loves.",
      metric: "+280% Reach",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager", 
      company: "FreshFit",
      content: "We've saved over $120K annually by switching to Clipsicle. The quality is better than our previous agency, and the turnaround time is lightning fast.",
      metric: "$120K+ Saved",
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50K+", label: "Videos Created" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24hr", label: "Average Turnaround" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Real Results From</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of business owners who've transformed their content strategy with Clipsicle
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Metric badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <ArrowUp className="w-4 h-4" />
                  {testimonial.metric}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
