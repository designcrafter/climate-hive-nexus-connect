
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-primary font-semibold text-lg mb-4">Climate KIC</h3>
            <p className="text-sm text-gray-300 mb-4">
              Europe's leading community for climate innovation, driving systemic change through collaborative action.
            </p>
            <img 
              src="/lovable-uploads/c22e1659-6fad-47fb-b582-0c654cc48c9f.png" 
              alt="Climate KIC Logo" 
              className="h-8" 
            />
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/events" className="hover:text-primary">Events</Link></li>
              <li><Link to="/opportunities" className="hover:text-primary">Opportunities</Link></li>
              <li><Link to="/knowledge" className="hover:text-primary">Knowledge Hub</Link></li>
              <li><Link to="/directory" className="hover:text-primary">Member Directory</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/groups" className="hover:text-primary">Groups</Link></li>
              <li><Link to="/forum" className="hover:text-primary">Discussion Forum</Link></li>
              <li><Link to="/join" className="hover:text-primary">Membership</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">YouTube</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Climate KIC. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
