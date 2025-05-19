
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar as CalendarIcon, Filter, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock event data
const events = [
  {
    id: 1,
    title: "Climate Innovation Summit 2025",
    date: new Date("2025-06-15"),
    endDate: new Date("2025-06-17"),
    location: "Brussels, Belgium",
    type: "Conference",
    description: "Annual gathering of Europe's climate innovation leaders discussing breakthrough solutions and policy.",
    organizer: "Climate KIC",
    attendees: 450,
    image: null,
    featured: true
  },
  {
    id: 2,
    title: "Circular Economy Workshop Series",
    date: new Date("2025-05-25"),
    location: "Online",
    type: "Workshop",
    description: "Practical sessions on implementing circular practices across different industries.",
    organizer: "CircularTech",
    attendees: 120,
    image: null
  },
  {
    id: 3,
    title: "Climate Tech Investor Forum",
    date: new Date("2025-07-08"),
    location: "Berlin, Germany",
    type: "Networking",
    description: "Connect with investors focused on climate technology and sustainability solutions.",
    organizer: "Green Energy Solutions",
    attendees: 200,
    image: null,
    featured: true
  },
  {
    id: 4,
    title: "Regenerative Agriculture Workshop",
    date: new Date("2025-05-10"),
    location: "Paris, France",
    type: "Workshop",
    description: "Hands-on workshop on regenerative farming practices and carbon sequestration.",
    organizer: "Sustainable Farms Co-op",
    attendees: 80,
    image: null
  },
  {
    id: 5,
    title: "Urban Adaptation Policy Roundtable",
    date: new Date("2025-08-12"),
    location: "Copenhagen, Denmark",
    type: "Roundtable",
    description: "Discussion on urban climate adaptation policies and implementation strategies.",
    organizer: "Climate KIC",
    attendees: 60,
    image: null
  },
  {
    id: 6,
    title: "Green Finance Innovation Challenge",
    date: new Date("2025-09-20"),
    location: "Amsterdam, Netherlands",
    type: "Competition",
    description: "Pitch competition for innovative green finance instruments and solutions.",
    organizer: "Climate KIC",
    attendees: 150,
    image: null
  }
];

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedFilters, setSelectedFilters] = useState({
    type: {
      conference: false,
      workshop: false,
      networking: false,
      webinar: false,
      roundtable: false
    },
    location: {
      online: false,
      inPerson: false
    },
    organizer: {
      climateKIC: false,
      partners: false,
      members: false
    }
  });

  // Filter events based on selected date and filters
  const filteredEvents = events.filter(event => {
    // For simplicity, we're only filtering by month/year in this prototype
    if (date) {
      if (event.date.getMonth() !== date.getMonth() || 
          event.date.getFullYear() !== date.getFullYear()) {
        return false;
      }
    }
    
    // In a real app, we would also filter by event type, location, etc. based on selectedFilters
    return true;
  });

  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-primary/20 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Community Events</h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-8">
              Discover upcoming events, workshops, and networking opportunities hosted by Climate KIC and community members.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with calendar and filters */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg border p-4 mb-6">
                <h2 className="font-semibold text-lg mb-4">Event Calendar</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              
              <div className="bg-white rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg flex items-center">
                    <Filter size={18} className="mr-2" />
                    Filters
                  </h2>
                  <Button variant="ghost" size="sm" className="text-sm">Reset</Button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Event Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-conference" />
                      <label htmlFor="type-conference" className="text-sm">Conference</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-workshop" />
                      <label htmlFor="type-workshop" className="text-sm">Workshop</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-networking" />
                      <label htmlFor="type-networking" className="text-sm">Networking</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-webinar" />
                      <label htmlFor="type-webinar" className="text-sm">Webinar</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="location-online" />
                      <label htmlFor="location-online" className="text-sm">Online</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="location-inperson" />
                      <label htmlFor="location-inperson" className="text-sm">In-Person</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Organizer</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="org-climatekic" />
                      <label htmlFor="org-climatekic" className="text-sm">Climate KIC</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="org-partners" />
                      <label htmlFor="org-partners" className="text-sm">Partner Organizations</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="org-members" />
                      <label htmlFor="org-members" className="text-sm">Community Members</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Event listings */}
            <div className="md:w-2/3">
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-6">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming">
                  <div className="space-y-6">
                    {filteredEvents.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No events found for the selected date and filters.</p>
                        <Button variant="outline" className="mt-4" onClick={() => setDate(new Date())}>
                          Reset Date
                        </Button>
                      </div>
                    ) : (
                      filteredEvents.map(event => (
                        <Card key={event.id} className={`overflow-hidden ${event.featured ? 'ring-1 ring-primary' : ''}`}>
                          <div className="grid md:grid-cols-4">
                            {event.image && (
                              <div className="bg-gray-100 h-full">
                                <img src={event.image} alt={event.title} className="object-cover h-full w-full" />
                              </div>
                            )}
                            <div className={event.image ? 'col-span-3 p-6' : 'col-span-4 p-6'}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="bg-primary/20 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                                  {event.type}
                                </span>
                                <div className="text-sm text-gray-500">
                                  {event.attendees} attendees
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                              
                              <div className="flex flex-wrap mb-3">
                                <div className="flex items-center text-sm text-gray-600 mr-4 mb-2">
                                  <CalendarIcon size={16} className="mr-1" />
                                  <span>
                                    {event.date.toLocaleDateString('en-US', {
                                      month: 'long',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}
                                    {event.endDate && ` - ${event.endDate.toLocaleDateString('en-US', {
                                      month: 'long',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}`}
                                  </span>
                                </div>
                                
                                <div className="flex items-center text-sm text-gray-600 mb-2">
                                  <MapPin size={16} className="mr-1" />
                                  {event.location}
                                </div>
                              </div>
                              
                              <p className="text-gray-700 mb-4">{event.description}</p>
                              
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500">
                                  Organized by: {event.organizer}
                                </div>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">Details</Button>
                                  <Button className="bg-primary text-secondary hover:bg-primary/90" size="sm">RSVP</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="past">
                  <div className="text-center py-8 text-gray-500">
                    <p>Past events will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Events;
