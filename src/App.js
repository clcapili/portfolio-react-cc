import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import NoMatch from './pages/NoMatch';

import './assets/css/index.css';

export default function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='dashboard' element={<Dashboard />} />

          {/* Using path='*'' means 'match anything', so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      
    </div>
  );
}


