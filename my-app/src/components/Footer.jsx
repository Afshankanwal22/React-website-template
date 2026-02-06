export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-gray-400 pt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

          {/* Logo / Left */}
          <div>
            <img src="/map.png" alt="map" className="w-32 mb-4" />
            <p className="text-sm">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm">
              <li>Delta</li>
              <li>Sigma</li>
              <li>Zeta</li>
              <li>Alpha</li>
              <li>Acumen</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>Help</li>
              <li>Training Videos</li>
              <li>Webinars</li>
              <li>Request a Demo</li>
              <li>Create Surveys</li>
              <li>Quiz Maker</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm gap-4">

          <p>Copyright © 2022 Circle. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Data & Security</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
