
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/hero/Hero';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import FeaturedOpportunities from '@/components/home/FeaturedOpportunities';
import MembershipOverview from '@/components/home/MembershipOverview';
import MemberHighlights from '@/components/home/MemberHighlights';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <FeaturedEvents />
        
        <FeaturedOpportunities />
        
        <section className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Knowledge Hub</h2>
                <p className="text-lg mb-6">
                  Access a rich library of resources, case studies, guides, and research to support your climate innovation journey.
                </p>
                <Link to="/knowledge">
                  <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
                    Explore Resources
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-secondary-foreground/10 p-5 rounded-lg">
                  <h3 className="font-medium mb-1">Climate Tech Reports</h3>
                  <p className="text-sm text-gray-200">In-depth analyses of emerging technologies.</p>
                </div>
                <div className="bg-secondary-foreground/10 p-5 rounded-lg">
                  <h3 className="font-medium mb-1">Policy Briefs</h3>
                  <p className="text-sm text-gray-200">Updates on EU climate legislation and opportunities.</p>
                </div>
                <div className="bg-secondary-foreground/10 p-5 rounded-lg">
                  <h3 className="font-medium mb-1">Implementation Guides</h3>
                  <p className="text-sm text-gray-200">Practical resources for climate solutions.</p>
                </div>
                <div className="bg-secondary-foreground/10 p-5 rounded-lg">
                  <h3 className="font-medium mb-1">Case Studies</h3>
                  <p className="text-sm text-gray-200">Real-world examples of successful projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <MemberHighlights />
        
        <MembershipOverview />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">Join Europe's Climate Innovation Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with experts, access resources, and collaborate on projects that drive systemic change for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
                Become a Member
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
