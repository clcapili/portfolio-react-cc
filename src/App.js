import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import TransitionComponent from './components/Transition';

import Home from './pages/Home';
import About from './pages/About';

// projects
import Projects from './pages/Projects';
import AstrologyIcons from './pages/projects/AstrologyIcons';
import WeatherAPI from './pages/projects/WeatherAPI';

import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }
        />
        <Route 
          path='/about' 
          element={
            <TransitionComponent>
              <About />
            </TransitionComponent>
          }
        />
        
        {/* nested routes start */}
        <Route path='/projects'>
          <Route
            index
            element={
              <TransitionComponent>
                <Projects />
              </TransitionComponent>
            }
          />
          <Route
            path='/projects/astrology-icons' 
            element={
            <TransitionComponent>
              <AstrologyIcons />
            </TransitionComponent>
            }
          />
          <Route
            path='/projects/weather-api' 
            element={
            <TransitionComponent>
              <WeatherAPI />
            </TransitionComponent>
            }
          />
        </Route>
        {/* nested routes end */}

        <Route 
          path='/contact' 
          element={
            <TransitionComponent>
              <Contact />
            </TransitionComponent>
          }
        />
        <Route
          path='*' 
          element={
            <TransitionComponent>
              <NotFound />
            </TransitionComponent>
          } 
        />
      </Route>
    </Routes>
  );
}


