import React, { useState, useCallback } from 'react';
import { 
  Play, 
  Download, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Plus, 
  Check, 
  X, 
  ArrowRight, 
  Loader2,
  Star,
  Bell,
  Settings,
  User,
  Trash2,
  Edit3
} from 'lucide-react';

const ButtonShowcase = () => {
  const [loadingStates, setLoadingStates] = useState({});
  const [likedItems, setLikedItems] = useState(new Set());
  const [followedItems, setFollowedItems] = useState(new Set());

  const setLoading = useCallback((buttonId, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      [buttonId]: isLoading
    }));
  }, []);

  const simulateAction = useCallback((buttonId, callback) => {
    setLoading(buttonId, true);
    setTimeout(() => {
      setLoading(buttonId, false);
      if (callback) callback();
    }, 1500);
  }, [setLoading]);

  const toggleLike = useCallback((itemId) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const toggleFollow = useCallback((itemId) => {
    setFollowedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Button Showcase
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our comprehensive collection of interactive buttons with modern designs, smooth animations, and accessibility features.
        </p>
      </div>

      {/* Primary Buttons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Primary Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => simulateAction('cta')}
            disabled={loadingStates.cta}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loadingStates.cta ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              <>
                <Play className="w-5 h-5 inline mr-2" />
                Get Started
              </>
            )}
          </button>

          <button
            onClick={() => simulateAction('download')}
            disabled={loadingStates.download}
            className="group bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingStates.download ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              <>
                <Download className="w-5 h-5 inline mr-2" />
                Download
              </>
            )}
          </button>

          <button
            onClick={() => simulateAction('cart')}
            disabled={loadingStates.cart}
            className="group bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingStates.cart ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              <>
                <ShoppingCart className="w-5 h-5 inline mr-2" />
                Add to Cart
              </>
            )}
          </button>

          <button
            onClick={() => simulateAction('subscribe')}
            disabled={loadingStates.subscribe}
            className="group bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-pink-700 hover:to-red-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingStates.subscribe ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              <>
                <Bell className="w-5 h-5 inline mr-2" />
                Subscribe
              </>
            )}
          </button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Secondary Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
            <Share2 className="w-5 h-5 inline mr-2" />
            Share
          </button>

          <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-green-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800">
            <Plus className="w-5 h-5 inline mr-2" />
            Add New
          </button>

          <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800">
            <Settings className="w-5 h-5 inline mr-2" />
            Settings
          </button>

          <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800">
            <User className="w-5 h-5 inline mr-2" />
            Profile
          </button>
        </div>
      </section>

      {/* Interactive Toggle Buttons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Interactive Toggles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => toggleLike('item1')}
            className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 ${
              likedItems.has('item1')
                ? 'bg-red-600 text-white shadow-lg focus:ring-red-300 dark:focus:ring-red-800'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-gray-300 dark:focus:ring-gray-600'
            }`}
          >
            <Heart className={`w-5 h-5 inline mr-2 transition-all duration-300 ${likedItems.has('item1') ? 'fill-current' : ''}`} />
            {likedItems.has('item1') ? 'Liked' : 'Like'}
          </button>

          <button
            onClick={() => toggleFollow('user1')}
            className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 ${
              followedItems.has('user1')
                ? 'bg-blue-600 text-white shadow-lg focus:ring-blue-300 dark:focus:ring-blue-800'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-gray-300 dark:focus:ring-gray-600'
            }`}
          >
            {followedItems.has('user1') ? (
              <>
                <Check className="w-5 h-5 inline mr-2" />
                Following
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 inline mr-2" />
                Follow
              </>
            )}
          </button>

          <button className="group bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800">
            <Star className="w-5 h-5 inline mr-2 fill-current" />
            5.0 Rating
          </button>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Action Buttons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="group bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800">
            <Check className="w-5 h-5 inline mr-2" />
            Approve
          </button>

          <button className="group bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
            <X className="w-5 h-5 inline mr-2" />
            Reject
          </button>

          <button className="group bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
            <Edit3 className="w-5 h-5 inline mr-2" />
            Edit
          </button>

          <button className="group bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800">
            <Trash2 className="w-5 h-5 inline mr-2" />
            Delete
          </button>
        </div>
      </section>

      {/* Special Buttons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Special Effects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 animate-pulse">
            <span className="relative z-10">Animated Gradient</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 overflow-hidden">
            <span className="relative z-10 flex items-center">
              Hover Effect
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button 
            disabled 
            className="bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-8 py-4 rounded-2xl font-bold text-lg cursor-not-allowed opacity-60"
          >
            Disabled State
          </button>
        </div>
      </section>

      {/* Size Variants */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Size Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Small
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Medium
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Large
          </button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Extra Large
          </button>
        </div>
      </section>
    </div>
  );
};

export default ButtonShowcase;