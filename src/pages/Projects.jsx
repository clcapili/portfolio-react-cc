import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from './../components/ScrollToTopOnLinkClick';

import FadeInAnimation from './../components/FadeInAnimation';

import iconLong from './../assets/img/icon-arrow-long-right.svg';

export default function Projects() {
  useEffect(() => {
    document.body.classList.add('projects-layout')
    return () => {
      document.body.classList.remove('projects-layout')
    }
  }, [])

  return (
    <div className='pages projects'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h3' className='trigger' direction='up'>
            Crafting code and visual personalities for digital brands.
          </FadeInAnimation>
        </div>
      </section>

      <div className='projects-archive'>
        <FadeInAnimation wrapperElement='div' className='project trigger' direction='left'>
          <ScrollToTopOnLinkClick to='/projects/astrology-icons'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  01
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>Astrology Icons</h2>
                  <small>Illustration / Design / Personal</small>
                  <p>Collaboration project where we design six unique icons with minimalist and consistent design style.</p>
                </div>

                {/* outer-right */}
                <div className='arrow-link'>
                  <img src={iconLong} alt='Icon arrow long right for next page links' />
                </div>
              </div>
            </div>
          </ScrollToTopOnLinkClick>
        </FadeInAnimation>

        <FadeInAnimation wrapperElement='div' className='project trigger' direction='left'>
          <ScrollToTopOnLinkClick to='/projects/weather-api'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  02
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>WeatherAPI</h2>
                  <small>Code / Personal</small>
                  <p>A web app that displays current weather data for a specified location.</p>
                </div>

                {/* outer-right */}
                <div className='arrow-link'>
                  <img src={iconLong} alt='Icon arrow long right for next page links' />
                </div>
              </div>
            </div>
          </ScrollToTopOnLinkClick>
        </FadeInAnimation>
      </div>
    </div>
  );
}