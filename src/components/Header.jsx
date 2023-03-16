import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './../assets/img/logo.svg';

export default function Header() {

  let activeClassName = 'active';

  return (
    <header>
      {/* header desktop */}
      <div className='header-desktop'>
        <div className='container'>
          <nav>
            <Link to='/' className='logo'>
              <img src={logo} alt='Personal Branding' />
            </Link>

            <ul>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <span>01</span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='about'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <span>02</span>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='projects'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <span>03</span>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='contact'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <span>04</span>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* header mobile */}
      <div className='header-mobile show'>
        <div className='container'>
          <nav className='header-mobile-inner'>
            <Link to='/' className='logo'>
              <img src={logo} alt='Personal Branding' />
            </Link>

            <button className="hamburger-menu">
              <span className="visually-hidden-focusable">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </nav>

          <ul className="mobile-menu">
            <li>
              <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <span>01</span>
                  home
                </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span>02</span>
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span>03</span>
                projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span>04</span>
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    
  );
}