
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Climate Innovation Summit 2025',
    date: 'June 15-17, 2025',
    location: 'Brussels, Belgium',
    type: 'Conference',
    description: 'Annual gathering of Europe's climate innovation leaders discussing breakthrough solutions and policy.'
  },
  {
    id: 2,
    title: 'Circular Economy Workshop Series',
    date: 'Monthly, Next: May 25, 2025',
    location: 'Online',
    type: 'Workshop',
    description: 'Practical sessions on implementing circular practices across different industries.'
  },
  {
    id: 3,
    title: 'Climate Tech Investor Forum',
    date: 'July 8, 2025',
    location: 'Berlin, Germany',
    type: 'Networking',
    description: 'Connect with investors focused on climate technology and sustainability solutions.'
  }
];

const FeaturedEvents = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">Upcoming Events</h2>
          <Link to="/events" className="text-accent-blue font-medium hover:underline">
            View All Events
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(event => (
            <Card key={event.id} className="border border-gray-200 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <span className="bg-primary/20 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500 flex items-center mb-1">
                  <Calendar size={16} className="mr-1" />
                  {event.date}
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {event.location}
                </div>
                <p className="text-sm text-gray-700">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Event Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
