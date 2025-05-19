
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-secondary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Join Europe's Climate Innovation Community
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Connect with climate innovators, access funding opportunities, 
            and collaborate on projects that drive systemic change for a carbon-neutral future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/join">
              <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-medium">
                Become a Member
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
