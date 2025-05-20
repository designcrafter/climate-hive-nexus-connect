
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="bg-secondary text-white py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(29, 73, 56, 0.8), rgba(29, 73, 56, 0.95)), url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Join Europe's Climate Innovation Community
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Connect with climate innovators, access funding opportunities, 
            and collaborate on projects that drive systemic change for a carbon-neutral future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/join">
              <Button size="lg" className="rounded-full bg-primary text-secondary hover:bg-primary/90 font-medium group">
                Become a Member
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="rounded-full border-white hover:bg-white text-lime-950">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-accent-purple/10 rounded-full filter blur-2xl"></div>
    </div>
  );
};

export default Hero;
