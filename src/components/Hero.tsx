
import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-25 animate-pulse delay-500"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <Play className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Clipsicle
          </h1>
        </div>
        
        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">Stop Being a Video Editor.</span>
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Start Being a CEO Again.
          </span>
        </h2>
        
        {/* Sub-headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Reclaim 15+ Hours Weekly With Our "Done-For-You" Video Engine
        </h3>
        
        {/* Supporting copy */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Predictable Creative Output at Scale — Without the Headaches, Hidden Costs, or Quality Gambles
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Tired of "vetting through dozens of editors" only to get "wildly unpredictable results"? Join 500+ creators and businesses who've discovered the secret to scaling content without scaling stress.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Your First Video Back in 48 Hours
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-purple-400 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            See Our Work First
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
