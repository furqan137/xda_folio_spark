<<<<<<< HEAD
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Playground from "./pages/Playground";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Playground from './pages/Playground';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
import CrystalVision from "./pages/CrystalVision";

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
<<<<<<< HEAD
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="bg-black min-h-screen text-white">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/#"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/works"
                element={<Works />}
              />
              <Route
                path="/project/:id"
                element={<ProjectDetail />}
              />
              <Route
                path="/playground"
                element={<Playground />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/crystalvision"
                element={<CrystalVision />}
              />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
=======
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
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
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  );
}

export default App;
