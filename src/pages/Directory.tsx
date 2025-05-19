
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, MapPin, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock directory data
const directoryData = [
  {
    id: 1,
    name: "Green Energy Solutions",
    type: "Organization",
    orgType: "Company",
    location: "Amsterdam, Netherlands",
    field: "Renewable Energy",
    skills: ["Solar Energy", "Grid Integration", "Energy Storage"],
    avatar: "GE",
    description: "Leading renewable energy provider specializing in solar and wind integration technologies.",
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: "Dr. Maria Schmidt",
    type: "Individual",
    role: "Researcher",
    location: "Berlin, Germany",
    field: "Urban Planning",
    skills: ["Climate Adaptation", "Urban Resilience", "Policy"],
    avatar: "MS",
    description: "Climate resilience expert designing adaptation strategies for European cities.",
    verified: true
  },
  {
    id: 3,
    name: "CircularTech",
    type: "Organization",
    orgType: "Startup",
    location: "Barcelona, Spain",
    field: "Circular Economy",
    skills: ["Waste Reduction", "Recycling Technology", "Material Science"],
    avatar: "CT",
    description: "Developing technology solutions to measure and enhance circular resource flows.",
    featured: true
  },
  {
    id: 4,
    name: "Klaus Bergmann",
    type: "Farmer",
    location: "Bavaria, Germany",
    field: "Regenerative Agriculture",
    skills: ["Carbon Sequestration", "Sustainable Farming", "Soil Health"],
    avatar: "KB",
    description: "Fourth-generation farmer implementing carbon sequestration through regenerative practices."
  },
  {
    id: 5,
    name: "CleanWave Technologies",
    type: "Organization",
    orgType: "Company",
    location: "Copenhagen, Denmark",
    field: "Water Management",
    skills: ["Water Treatment", "Resource Recovery", "Smart Monitoring"],
    avatar: "CW",
    description: "Innovative solutions for water treatment and management in urban environments."
  },
  {
    id: 6,
    name: "Elena Rossi",
    type: "Individual",
    role: "Consultant",
    location: "Milan, Italy",
    field: "Sustainable Finance",
    skills: ["ESG Investing", "Green Bonds", "Climate Risk Assessment"],
    avatar: "ER",
    description: "Financial expert helping organizations align portfolios with climate goals and ESG criteria."
  },
  {
    id: 7,
    name: "Sustainable Farms Co-op",
    type: "Organization",
    orgType: "Cooperative",
    location: "Bordeaux, France",
    field: "Agriculture",
    skills: ["Organic Farming", "Local Food Systems", "Biodiversity"],
    avatar: "SF",
    description: "Farmer cooperative implementing climate-friendly agricultural practices across the region."
  },
  {
    id: 8,
    name: "Dr. Thomas Weber",
    type: "Individual",
    role: "Academic",
    location: "Vienna, Austria",
    field: "Carbon Capture",
    skills: ["CCUS Technology", "CO2 Utilization", "Climate Policy"],
    avatar: "TW",
    description: "Professor researching next-generation carbon capture and utilization technologies."
  }
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: {
      individual: false,
      organization: false,
      farmer: false,
    },
    field: {
      energy: false,
      agriculture: false,
      water: false,
      circular: false,
      finance: false,
      urban: false,
      policy: false,
      transport: false,
    },
    location: {
      northern: false,
      western: false,
      eastern: false,
      southern: false,
    }
  });

  // Filter members based on search term and filters
  const filteredMembers = directoryData.filter(member => {
    // Search term filtering
    if (searchTerm && 
        !member.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !member.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !member.field.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Type filtering
    const typeFiltersSelected = 
      selectedFilters.type.individual || 
      selectedFilters.type.organization || 
      selectedFilters.type.farmer;
    
    if (typeFiltersSelected) {
      if (
        (member.type === "Individual" && !selectedFilters.type.individual) ||
        (member.type === "Organization" && !selectedFilters.type.organization) ||
        (member.type === "Farmer" && !selectedFilters.type.farmer)
      ) {
        return false;
      }
    }
    
    // For simplicity, we're not implementing the full field and location filtering logic
    // In a real app, we would check each selected filter against the member properties
    
    return true;
  });

  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-primary/20 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Member Directory</h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-8">
              Connect with climate innovators, experts, and organizations across Europe.
            </p>
            
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                type="search" 
                placeholder="Search by name, expertise, or keyword..." 
                className="pl-10 py-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg border p-4 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg flex items-center">
                    <Filter size={18} className="mr-2" />
                    Filters
                  </h2>
                  <Button variant="ghost" size="sm" className="text-sm">Reset</Button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Member Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-individual" 
                        checked={selectedFilters.type.individual}
                        onCheckedChange={(checked) => 
                          setSelectedFilters({
                            ...selectedFilters, 
                            type: {...selectedFilters.type, individual: !!checked}
                          })
                        }
                      />
                      <label htmlFor="type-individual" className="text-sm">
                        Individual Members
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-org" 
                        checked={selectedFilters.type.organization}
                        onCheckedChange={(checked) => 
                          setSelectedFilters({
                            ...selectedFilters, 
                            type: {...selectedFilters.type, organization: !!checked}
                          })
                        }
                      />
                      <label htmlFor="type-org" className="text-sm">
                        Organizations
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-farmer" 
                        checked={selectedFilters.type.farmer}
                        onCheckedChange={(checked) => 
                          setSelectedFilters({
                            ...selectedFilters, 
                            type: {...selectedFilters.type, farmer: !!checked}
                          })
                        }
                      />
                      <label htmlFor="type-farmer" className="text-sm">
                        Farmers
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Field of Work</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-energy" />
                      <label htmlFor="field-energy" className="text-sm">
                        Energy
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-agriculture" />
                      <label htmlFor="field-agriculture" className="text-sm">
                        Agriculture
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-circular" />
                      <label htmlFor="field-circular" className="text-sm">
                        Circular Economy
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-urban" />
                      <label htmlFor="field-urban" className="text-sm">
                        Urban Planning
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-finance" />
                      <label htmlFor="field-finance" className="text-sm">
                        Finance & Investment
                      </label>
                    </div>
                  </div>
                  <Button variant="link" size="sm" className="text-xs text-accent-blue mt-1 p-0">
                    + Show more fields
                  </Button>
                </div>
                
                <div className="mb-2">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="location-north" />
                      <label htmlFor="location-north" className="text-sm">
                        Northern Europe
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="location-west" />
                      <label htmlFor="location-west" className="text-sm">
                        Western Europe
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="location-east" />
                      <label htmlFor="location-east" className="text-sm">
                        Eastern Europe
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="location-south" />
                      <label htmlFor="location-south" className="text-sm">
                        Southern Europe
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Directory results */}
            <div className="md:w-3/4">
              <div className="mb-6">
                <Tabs defaultValue="grid">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600">
                      {filteredMembers.length} Members Found
                    </div>
                    <TabsList>
                      <TabsTrigger value="grid">Grid</TabsTrigger>
                      <TabsTrigger value="list">List</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="grid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {filteredMembers.map(member => (
                        <Card key={member.id} className={`border hover:border-primary transition-colors ${member.featured ? 'ring-1 ring-primary' : ''}`}>
                          <CardContent className="p-4">
                            <div className="flex items-start mb-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src="" alt={member.name} />
                                <AvatarFallback className={member.type === 'Organization' ? "bg-secondary text-white" : "bg-primary text-secondary"}>
                                  {member.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="ml-3">
                                <h3 className="font-medium text-secondary">
                                  {member.name}
                                  {member.verified && (
                                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full ml-1 text-white text-xs flex items-center justify-center" title="Verified Member">✓</span>
                                  )}
                                </h3>
                                <div className="text-sm text-gray-500">
                                  <span className="inline-block bg-gray-100 rounded-full px-2 py-0.5 mr-1 text-xs">
                                    {member.type}
                                  </span>
                                  <span className="text-xs">{member.field}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-xs text-gray-500 flex items-center mb-2">
                              <MapPin size={12} className="mr-1" />
                              {member.location}
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{member.description}</p>
                            
                            <div className="mb-3">
                              {member.skills && member.skills.slice(0, 2).map((skill, i) => (
                                <span key={i} className="inline-block bg-gray-100 text-gray-800 text-xs rounded-full px-2 py-0.5 mr-1 mb-1">
                                  {skill}
                                </span>
                              ))}
                              {member.skills && member.skills.length > 2 && (
                                <span className="text-xs text-gray-500">+{member.skills.length - 2} more</span>
                              )}
                            </div>
                            
                            <Link 
                              to={`/directory/${member.id}`} 
                              className="text-xs text-accent-blue hover:underline block"
                            >
                              View Profile →
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="list">
                    <div className="space-y-3 mt-4">
                      {filteredMembers.map(member => (
                        <div key={member.id} className={`border rounded-lg p-4 hover:border-primary transition-colors ${member.featured ? 'ring-1 ring-primary' : ''}`}>
                          <div className="flex items-start">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src="" alt={member.name} />
                              <AvatarFallback className={member.type === 'Organization' ? "bg-secondary text-white" : "bg-primary text-secondary"}>
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="ml-4 flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium text-secondary">
                                  {member.name}
                                  {member.verified && (
                                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full ml-1 text-white text-xs flex items-center justify-center" title="Verified Member">✓</span>
                                  )}
                                </h3>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <MapPin size={12} className="mr-1" />
                                  {member.location}
                                </div>
                              </div>
                              
                              <div className="text-sm text-gray-500 mb-2">
                                <span className="inline-block bg-gray-100 rounded-full px-2 py-0.5 mr-1 text-xs">
                                  {member.type}
                                </span>
                                <span className="text-xs">{member.field}</span>
                              </div>
                              
                              <p className="text-sm text-gray-600 mb-3">{member.description}</p>
                              
                              <div className="flex justify-between items-center">
                                <div>
                                  {member.skills && member.skills.map((skill, i) => (
                                    <span key={i} className="inline-block bg-gray-100 text-gray-800 text-xs rounded-full px-2 py-0.5 mr-1 mb-1">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                
                                <Link 
                                  to={`/directory/${member.id}`} 
                                  className="text-sm text-accent-blue hover:underline block"
                                >
                                  View Profile →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
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
