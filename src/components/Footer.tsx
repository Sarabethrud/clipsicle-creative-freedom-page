
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/67201d27-def6-4b6c-a2a5-a890b5f5cc5d.png" 
                alt="Clipsicle Logo" 
                className="w-16 h-16 mr-3"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Clipsicle
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
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
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">View Portfolio (Proof Elements)</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Client Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Service Level Agreement</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">30-Day Guarantee Details</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="leading-relaxed">Direct communication channel included with all plans</li>
              <li className="leading-relaxed">Response time: Under 24 hours</li>
              <li className="leading-relaxed">Emergency rush support available</li>
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
