
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Directory = () => {
  // Sample members data with updated images
  const members = [
    {
      id: 1,
      name: 'Greentech Solutions',
      type: 'Organization',
      location: 'Amsterdam, Netherlands',
      focus: 'Renewable Energy',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80',
      color: 'bg-emerald-100',
      initial: 'GS'
    },
    {
      id: 2,
      name: 'Dr. Maria Schmidt',
      type: 'Individual',
      location: 'Berlin, Germany',
      focus: 'Climate Policy',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
      color: 'bg-blue-100',
      initial: 'MS'
    },
    {
      id: 3,
      name: 'EcoFarm Cooperative',
      type: 'Organization',
      location: 'Barcelona, Spain',
      focus: 'Sustainable Agriculture',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
      color: 'bg-green-100',
      initial: 'EC'
    },
    {
      id: 4,
      name: 'Nordic Clean Tech',
      type: 'Organization',
      location: 'Stockholm, Sweden',
      focus: 'Water Technologies',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80',
      color: 'bg-sky-100',
      initial: 'NC'
    },
    {
      id: 5,
      name: 'Dr. Thomas Weber',
      type: 'Individual',
      location: 'Vienna, Austria',
      focus: 'Urban Planning',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80',
      color: 'bg-indigo-100',
      initial: 'TW'
    },
    {
      id: 6,
      name: 'Circular Materials Institute',
      type: 'Organization',
      location: 'Copenhagen, Denmark',
      focus: 'Waste Reduction',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
      color: 'bg-amber-100',
      initial: 'CM'
    },
    {
      id: 7,
      name: 'Sofia Kovacs',
      type: 'Individual',
      location: 'Budapest, Hungary',
      focus: 'Biodiversity',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80',
      color: 'bg-rose-100',
      initial: 'SK'
    },
    {
      id: 8,
      name: 'Alpine Climate Foundation',
      type: 'Organization',
      location: 'Zürich, Switzerland',
      focus: 'Climate Finance',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80',
      color: 'bg-teal-100',
      initial: 'AC'
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="bg-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Member Directory</h1>
            <p className="text-xl max-w-2xl">
              Connect with individuals and organizations in our community who are driving climate innovation across Europe.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search members by name, expertise or location..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold text-secondary mb-4">Filter Members</h2>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Member Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="org" className="mr-2"/>
                      <label htmlFor="org">Organizations</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="indiv" className="mr-2"/>
                      <label htmlFor="indiv">Individuals</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="farmers" className="mr-2"/>
                      <label htmlFor="farmers">Farmers</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Focus Areas</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="energy" className="mr-2"/>
                      <label htmlFor="energy">Renewable Energy</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="agriculture" className="mr-2"/>
                      <label htmlFor="agriculture">Sustainable Agriculture</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="policy" className="mr-2"/>
                      <label htmlFor="policy">Climate Policy</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="circular" className="mr-2"/>
                      <label htmlFor="circular">Circular Economy</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="water" className="mr-2"/>
                      <label htmlFor="water">Water Technologies</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Region</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="north" className="mr-2"/>
                      <label htmlFor="north">Northern Europe</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="south" className="mr-2"/>
                      <label htmlFor="south">Southern Europe</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="east" className="mr-2"/>
                      <label htmlFor="east">Eastern Europe</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="west" className="mr-2"/>
                      <label htmlFor="west">Western Europe</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Filter size={16} className="mr-1" /> Apply Filters
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {members.map(member => (
                  <Card key={member.id} className="border border-gray-200 hover:border-primary transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <Avatar className={`h-12 w-12 ${member.color}`}>
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.initial}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <h3 className="font-medium text-lg">{member.name}</h3>
                          <div className="flex items-center">
                            <span className="text-xs bg-primary/20 text-secondary px-2 py-0.5 rounded-full mr-2">
                              {member.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              {member.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2">
                        <span className="text-sm font-medium">Focus: </span>
                        <span className="text-sm">{member.focus}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                        View Profile <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Load More Members
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

export default Directory;
