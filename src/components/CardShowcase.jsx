import React, { useState } from 'react';
import { Heart, Star, Share2, Bookmark, Eye, MessageCircle, TrendingUp, Award, Users, Calendar, MapPin, Clock, ChevronRight, ExternalLink } from 'lucide-react';

const CardShowcase = () => {
  const [likedCards, setLikedCards] = useState(new Set());
  const [bookmarkedCards, setBookmarkedCards] = useState(new Set());

  const toggleLike = (cardId) => {
    setLikedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (cardId) => {
    setBookmarkedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Card Showcase
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our collection of beautifully designed card components with interactive elements and modern aesthetics.
        </p>
      </div>

      {/* Featured Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Product Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => toggleBookmark('product-1')}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                    bookmarkedCards.has('product-1') 
                      ? 'bg-yellow-500 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Premium Design Kit</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Complete UI component library with 200+ elements and modern design patterns.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$99</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleLike('product-1')}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    likedCards.has('product-1') 
                      ? 'bg-red-100 text-red-500 dark:bg-red-900/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedCards.has('product-1') ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-400 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Blog Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                Technology
              </span>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>2.4k</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>18</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2024</span>
              <span>•</span>
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              The Future of Web Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Exploring emerging trends and technologies that will shape the next generation of web experiences.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sarah Chen</span>
              </div>
              <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
                <span className="text-sm font-medium">Read More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-right text-white">
                <p className="text-sm opacity-90">This Month</p>
                <p className="text-2xl font-bold">+24%</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Revenue Growth</h3>
            <p className="text-white/80 text-sm">Compared to last month</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">$127k</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3.2k</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">New Customers</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                <span className="font-medium text-gray-900 dark:text-white">3.8%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full w-3/4 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { icon: Award, title: "Premium Quality", value: "99.9%", color: "from-yellow-400 to-orange-500" },
          { icon: Users, title: "Active Users", value: "50k+", color: "from-blue-400 to-purple-500" },
          { icon: MapPin, title: "Global Reach", value: "127", color: "from-green-400 to-teal-500" },
          { icon: Star, title: "User Rating", value: "4.9", color: "from-pink-400 to-red-500" }
        ].map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Feature Card */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 rounded-2xl p-8 text-center text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already building amazing applications with our component library.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
            <span>Get Started Free</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center space-x-2">
            <span>View Documentation</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;