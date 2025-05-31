
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Clock, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email });
    // Here you would typically send the data to your backend
  };

  const steps = [
    "Choose your plan and submit your first video",
    "Get your first professionally edited video back in 48 hours", 
    "Experience the relief of never worrying about editing again"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Join the 500+ business owners who've discovered the freedom of unlimited, professional video editing.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-8">What happens next:</h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-lg leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-white" />
                <span className="font-semibold">⏰ Your competitors are scaling their content while you're stuck editing.</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Every day you wait is another day behind.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
            >
              Start Your Risk-Free Trial
            </Button>
          </div>
          
          {/* Right side - Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Get Started
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ready to transform your content? Let's begin your journey.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-lg border-gray-300 focus:border-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Business Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg border-gray-300 focus:border-purple-500"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Risk-Free Trial
                </Button>
                
                {/* Trust indicators */}
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>Get your first video back in 48 hours</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4 text-green-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  By signing up, you agree to our Terms of Service and Privacy Policy. 
                  No spam, unsubscribe at any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
