
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Search, MessageSquare, User, ArrowRight, Plus } from 'lucide-react';

const Forum = () => {
  // Sample forum categories
  const categories = [
    {
      id: 1,
      name: 'Climate Policy',
      description: 'Discussions on EU climate policy, regulations, and governance',
      topics: 45,
      posts: 284
    },
    {
      id: 2,
      name: 'Renewable Energy',
      description: 'Share insights and ask questions about renewable energy technologies',
      topics: 62,
      posts: 510
    },
    {
      id: 3,
      name: 'Circular Economy',
      description: 'Explore circular business models, materials, and waste reduction',
      topics: 38,
      posts: 329
    },
    {
      id: 4,
      name: 'Sustainable Agriculture',
      description: 'Discuss regenerative farming, food systems, and land use',
      topics: 52,
      posts: 418
    },
    {
      id: 5,
      name: 'Climate Finance',
      description: 'Conversations on funding, investment, and financial mechanisms',
      topics: 29,
      posts: 187
    },
    {
      id: 6,
      name: 'Carbon Reduction',
      description: 'Strategies and technologies for reducing carbon emissions',
      topics: 44,
      posts: 362
    }
  ];

  // Sample recent discussions
  const discussions = [
    {
      id: 101,
      title: 'New EU regulatory framework for carbon credits - implications?',
      author: 'Maria Schmidt',
      category: 'Climate Policy',
      replies: 12,
      views: 342,
      lastActivity: '2 hours ago'
    },
    {
      id: 102,
      title: 'Best practices for community solar projects',
      author: 'Thomas Weber',
      category: 'Renewable Energy',
      replies: 8,
      views: 186,
      lastActivity: '5 hours ago'
    },
    {
      id: 103,
      title: 'Funding opportunities for circular packaging solutions',
      author: 'Sofia Kovacs',
      category: 'Circular Economy',
      replies: 15,
      views: 274,
      lastActivity: '1 day ago'
    },
    {
      id: 104,
      title: 'Regenerative agriculture techniques for Mediterranean climate',
      author: 'Carlos Rodriguez',
      category: 'Sustainable Agriculture',
      replies: 21,
      views: 429,
      lastActivity: '2 days ago'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="bg-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
            <p className="text-xl max-w-2xl">
              Connect with fellow members, ask questions, share insights, and participate in discussions on climate innovation topics.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search discussions by topic, keyword, or author..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button className="bg-primary text-secondary hover:bg-primary/90">
              <Plus size={18} className="mr-2" /> New Discussion
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map(category => (
              <Card key={category.id} className="border border-gray-200 hover:border-primary transition-colors">
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-bold text-secondary">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span>{category.topics} topics</span>
                      <span>{category.posts} posts</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                      Browse <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-secondary">Recent Discussions</h2>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {discussions.map(discussion => (
                <div key={discussion.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg hover:text-primary transition-colors cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center mt-1 text-sm">
                        <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full mr-2">
                          {discussion.category}
                        </span>
                        <div className="flex items-center text-gray-500">
                          <User size={14} className="mr-1" />
                          <span>{discussion.author}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-secondary">
                      <MessageSquare size={16} />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                    <span>Last activity: {discussion.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-6">
            <div className="md:flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-secondary">Join the Conversation</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Share your insights, ask questions, and connect with fellow climate innovators.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-primary text-secondary hover:bg-primary/90">
                  <Plus size={18} className="mr-2" /> New Discussion
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Browse Categories
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

export default Forum;
