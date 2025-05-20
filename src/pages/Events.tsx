
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Toggle } from '@/components/ui/toggle';
import { Calendar, Filter, List, ArrowRight, MapPin, Clock, Video, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Events = () => {
  // Sample events data with added details
  const events = [
    {
      id: 1,
      title: 'Climate Innovation Summit 2025',
      date: 'June 15-17, 2025',
      location: 'Brussels, Belgium',
      type: 'Conference',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
      isOnline: false,
      isFeatured: true,
      attendees: 250,
      description: 'Join industry leaders to shape the future of climate innovation across Europe.'
    },
    {
      id: 2,
      title: 'Circular Economy Workshop Series',
      date: 'Monthly, Next: May 25, 2025',
      location: 'Online',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      isOnline: true,
      isFeatured: false,
      attendees: 100,
      description: 'Monthly workshops exploring practical applications of circular economy principles.'
    },
    {
      id: 3,
      title: 'Climate Tech Investor Forum',
      date: 'July 8, 2025',
      location: 'Berlin, Germany',
      type: 'Networking',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      isOnline: false,
      isFeatured: true,
      attendees: 150,
      description: 'Connect with investors looking to fund the next generation of climate solutions.'
    },
    {
      id: 4,
      title: 'Sustainable Agriculture Symposium',
      date: 'August 3-5, 2025',
      location: 'Copenhagen, Denmark',
      type: 'Conference',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      isOnline: false,
      isFeatured: false,
      attendees: 200,
      description: 'Explore innovation in sustainable farming and regenerative agriculture practices.'
    },
    {
      id: 5,
      title: 'Climate Policy Dialogue',
      date: 'September 12, 2025',
      location: 'Amsterdam, Netherlands',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      isOnline: false,
      isFeatured: false,
      attendees: 80,
      description: 'Policy experts discuss frameworks to accelerate climate action across Europe.'
    },
    {
      id: 6,
      title: 'Green Energy Expo',
      date: 'October 1-3, 2025',
      location: 'Barcelona, Spain',
      type: 'Exhibition',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      isOnline: false,
      isFeatured: true,
      attendees: 500,
      description: 'The largest exhibition of renewable energy technologies in Southern Europe.'
    },
  ];

  // Get event type background color based on type
  const getEventTypeColor = (type) => {
    switch(type) {
      case 'Conference': return 'bg-accent-blue/20 text-accent-blue';
      case 'Workshop': return 'bg-accent-purple/20 text-accent-purple';
      case 'Networking': return 'bg-accent-orange/20 text-accent-orange';
      case 'Exhibition': return 'bg-primary/30 text-secondary';
      default: return 'bg-primary/20 text-secondary';
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero Section with background image and animation */}
        <div 
          className="relative bg-secondary text-white py-16 overflow-hidden animate-fade-in"
          style={{
            backgroundImage: `linear-gradient(rgba(29, 73, 56, 0.85), rgba(29, 73, 56, 0.95)), url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Climate Innovation Events
              </h1>
              <p className="text-xl max-w-2xl mb-6">
                Connect with climate innovators across Europe through our diverse range of events, 
                workshops, and networking opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-primary text-secondary hover:bg-primary/90">
                  Browse All Events <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-secondary">
                  Submit Your Event
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-accent-purple/10 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            {/* Enhanced Filter Section */}
            <div className="w-full md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-secondary">Filter Events</h2>
                  <Filter size={18} className="text-secondary opacity-70" />
                </div>
                
                <Accordion type="single" collapsible defaultValue="event-type" className="w-full">
                  <AccordionItem value="event-type" className="border-b border-gray-200">
                    <AccordionTrigger className="hover:no-underline text-secondary font-medium">Event Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {['Conference', 'Workshop', 'Networking', 'Exhibition', 'Webinar'].map((type) => (
                          <div className="flex items-center space-x-2" key={type}>
                            <Checkbox id={type.toLowerCase()} />
                            <label htmlFor={type.toLowerCase()} className="text-sm font-medium leading-none cursor-pointer">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="location" className="border-b border-gray-200">
                    <AccordionTrigger className="hover:no-underline text-secondary font-medium">Location</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="online" />
                          <label htmlFor="online" className="text-sm font-medium leading-none cursor-pointer">
                            Online
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="in-person" />
                          <label htmlFor="in-person" className="text-sm font-medium leading-none cursor-pointer">
                            In Person
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="date-range" className="border-b border-gray-200">
                    <AccordionTrigger className="hover:no-underline text-secondary font-medium">Date Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {['Upcoming', 'This Month', 'Next 3 Months'].map((period) => (
                          <div className="flex items-center space-x-2" key={period}>
                            <Checkbox id={period.toLowerCase().replace(/\s+/g, '-')} />
                            <label 
                              htmlFor={period.toLowerCase().replace(/\s+/g, '-')} 
                              className="text-sm font-medium leading-none cursor-pointer"
                            >
                              {period}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-6">
                  <Button className="w-full rounded-full bg-primary text-secondary hover:bg-primary/90 transition-all">
                    <Filter size={16} className="mr-2" /> Apply Filters
                  </Button>
                  <Button variant="outline" className="w-full mt-2 rounded-full border-gray-300 hover:bg-gray-100 text-gray-600">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-secondary">All Events</h2>
                <div className="flex gap-2">
                  <Toggle variant="outline" aria-label="List view" className="border-secondary text-secondary data-[state=on]:bg-secondary data-[state=on]:text-white">
                    <List size={16} />
                  </Toggle>
                  <Toggle variant="outline" aria-label="Calendar view" className="border-secondary text-secondary data-[state=on]:bg-secondary data-[state=on]:text-white">
                    <Calendar size={16} />
                  </Toggle>
                </div>
              </div>
              
              {/* Enhanced Event Cards with staggered layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <Card 
                    key={event.id} 
                    className={`border border-gray-200 overflow-hidden rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {event.isOnline && (
                          <Badge variant="secondary" className="bg-blue-500/90 hover:bg-blue-500 text-white">
                            <Video size={12} className="mr-1" /> Online
                          </Badge>
                        )}
                        {event.isFeatured && (
                          <Badge className="bg-primary/90 text-secondary hover:bg-primary">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                        <span className="text-sm font-medium text-gray-500 flex items-center">
                          <Clock size={14} className="inline mr-1" /> {event.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-secondary">{event.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                      
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {event.attendees}+ attendees
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                        View Details <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <Button variant="outline" size="lg" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
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
