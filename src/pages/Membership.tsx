
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Membership = () => {
  const membershipTypes = [
    {
      id: "individual",
      title: "Individual",
      price: "€99/year",
      summary: "For professionals, researchers, and climate enthusiasts",
      description: "Connect with Europe's climate innovation community as an individual member. Gain access to events, knowledge resources, and networking opportunities.",
      features: [
        "Full access to community platform and member directory",
        "Member rates for all Climate KIC events and programs",
        "Access to all knowledge hub resources and guides",
        "Participate in forum discussions and member groups",
        "Create a searchable profile in the member directory",
        "Apply for funding opportunities and partnerships",
        "Monthly innovation briefings via email"
      ],
      highlight: "Free 30-day trial available",
      ctaText: "Start Free Trial",
      ctaLink: "/join/individual"
    },
    {
      id: "organization",
      title: "Organization",
      price: "From €499/year",
      summary: "For companies, NGOs, research institutions and startups",
      description: "Establish your organization's presence in Europe's leading climate innovation community. Connect with potential partners, find talent, and showcase your work.",
      features: [
        "All Individual member benefits",
        "Multiple team member accounts (3-10 based on size)",
        "Featured organization profile with logo and case studies",
        "Ability to post opportunities and events to the community",
        "Recruit talent and find partners through the platform",
        "Priority access to funding calls and partnership programs",
        "Showcase your climate projects and innovations",
        "Co-host events and workshops with Climate KIC"
      ],
      highlight: "Custom pricing based on organization size and type",
      ctaText: "Request Quote",
      ctaLink: "/join/organization"
    },
    {
      id: "farmer",
      title: "Farmer",
      price: "€49/year",
      summary: "For agricultural professionals and farming organizations",
      description: "A specialized membership for those working in agriculture who are implementing or interested in climate-smart farming practices.",
      features: [
        "Access to agricultural innovation resources and case studies",
        "Connection to specialized farming community and experts",
        "Climate-smart agriculture guides and implementation tools",
        "Connect with ag-tech innovators and solution providers",
        "Specialized funding opportunities for sustainable farming",
        "Discounted access to sustainable agriculture workshops",
        "Showcase your climate-friendly agricultural practices"
      ],
      highlight: "3-month free trial for new members",
      ctaText: "Start 3-Month Trial",
      ctaLink: "/join/farmer"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-primary/20 to-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Join Our Climate Innovation Community</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Select the membership type that's right for you and become part of Europe's largest climate innovation network.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="individual" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="farmer">Farmer</TabsTrigger>
            </TabsList>
            
            {membershipTypes.map(membership => (
              <TabsContent key={membership.id} value={membership.id} className="animate-fade-in">
                <div className="bg-white rounded-lg border p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-secondary mb-2">{membership.title} Membership</h2>
                      <div className="text-3xl font-bold mb-2">{membership.price}</div>
                      <p className="text-gray-600">{membership.summary}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button 
                        size="lg" 
                        className="bg-primary text-secondary hover:bg-primary/90"
                        onClick={() => window.location.href = membership.ctaLink}
                      >
                        {membership.ctaText}
                      </Button>
                      <p className="text-sm text-accent-blue mt-2">{membership.highlight}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{membership.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {membership.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold mb-3">How to Join</h3>
                    <ol className="list-decimal pl-5 space-y-2 mb-6">
                      <li>Complete the online application form</li>
                      <li>Receive approval confirmation via email</li>
                      <li>Set up your profile and payment details</li>
                      <li>Start connecting with the community</li>
                    </ol>
                    <Button 
                      size="lg" 
                      className="bg-primary text-secondary hover:bg-primary/90"
                      onClick={() => window.location.href = membership.ctaLink}
                    >
                      {membership.ctaText}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">How does the free trial work?</h3>
                <p className="text-gray-600">Individual members get a 30-day free trial with full access to all platform features. You'll need to provide payment details, but won't be charged until after the trial period. You can cancel anytime during the trial.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I upgrade my membership later?</h3>
                <p className="text-gray-600">Yes, you can upgrade from Individual to Organization membership at any time. The remaining value of your current membership will be credited toward your new membership level.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">How many team members can I add with an Organization membership?</h3>
                <p className="text-gray-600">Organization memberships include between 3-10 member accounts depending on your organization's size and membership tier. Additional accounts can be added for an extra fee.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards and bank transfers for annual payments. Organizations can also request invoice-based payment.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Do you offer discounts for students or early-stage startups?</h3>
                <p className="text-gray-600">Yes, we have special rates for students, academic institutions, and early-stage startups. Contact our membership team for details.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Membership;
