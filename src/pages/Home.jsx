import React from 'react';
import FadeInAnimation from './../components/FadeInAnimation';
import ScrollToTopOnLinkClick from './../components/ScrollToTopOnLinkClick';

// images
import weatherApiImg from './../assets/img/project-weatherapi.jpg';
import responsiveGridImg from './../assets/img/project-responsivegrid.jpg';
import nxrImg from './../assets/img/project-nxrental.jpg';
import plusroomImg from './../assets/img/project-plusroom.jpg';
import icon from './../assets/img/icon-arrow-up-right.svg';
import iconLong from './../assets/img/icon-arrow-long-right.svg';

export default function Home() {
  return (
    <div className='pages home'>
      <div className='container'>
        <section className='hero-column'>
          <div className='row'>
              <div className='col-md-7'>
                <FadeInAnimation wrapperElement='h2' className='trigger' direction='down'>
                  I design &amp; <span>build products.</span>
                </FadeInAnimation>
              </div>
            
              <div className='col-md-5'>
                <div className='description'>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                    My expertise includes full-stack development, responsive design, CMS and RestAPI implementation, and intuitive and user-centered design.
                  </FadeInAnimation>
                </div>
              </div>
          </div>
        </section>

        {/* projects highlights */}
        <section className='row featured-projects'>
          <div className='col-md-5'>
            <FadeInAnimation wrapperElement='div' className='featured-project trigger' direction='up'>
              <ScrollToTopOnLinkClick to='/projects/weather-api'>
                <img src={weatherApiImg} className='project-img' alt='WeatherAPI project using RestAPI' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>WeatherAPI</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>Code / Personal</small>
                </div>
                
                <p>A web app that displays current weather data for a specified location</p>
              </ScrollToTopOnLinkClick>
            </FadeInAnimation>
          </div>

          <div className='col-md-7'>
            <FadeInAnimation wrapperElement='div' className='featured-project trigger' direction='up'>
              <ScrollToTopOnLinkClick to='/projects/grid-web-page'>
                <img src={responsiveGridImg} className='project-img' alt='Responsive Page project using CSS Grid' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>Grid Web Page</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>UI / Design / Code / Personal</small>
                </div>
                
                <p>A web design which I utilized the CSS Grid system to create a flexible and responsive layout for different screen sizes and devices</p>
              </ScrollToTopOnLinkClick>
            </FadeInAnimation>
          </div>
        </section>

        <section className='row'>
          <div className='col-md-7'>
            <FadeInAnimation wrapperElement='div' className='featured-project trigger' direction='up'>
              <ScrollToTopOnLinkClick to='/projects/nxr-app'>
                <img src={nxrImg} className='project-img' alt='Northern Xscape Rentals App UI/UX project' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>NXR App</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>UI/UX / Design / Personal</small>
                </div>
                
                <p>A user-centered designed mobile app for Jet-ski and Snowmobile rentals</p>
              </ScrollToTopOnLinkClick>
            </FadeInAnimation>
          </div>

          <div className='col-md-5'>
            <FadeInAnimation wrapperElement='div' className='featured-project trigger' direction='up'>
              <ScrollToTopOnLinkClick to='/projects/plusroom-app'>
                <img src={plusroomImg} className='project-img' alt='PlusRoom App UI/UX project' />

                <div className='project-details'>
                  <div className='project-name'>
                    <h6>PlusRoom App</h6>
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </div>

                  <small>UI/UX / Design / Personal</small>
                </div>
                
                <p>An intuitive mobile app designed for students providing interactive learning experiences</p>
              </ScrollToTopOnLinkClick>
            </FadeInAnimation>
          </div>
        </section>

        {/* link to projects page */}
        <section className='row'>
          <ScrollToTopOnLinkClick to='/projects' className='bottom-link'>
            <h2>View All Projects</h2>
            <img src={iconLong} alt='Icon arrow long right for next page links' />
          </ScrollToTopOnLinkClick>
        </section>
      </div>
    </div>
  );
}