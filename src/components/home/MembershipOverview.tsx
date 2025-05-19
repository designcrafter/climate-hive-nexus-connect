
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipOverview = () => {
  const membershipTypes = [
    {
      title: "Individual",
      price: "€99/year",
      features: [
        "Full access to community platform",
        "Event discounts",
        "Knowledge hub resources",
        "Member directory access",
        "Network with climate innovators",
        "Participate in forum discussions"
      ],
      primaryFeature: "Perfect for professionals, researchers, and enthusiasts",
      ctaText: "Join as Individual",
      ctaLink: "/join/individual",
      accent: "primary",
      trial: "Free 30-day trial"
    },
    {
      title: "Organization",
      price: "From €499/year",
      features: [
        "All individual benefits",
        "Multiple team member accounts",
        "Featured organization profile",
        "Post opportunities & events",
        "Recruit talent from the network",
        "Priority access to funding calls"
      ],
      primaryFeature: "Ideal for companies, NGOs, and institutions",
      ctaText: "Join as Organization",
      ctaLink: "/join/organization",
      accent: "secondary",
      trial: "Custom pricing available"
    },
    {
      title: "Farmer",
      price: "€49/year",
      features: [
        "Access to agricultural resources",
        "Specialized farming community",
        "Climate-smart agriculture guides",
        "Connect with ag-tech innovators",
        "Funding opportunities for farmers",
        "Sustainable practice workshops"
      ],
      primaryFeature: "Tailored for agricultural professionals",
      ctaText: "Join as Farmer",
      ctaLink: "/join/farmer",
      accent: "accent-orange",
      trial: "3-month free trial"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-3">Join Our Community</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Select the membership that's right for you and become part of Europe's largest climate innovation community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTypes.map((membership, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 flex flex-col h-full transition-all hover:shadow-md"
              style={{
                borderColor: membership.title === "Individual" ? "#E0E56E" : 
                            membership.title === "Organization" ? "#1D4938" : "#E19F51"
              }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{membership.title}</h3>
                <div className="text-2xl font-bold mb-2">{membership.price}</div>
                {membership.trial && (
                  <div className="text-sm text-accent-blue">{membership.trial}</div>
                )}
              </div>
              
              <div className="text-sm text-gray-600 mb-4">{membership.primaryFeature}</div>
              
              <ul className="mb-8 flex-grow">
                {membership.features.map((feature, i) => (
                  <li key={i} className="flex items-start mb-3">
                    <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={membership.ctaLink} className="mt-auto">
                <Button 
                  className="w-full"
                  style={{
                    backgroundColor: membership.title === "Individual" ? "#E0E56E" : 
                                    membership.title === "Organization" ? "#1D4938" : "#E19F51",
                    color: membership.title === "Individual" ? "#1D4938" : 
                          membership.title === "Organization" ? "#FFFFFF" : "#1D4938"
                  }}
                >
                  {membership.ctaText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/join" className="text-accent-blue hover:underline font-medium">
            Compare all membership features in detail →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipOverview;
