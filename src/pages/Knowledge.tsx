
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, ArrowRight, Bookmark, File, FileText, Video, Download } from 'lucide-react';

const Knowledge = () => {
  // Sample resources
  const resources = [
    {
      id: 1,
      title: 'Urban Climate Resilience Framework',
      type: 'Guide',
      tags: ['Urban Planning', 'Adaptation'],
      icon: <FileText className="text-secondary" size={24} />,
      description: 'A comprehensive guide to building climate resilience in urban environments.'
    },
    {
      id: 2,
      title: 'Renewable Energy Transition Case Studies',
      type: 'Report',
      tags: ['Energy', 'Policy'],
      icon: <File className="text-secondary" size={24} />,
      description: 'Collection of case studies on successful renewable energy transitions across Europe.'
    },
    {
      id: 3,
      title: 'Introduction to Circular Economy',
      type: 'Video',
      tags: ['Circular Economy', 'Business Models'],
      icon: <Video className="text-secondary" size={24} />,
      description: 'A beginner-friendly video explaining circular economy principles and applications.'
    },
    {
      id: 4,
      title: 'Climate Finance Toolkit for Startups',
      type: 'Toolkit',
      tags: ['Finance', 'Entrepreneurship'],
      icon: <Download className="text-secondary" size={24} />,
      description: 'Practical tools and templates for climate startups seeking investment and funding.'
    },
    {
      id: 5,
      title: 'Biodiversity Conservation Strategies',
      type: 'Report',
      tags: ['Biodiversity', 'Conservation'],
      icon: <File className="text-secondary" size={24} />,
      description: 'Research report on effective strategies for biodiversity conservation in changing climate.'
    },
    {
      id: 6,
      title: 'Sustainable Agriculture Practices',
      type: 'Guide',
      tags: ['Agriculture', 'Farming'],
      icon: <FileText className="text-secondary" size={24} />,
      description: 'Guide to implementing sustainable and regenerative agricultural practices.'
    },
  ];

  const featuredCollections = [
    {
      title: 'Climate Policy Essentials',
      count: 12,
      description: 'Key resources for understanding EU climate policy frameworks and implementation'
    },
    {
      title: 'Circular Economy Toolkit',
      count: 18,
      description: 'Practical guides and tools for implementing circular economy principles'
    },
    {
      title: 'Climate Tech Innovation',
      count: 24,
      description: 'Resources on emerging technologies for climate mitigation and adaptation'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="bg-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
            <p className="text-xl max-w-2xl">
              Access curated resources, research, case studies and practical guides on climate innovation.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search resources by title, topic, or keyword..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCollections.map((collection, index) => (
              <Card key={index} className="border border-gray-200 bg-gray-50 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{collection.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-1">{collection.description}</p>
                  <p className="text-sm text-gray-500">{collection.count} resources</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    Browse Collection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold text-secondary mb-4">Filter Resources</h2>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Resource Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="guide" className="mr-2"/>
                      <label htmlFor="guide">Guides</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="report" className="mr-2"/>
                      <label htmlFor="report">Reports</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="case-study" className="mr-2"/>
                      <label htmlFor="case-study">Case Studies</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="video" className="mr-2"/>
                      <label htmlFor="video">Videos</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="toolkit" className="mr-2"/>
                      <label htmlFor="toolkit">Toolkits</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Topics</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="energy" className="mr-2"/>
                      <label htmlFor="energy">Energy</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="circular" className="mr-2"/>
                      <label htmlFor="circular">Circular Economy</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="agri" className="mr-2"/>
                      <label htmlFor="agri">Agriculture</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="policy" className="mr-2"/>
                      <label htmlFor="policy">Policy</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="finance" className="mr-2"/>
                      <label htmlFor="finance">Finance</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Filter size={16} className="mr-1" /> Apply Filters
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl font-bold text-secondary mb-6">Latest Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map(resource => (
                  <Card key={resource.id} className="border border-gray-200 hover:border-primary transition-all hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {resource.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                            {resource.type}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-2">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {resource.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                        View Resource <ArrowRight size={16} className="ml-1" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-secondary">
                        <Bookmark size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Load More Resources
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

export default Knowledge;
