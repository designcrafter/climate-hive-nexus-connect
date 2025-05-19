
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const opportunities = [
  {
    id: 1,
    title: 'EIC Accelerator: Green Deal innovations',
    category: 'Funding',
    deadline: 'June 30, 2025',
    amount: '€2.5M',
    description: 'Funding for SMEs and start-ups developing breakthrough green innovations for economic recovery.'
  },
  {
    id: 2,
    title: 'Climate-KIC Demonstrator Project Partners',
    category: 'Partnership',
    deadline: 'Open',
    description: 'Seeking industrial partners for testing new carbon capture technology in manufacturing settings.'
  },
  {
    id: 3,
    title: 'Urban Adaptation Solutions Challenge',
    category: 'Challenge',
    deadline: 'August 15, 2025',
    amount: '€100K',
    description: 'Competition for innovative urban solutions that help cities adapt to increasing climate risks.'
  },
  {
    id: 4,
    title: 'Sustainable Agriculture Research Consortium',
    category: 'Collaboration',
    deadline: 'July 1, 2025',
    description: 'Research institutions seeking partners for joint work on regenerative farming practices.'
  }
];

const FeaturedOpportunities = () => {
  const categoryColors = {
    'Funding': 'bg-accent-orange/20 text-accent-orange border-accent-orange',
    'Partnership': 'bg-accent-blue/20 text-accent-blue border-accent-blue',
    'Challenge': 'bg-accent-purple/20 text-accent-purple border-accent-purple',
    'Collaboration': 'bg-accent-blue/20 text-accent-blue border-accent-blue'
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">Latest Opportunities</h2>
          <Link to="/opportunities" className="text-accent-blue font-medium hover:underline">
            View All Opportunities
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map(opportunity => (
            <Card key={opportunity.id} className="border border-gray-200 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={`${categoryColors[opportunity.category as keyof typeof categoryColors]} border rounded-full`}>
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
                </div>
                <p className="text-sm text-gray-700">
                  {opportunity.description}
                </p>
                <Link to={`/opportunities/${opportunity.id}`} className="block mt-4 text-accent-blue hover:underline font-medium">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOpportunities;
