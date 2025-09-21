import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Playground from './pages/Playground';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import CrystalVision from "./pages/CrystalVision";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="bg-black min-h-screen text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crystalvision" element={<CrystalVision />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;