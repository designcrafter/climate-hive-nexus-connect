
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Filter, List, ArrowRight } from 'lucide-react';

const Events = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Climate Innovation Summit 2025',
      date: 'June 15-17, 2025',
      location: 'Brussels, Belgium',
      type: 'Conference',
    },
    {
      id: 2,
      title: 'Circular Economy Workshop Series',
      date: 'Monthly, Next: May 25, 2025',
      location: 'Online',
      type: 'Workshop',
    },
    {
      id: 3,
      title: 'Climate Tech Investor Forum',
      date: 'July 8, 2025',
      location: 'Berlin, Germany',
      type: 'Networking',
    },
    {
      id: 4,
      title: 'Sustainable Agriculture Symposium',
      date: 'August 3-5, 2025',
      location: 'Copenhagen, Denmark',
      type: 'Conference',
    },
    {
      id: 5,
      title: 'Climate Policy Dialogue',
      date: 'September 12, 2025',
      location: 'Amsterdam, Netherlands',
      type: 'Workshop',
    },
    {
      id: 6,
      title: 'Green Energy Expo',
      date: 'October 1-3, 2025',
      location: 'Barcelona, Spain',
      type: 'Exhibition',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="bg-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Climate Innovation Events</h1>
            <p className="text-xl max-w-2xl">
              Connect with climate innovators across Europe through our diverse range of events, 
              workshops, and networking opportunities.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="w-full md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold text-secondary mb-4">Filter Events</h2>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Event Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="conference" className="mr-2"/>
                      <label htmlFor="conference">Conference</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="workshop" className="mr-2"/>
                      <label htmlFor="workshop">Workshop</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="networking" className="mr-2"/>
                      <label htmlFor="networking">Networking</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="webinar" className="mr-2"/>
                      <label htmlFor="webinar">Webinar</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="online" className="mr-2"/>
                      <label htmlFor="online">Online</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="in-person" className="mr-2"/>
                      <label htmlFor="in-person">In Person</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Date Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="upcoming" className="mr-2"/>
                      <label htmlFor="upcoming">Upcoming</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="this-month" className="mr-2"/>
                      <label htmlFor="this-month">This Month</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="next-3-months" className="mr-2"/>
                      <label htmlFor="next-3-months">Next 3 Months</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Filter size={16} className="mr-1" /> Apply Filters
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-secondary">All Events</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-secondary text-secondary">
                    <List size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-secondary text-secondary">
                    <Calendar size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map(event => (
                  <Card key={event.id} className="border border-gray-200 hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-primary/20 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-500 mb-4">
                        {event.location}
                      </div>
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                        View Details <ArrowRight size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Load More Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Events;
