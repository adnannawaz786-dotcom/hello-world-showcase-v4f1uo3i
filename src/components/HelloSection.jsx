import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  Globe, 
  Code, 
  Palette, 
  Zap, 
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Coffee
} from 'lucide-react';

const HelloSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [buttonStates, setButtonStates] = useState({
    primary: false,
    secondary: false,
    success: false,
    warning: false,
    danger: false
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = (type) => {
    setButtonStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    
    setTimeout(() => {
      setButtonStates(prev => ({
        ...prev,
        [type]: false
      }));
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardData = [
    {
      id: 1,
      icon: Code,
      title: "Modern Development",
      description: "Built with React, Vite, and Tailwind CSS for optimal performance",
      gradient: "from-blue-500 to-purple-600",
      color: "blue"
    },
    {
      id: 2,
      icon: Palette,
      title: "Beautiful Design",
      description: "Stunning UI with smooth animations and responsive layouts",
      gradient: "from-pink-500 to-rose-600",
      color: "pink"
    },
    {
      id: 3,
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with modern build tools and techniques",
      gradient: "from-yellow-500 to-orange-600",
      color: "yellow"
    },
    {
      id: 4,
      icon: Globe,
      title: "Global Ready",
      description: "Accessible, responsive, and ready for worldwide deployment",
      gradient: "from-green-500 to-emerald-600",
      color: "green"
    }
  ];

  const buttonConfigs = [
    {
      type: 'primary',
      label: 'Get Started',
      icon: ArrowRight,
      className: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
      activeText: 'Welcome!'
    },
    {
      type: 'secondary',
      label: 'Watch Demo',
      icon: Play,
      className: 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg',
      activeText: 'Playing...'
    },
    {
      type: 'success',
      label: 'Download',
      icon: Download,
      className: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl',
      activeText: 'Downloaded!'
    },
    {
      type: 'warning',
      label: 'Share',
      icon: Share2,
      className: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl',
      activeText: 'Shared!'
    },
    {
      type: 'danger',
      label: 'Buy Coffee',
      icon: Coffee,
      className: 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl',
      activeText: 'Thanks!'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 text-yellow-400"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Hello, World!
              </h1>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-red-500"
              >
                <Heart className="w-6 h-6 fill-current" />
              </motion.div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to a modern showcase of beautiful design, interactive components, and cutting-edge web technologies.
            </p>

            <div className="flex items-center justify-center space-x-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-6 h-6 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Buttons Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Interactive Components
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {buttonConfigs.map((config) => {
                const IconComponent = config.icon;
                const isActive = buttonStates[config.type];
                
                return (
                  <motion.button
                    key={config.type}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleButtonClick(config.type)}
                    className={`
                      px-6 py-3 rounded-xl font-semibold text-sm sm:text-base
                      transition-all duration-300 ease-out
                      transform hover:-translate-y-1
                      focus:outline-none focus:ring-4 focus:ring-opacity-50
                      disabled:opacity-50 disabled:cursor-not-allowed
                      min-w-[140px] flex items-center justify-center space-x-2
                      ${config.className}
                    `}
                    disabled={isActive}
                  >
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.span
                          key="active"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-4 h-4" />
                          </motion.div>
                          <span>{config.activeText}</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center space-x-2"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{config.label}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Feature Cards Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Feature Showcase
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cardData.map((card, index) => {
                const IconComponent = card.icon;
                const isActive = activeCard === card.id;
                
                return (
                  <motion.div
                    key={card.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onHoverStart={() => setActiveCard(card.id)}
                    onHoverEnd={() => setActiveCard(null)}
                    className={`
                      relative p-6 rounded-2xl bg-white dark:bg-slate-800 
                      shadow-lg hover:shadow-2xl transition-all duration-300
                      border border-gray-100 dark:border-slate-700
                      cursor-pointer overflow-hidden group
                      ${isActive ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
                    `}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 space-y-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {card.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                      
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : 0 }}
                        className={`h-1 bg-gradient-to-r ${card.gradient} rounded-full`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelloSection;