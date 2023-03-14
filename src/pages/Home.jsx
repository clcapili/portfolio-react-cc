import React from 'react';
import { Link } from 'react-router-dom';

// images
import weatherApiImg from './../assets/img/project-weatherapi.jpg';
import responsiveGridImg from './../assets/img/project-responsivegrid.jpg';
import nxrImg from './../assets/img/project-nxrental.jpg';
import plusroomImg from './../assets/img/project-plusroom.jpg';

import icon from './../assets/img/icon-arrow-up-right.svg';
import iconLong from './../assets/img/icon-arrow-long-right.svg';

export default function Home() {
  return (
    <section className='pages home'>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2>I design & build websites.</h2>
          </div>
          <div className='col-5'>
            <p>My expertise includes full-stack development, responsive design, CMS and RestAPI implementation, and intuitive and user-centered design.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-5'>
            <Link to='/' className='featured-project'>
              <img src={weatherApiImg} alt='WeatherAPI project using RestAPI' />

              <div className=''>
                <div>
                  <h6>WeatherAPI</h6>
                  <img src={icon} alt='Icon arrow up right for external links' />
                </div>

                <small>Code / Personal</small>
              </div>
              
              <p>A web app that displays current weather data for a specified location.</p>
            </Link>
          </div>

          <div className='col-7'>
            <Link to='/' className='featured-project'>
              <img src={responsiveGridImg} alt='Responsive Page project using CSS Grid' />

              <div className=''>
                <div>
                  <h6>Grid Responsive Page</h6>
                  <img src={icon} alt='Icon arrow up right for external links' />
                </div>

                <small>UI / Design / Code / Personal</small>
              </div>
              
              <p>A web design which I utilized the CSS Grid system to create a flexible and responsive layout for different screen sizes and devices</p>
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className='col-7'>
            <Link to='/' className='featured-project'>
              <img src={nxrImg} alt='Northern Xscape Rentals App UI/UX project' />

              <div className=''>
                <div>
                  <h6>Northern Xscape Rentals App</h6>
                  <img src={icon} alt='Icon arrow up right for external links' />
                </div>

                <small>UI/UX / Design / Personal</small>
              </div>
              
              <p>A user-centered designed mobile app for Jet-ski and Snowmobile rentals.</p>
            </Link>
          </div>

          <div className='col-5'>
            <Link to='/' className='featured-project'>
              <img src={plusroomImg} alt='PlusRoom App UI/UX project' />

              <div className=''>
                <div>
                  <h6>PlusRoom App</h6>
                  <img src={icon} alt='Icon arrow up right for external links' />
                </div>

                <small>UI/UX / Design / Personal</small>
              </div>
              
              <p>An intuitive mobile app designed for students providing interactive learning experiences.</p>
            </Link>
          </div>
        </div>

        <Link to='/projects'>
          <div className='row'>
            <h3>View All Projects</h3>
            <img src={iconLong} alt='Icon arrow long right for next page links' />
          </div>
        </Link>
      </div>
    </section>
  );
}