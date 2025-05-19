
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Membership = () => {
  const membershipTiers = [
    {
      id: 'individual',
      name: 'Individual',
      description: 'For professionals, researchers, and enthusiasts passionate about climate innovation.',
      price: '€120',
      period: 'per year',
      features: [
        'Full access to member directory',
        'Participate in community discussions',
        'Access to knowledge hub resources',
        'Discounted event tickets',
        'Monthly newsletter',
        'Free webinars and workshops'
      ],
      primaryAction: 'Start Free Trial',
      secondaryAction: 'Learn More'
    },
    {
      id: 'organization',
      name: 'Organization',
      description: 'For companies, NGOs, research institutions and government bodies working on climate solutions.',
      price: 'From €500',
      period: 'per year',
      features: [
        'All Individual benefits',
        'Organization profile in directory',
        'Post job openings and opportunities',
        'Host events on the platform',
        'Share resources in knowledge hub',
        'Access to partner network'
      ],
      primaryAction: 'Request Invoice',
      secondaryAction: 'Contact Sales',
      highlighted: true
    },
    {
      id: 'farmer',
      name: 'Farmer',
      description: 'For agricultural professionals implementing sustainable farming practices.',
      price: '€80',
      period: 'per year',
      features: [
        'All Individual benefits',
        'Access to agricultural resources',
        'Specialized farmer discussion groups',
        'Sustainable farming workshops',
        'Connection with agricultural experts',
        'Funding opportunities for farmers'
      ],
      primaryAction: 'Join as Farmer',
      secondaryAction: 'Learn More'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="bg-secondary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Be part of Europe's leading network of climate innovators and collaborate on projects that drive systemic change.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Membership Tiers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the membership option that works best for you or your organization and join our community of climate innovators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipTiers.map(tier => (
                <Card 
                  key={tier.id} 
                  className={`border ${tier.highlighted ? 'border-primary shadow-lg' : 'border-gray-200'} h-full flex flex-col`}
                >
                  <CardHeader className={tier.highlighted ? 'bg-primary/10' : ''}>
                    <CardTitle className="text-2xl font-bold text-secondary">{tier.name}</CardTitle>
                    <p className="text-gray-600 mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-secondary">{tier.price}</span>
                      <span className="text-gray-500 ml-1">{tier.period}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-primary shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button 
                      className={`w-full ${tier.highlighted ? 'bg-primary text-secondary hover:bg-primary/90' : 'bg-secondary text-white hover:bg-secondary/90'}`}
                    >
                      {tier.primaryAction}
                    </Button>
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                      {tier.secondaryAction}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Membership Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Connect</h4>
                  <p className="text-gray-700 mb-4">
                    Build relationships with climate innovators across Europe, including researchers, entrepreneurs, 
                    policymakers, investors, and industry leaders.
                  </p>
                  <h4 className="font-bold text-lg mb-2">Collaborate</h4>
                  <p className="text-gray-700">
                    Find project partners, form working groups, and participate in co-creation initiatives to develop 
                    climate solutions with lasting impact.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Learn</h4>
                  <p className="text-gray-700 mb-4">
                    Access exclusive resources, participate in skill-building workshops, and stay informed on the latest 
                    climate innovation developments and best practices.
                  </p>
                  <h4 className="font-bold text-lg mb-2">Grow</h4>
                  <p className="text-gray-700">
                    Discover funding opportunities, gain visibility for your work, and accelerate the development and 
                    scaling of your climate solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Ready to get started?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join our community today and be part of Europe's leading climate innovation network.
              </p>
              <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
                Become a Member
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Membership;
