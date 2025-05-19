
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const members = [
  {
    id: 1,
    name: "Green Energy Solutions",
    type: "Organization",
    location: "Amsterdam, Netherlands",
    field: "Renewable Energy",
    avatar: "GE",
    description: "Leading renewable energy provider specializing in solar and wind integration technologies."
  },
  {
    id: 2,
    name: "Dr. Maria Schmidt",
    type: "Individual",
    location: "Berlin, Germany",
    field: "Urban Planning",
    avatar: "MS",
    description: "Climate resilience expert designing adaptation strategies for European cities."
  },
  {
    id: 3,
    name: "CircularTech",
    type: "Organization",
    location: "Barcelona, Spain",
    field: "Circular Economy",
    avatar: "CT",
    description: "Developing technology solutions to measure and enhance circular resource flows."
  },
  {
    id: 4,
    name: "Klaus Bergmann",
    type: "Farmer",
    location: "Bavaria, Germany",
    field: "Regenerative Agriculture",
    avatar: "KB",
    description: "Fourth-generation farmer implementing carbon sequestration through regenerative practices."
  }
];

const MemberHighlights = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">Meet Our Members</h2>
          <Link to="/directory" className="text-accent-blue font-medium hover:underline">
            Browse Full Directory
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map(member => (
            <Card key={member.id} className="border border-gray-200 hover:border-primary transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="bg-secondary text-white">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-medium text-secondary">{member.name}</h3>
                    <div className="text-sm text-gray-500">
                      <span className="inline-block bg-gray-100 rounded-full px-2 py-0.5 mr-1">
                        {member.type}
                      </span>
                      <span>{member.field}</span>
                    </div>
                    <div className="text-xs text-gray-500">{member.location}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{member.description}</p>
                <Link to={`/directory/${member.id}`} className="text-sm text-accent-blue hover:underline">
                  View Profile →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberHighlights;
