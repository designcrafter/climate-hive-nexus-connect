
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Briefcase, Award, Handshake, Search } from 'lucide-react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const opportunityTypes = [
  { id: 'all', label: 'All Types' },
  { id: 'funding', label: 'Funding', icon: Award },
  { id: 'partnership', label: 'Partnership', icon: Handshake },
  { id: 'job', label: 'Jobs', icon: Briefcase },
];

const opportunities = [
  {
    id: 1,
    title: 'EIC Accelerator: Green Deal innovations',
    category: 'Funding',
    deadline: 'June 30, 2025',
    amount: '€2.5M',
    description: 'Funding for SMEs and start-ups developing breakthrough green innovations for economic recovery.',
    tags: ['CleanTech', 'Startup', 'GreenDeal'],
    eligibility: 'EU-based SMEs and startups',
    featured: true,
  },
  {
    id: 2,
    title: 'Climate-KIC Demonstrator Project Partners',
    category: 'Partnership',
    deadline: 'Open',
    description: 'Seeking industrial partners for testing new carbon capture technology in manufacturing settings.',
    tags: ['CarbonCapture', 'Industry', 'Manufacturing'],
    eligibility: 'Industrial manufacturers in EU',
    featured: true,
  },
  {
    id: 3,
    title: 'Urban Adaptation Solutions Challenge',
    category: 'Funding',
    deadline: 'August 15, 2025',
    amount: '€100K',
    description: 'Competition for innovative urban solutions that help cities adapt to increasing climate risks.',
    tags: ['Urban', 'Adaptation', 'Challenge'],
    eligibility: 'Open to all innovators',
  },
  {
    id: 4,
    title: 'Sustainable Agriculture Research Consortium',
    category: 'Partnership',
    deadline: 'July 1, 2025',
    description: 'Research institutions seeking partners for joint work on regenerative farming practices.',
    tags: ['Agriculture', 'Research', 'Regenerative'],
    eligibility: 'Research institutions and agricultural organizations',
  },
  {
    id: 5,
    title: 'Senior Climate Policy Advisor',
    category: 'Job',
    deadline: 'May 30, 2025',
    location: 'Brussels, Belgium',
    description: 'Looking for an experienced climate policy advisor to join our EU advocacy team.',
    tags: ['Policy', 'Advocacy', 'Senior'],
    eligibility: '5+ years experience in climate policy',
  },
  {
    id: 6,
    title: 'LIFE Programme: Climate Action Sub-programme',
    category: 'Funding',
    deadline: 'September 5, 2025',
    amount: '€500K-€2M',
    description: 'EU funding for projects that develop, demonstrate and promote innovative techniques and approaches for climate action.',
    tags: ['EU', 'Innovation', 'ClimateAction'],
    eligibility: 'Public and private organizations in EU',
  },
];

const OpportunityCard = ({ opportunity }: { opportunity: typeof opportunities[0] }) => {
  const categoryColors = {
    Funding: 'bg-accent-orange/20 text-accent-orange border-accent-orange',
    Partnership: 'bg-accent-blue/20 text-accent-blue border-accent-blue',
    Job: 'bg-accent-purple/20 text-accent-purple border-accent-purple',
  };
  
  const categoryColor = categoryColors[opportunity.category as keyof typeof categoryColors];
  
  return (
    <Card className={`border border-gray-200 hover:shadow-md transition-shadow ${opportunity.featured ? 'border-l-4 border-l-primary' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={`${categoryColor} border`}>
            {opportunity.category}
          </Badge>
          {opportunity.amount && (
            <span className="font-medium text-accent-blue">
              {opportunity.amount}
            </span>
          )}
        </div>
        <CardTitle className="text-xl">{opportunity.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-sm">
          <span className="font-medium">Deadline:</span> {opportunity.deadline}
          {opportunity.location && (
            <div className="mt-1">
              <span className="font-medium">Location:</span> {opportunity.location}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {opportunity.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="text-xs text-gray-500 mb-3">
          <span className="font-medium">Eligibility:</span> {opportunity.eligibility}
        </div>
        
        <Link to={`/opportunities/${opportunity.id}`} className="block text-accent-blue hover:underline font-medium text-sm">
          Learn more →
        </Link>
      </CardContent>
    </Card>
  );
};

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredOpportunities = opportunities.filter(opportunity => {
    // Filter by type
    if (activeTab !== 'all' && opportunity.category.toLowerCase() !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !opportunity.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Climate Innovation Opportunities</h1>
            <p className="text-xl opacity-90 mb-6">
              Discover funding, partnerships, and career opportunities to accelerate climate action across Europe.
            </p>
            <div className="flex items-center gap-4 bg-white/10 p-2 rounded-full max-w-xl">
              <Search size={20} className="text-gray-300 ml-2" />
              <Input 
                type="text" 
                placeholder="Search opportunities..." 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-300" 
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button size="sm" className="rounded-full bg-primary text-secondary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="bg-white border border-gray-200 p-1 rounded-full">
                {opportunityTypes.map((type) => (
                  <TabsTrigger 
                    key={type.id} 
                    value={type.id} 
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-secondary"
                  >
                    {type.icon && <type.icon size={16} className="mr-2" />}
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {opportunityTypes.map((type) => (
                <TabsContent key={type.id} value={type.id} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOpportunities.map(opportunity => (
                      <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                    ))}
                  </div>
                  
                  {filteredOpportunities.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                      <p className="text-gray-500">No opportunities found matching your criteria</p>
                      <Button 
                        variant="link" 
                        onClick={() => {
                          setActiveTab('all');
                          setSearchQuery('');
                        }}
                      >
                        Clear filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="text-center mt-8">
            <Button className="rounded-full bg-secondary text-white hover:bg-secondary/90">
              Load More Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;
