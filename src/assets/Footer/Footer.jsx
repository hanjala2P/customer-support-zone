import React from 'react';

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white">
      
      {/* Top Section */}
      <div className="px-6 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-gray-300 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Company</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Services</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Social Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><i className="fa-brands fa-facebook mr-2"></i>Facebook</li>
            <li><i className="fa-brands fa-x-twitter mr-2"></i>Twitter</li>
            <li><i className="fa-brands fa-linkedin mr-2"></i>LinkedIn</li>
            <li><i className="fa-solid fa-envelope mr-2"></i>support@cst.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-700 text-center py-4 text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;
