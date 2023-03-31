import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';

// projects
import Projects from './pages/Projects';
import AstrologyIcons from './pages/projects/AstrologyIcons';
import WeatherAPI from './pages/projects/WeatherAPI';
import PlusRoomApp from './pages/projects/PlusRoomApp';

import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

import './assets/css/styles.css';
import './assets/css/fonts.css';

import { headerScript } from './assets/js/scripts.js';

export default function App() {
  // load header script
  setTimeout(headerScript, 300);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <Home />
          }
        />
        <Route 
          path='/about' 
          element={
            <About />
          }
        />
        
        {/* nested routes start */}
        <Route path='/projects'>
          <Route
            index
            element={
              <Projects />
            }
          />
          <Route
            path='/projects/astrology-icons' 
            element={
              <AstrologyIcons />
            }
          />
          <Route
            path='/projects/weather-api' 
            element={
              <WeatherAPI />
            }
          />
          <Route
            path='/projects/plusroom-app' 
            element={
              <PlusRoomApp />
            }
          />
        </Route>
        {/* nested routes end */}

        <Route 
          path='/contact' 
          element={
            <Contact />
          }
        />
        
        <Route 
          path='/privacy-policy' 
          element={
            <PrivacyPolicy />
          }
        />

        <Route
          path='*' 
          element={
            <NotFound />
          } 
        />
      </Route>
    </Routes>
  );
}


