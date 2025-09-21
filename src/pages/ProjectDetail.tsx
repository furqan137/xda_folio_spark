import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../utils/constants';

const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState('Logo Concepts');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const tabs = ['Logo Concepts', 'Merch Designs', 'Process'];

  const logoImages = [
    {
      id: 1,
      type: 'primary',
      title: 'Primary Concept',
      description: 'Main crystalline direction with light refraction exploring depth and luminosity',
      image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-300 to-purple-500',
      size: 'large'
    },
    {
      id: 2,
      type: 'concept',
      title: 'Concept A',
      description: 'Crystalline transparency with geometric precision',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-purple-800',
      size: 'medium'
    },
    {
      id: 3,
      type: 'sphere',
      title: 'Sphere Concept',
      description: 'Reflective surface exploration',
      image: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gray-300 to-gray-500',
      size: 'medium'
    },
    {
      id: 4,
      type: 'rings',
      title: 'Ring Formation',
      description: 'Interconnected crystal structures',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gray-800 to-black',
      size: 'medium'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Crystal<span className="text-accent">Vision</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg max-w-2xl mb-8"
            >
              A comprehensive branding project exploring the intersection of crystalline structures and modern digital aesthetics. From initial concept to final execution across multiple touchpoints.
            </motion.p>
          </div>

          {/* Project Info Cards */}
          <div className="flex gap-4 ml-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/50 p-6 rounded-xl border border-gray-700/50 min-w-[200px]"
            >
              <div className="mb-4">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">SERVICES</p>
                <p className="text-text-primary font-medium">3D Modeling</p>
                <p className="text-text-primary font-medium">Brand Identity</p>
              </div>
              <div className="mb-4">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">CLIENT</p>
                <p className="text-text-primary font-medium">FlatTheme</p>
              </div>
              <div className="mb-4">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">DURATION</p>
                <p className="text-text-primary font-medium">8 Weeks</p>
              </div>
              <div>
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">YEAR</p>
                <p className="text-text-primary font-medium">2024</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-secondary/30 p-2 rounded-full border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-white'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Logo Explorations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Logo Explorations</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Three distinct approaches to the crystal theme, each exploring different aspects of light, form, and dimensional depth.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          {/* Primary Concept - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-1 row-span-2 relative group cursor-pointer"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${logoImages[0].gradient} p-8 min-h-[500px] flex items-center justify-center`}>
              {/* Crystal Logo Placeholder */}
              <div className="relative">
                <div className="w-64 h-64 relative">
                  {/* Main Crystal Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-cyan-200 via-blue-300 to-purple-400 transform rotate-45" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-cyan-100 via-blue-200 to-purple-300 transform rotate-12" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                  <div className="absolute inset-12 bg-gradient-to-br from-white via-cyan-100 to-blue-200 rounded-full"></div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              {hoveredImage === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Primary Concept</h3>
                  <p className="text-gray-200 mb-4">Main crystalline direction with light refraction exploring depth and luminosity</p>
                  <button className="bg-accent hover:bg-accent-light px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 w-fit">
                    <Download className="w-5 h-5" />
                    Download Asset
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Concept A */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${logoImages[1].gradient} p-8 flex items-center justify-center`}>
              {/* Crystal Shape */}
              <div className="relative">
                <div className="w-32 h-40 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-600 transform" style={{clipPath: 'polygon(50% 0%, 80% 30%, 80% 70%, 50% 100%, 20% 70%, 20% 30%)'}}></div>
                  <div className="absolute inset-2 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 transform" style={{clipPath: 'polygon(50% 10%, 70% 35%, 70% 65%, 50% 90%, 30% 65%, 30% 35%)'}}></div>
                  <div className="absolute inset-4 bg-gradient-to-b from-white via-purple-100 to-purple-300 transform" style={{clipPath: 'polygon(50% 20%, 60% 40%, 60% 60%, 50% 80%, 40% 60%, 40% 40%)'}}></div>
                </div>
              </div>
              
              {hoveredImage === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Concept A</h3>
                  <p className="text-gray-200 text-sm mb-4">Crystalline transparency with geometric precision</p>
                  <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sphere Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${logoImages[2].gradient} p-8 flex items-center justify-center`}>
              {/* Sphere Shape */}
              <div className="relative">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-pink-200 via-purple-300 to-blue-400 rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-white via-pink-100 to-purple-200 rounded-full"></div>
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
              
              {hoveredImage === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Sphere Concept</h3>
                  <p className="text-gray-200 text-sm mb-4">Reflective surface exploration</p>
                  <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Tools & Credits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-secondary/30 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider mb-6">TOOLS & CREDITS</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">3D & Rendering</h3>
              <p className="text-text-secondary text-sm">Cinema 4D, Octane Render, KeyShot</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Design & UI</h3>
              <p className="text-text-secondary text-sm">Figma, Adobe Illustrator, Photoshop</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Collaboration</h3>
              <p className="text-text-secondary text-sm">Art Direction: Sarah Chen<br />Photography: Marcus Liu</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            to="/works"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </Link>
          
          <div className="text-center">
            <p className="text-text-muted text-sm">Project 2 of 12</p>
            <Link to="/works" className="text-text-secondary hover:text-accent transition-colors text-sm">
              ← Back to Works
            </Link>
          </div>
          
          <Link 
            to="/works"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 text-text-muted text-sm border-t border-gray-800">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </footer>
    </div>
  );
};

export default ProjectDetail;