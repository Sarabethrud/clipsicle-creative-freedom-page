
import { Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-xl flex items-center justify-center mr-3">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Clipsicle
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your reliable video editing partner for sustainable content growth.
            </p>
            <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 rounded-full">
              <div className="bg-gray-900 px-6 py-2 rounded-full">
                <p className="text-sm font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  www.clipsicle.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">View Portfolio (Proof Elements)</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Client Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Service Level Agreement</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">30-Day Guarantee Details</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Direct communication channel included with all plans</li>
              <li>Response time: Under 24 hours</li>
              <li>Emergency rush support available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Clipsicle. All rights reserved. Made with ❤️ for content creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
