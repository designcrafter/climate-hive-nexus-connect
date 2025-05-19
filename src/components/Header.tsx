
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <img 
              src="/lovable-uploads/c22e1659-6fad-47fb-b582-0c654cc48c9f.png" 
              alt="Climate KIC Logo" 
              className="h-8" 
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/events" className="text-secondary hover:text-primary transition-colors font-medium">
              Events
            </Link>
            <Link to="/opportunities" className="text-secondary hover:text-primary transition-colors font-medium">
              Opportunities
            </Link>
            <Link to="/knowledge" className="text-secondary hover:text-primary transition-colors font-medium">
              Knowledge Hub
            </Link>
            <Link to="/directory" className="text-secondary hover:text-primary transition-colors font-medium">
              Directory
            </Link>
            <Link to="/forum" className="text-secondary hover:text-primary transition-colors font-medium">
              Forum
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-secondary p-2 rounded-full hover:bg-gray-100">
            <Search size={20} />
          </button>
          <Link to="/login">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Log in
            </Button>
          </Link>
          <Link to="/join">
            <Button className="bg-primary text-secondary hover:bg-primary/90">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
