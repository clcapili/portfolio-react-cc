import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';

// projects
import Projects from './pages/Projects';
import WeatherAPI from './pages/projects/WeatherAPI';
import MovieList from './pages/projects/MovieList';
import BootstrapWebPage from './pages/projects/BootstrapWebPage';
import AstrologyIcons from './pages/projects/AstrologyIcons';
import GridWebPage from './pages/projects/GridWebPage';
import NXRApp from './pages/projects/NXRApp';
import PlusRoomApp from './pages/projects/PlusRoomApp';
import PaseoWebsite from './pages/projects/PaseoWebsite';

import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';
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
            path='/projects/movie-list' 
            element={
              <MovieList />
            }
          />
          <Route
            path='/projects/bootstrap-web-page' 
            element={
              <BootstrapWebPage />
            }
          />
          <Route
            path='/projects/astrology-icons' 
            element={
              <AstrologyIcons />
            }
          />
          <Route
            path='/projects/grid-web-page' 
            element={
              <GridWebPage />
            }
          />
          <Route
            path='/projects/nxr-app' 
            element={
              <NXRApp />
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
          <Route
            path='/projects/paseo-website' 
            element={
              <PaseoWebsite />
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
          path='/thank-you' 
          element={
            <ThankYou />
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


