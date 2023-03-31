import { React, useEffect } from 'react'
import ScrollToTopOnLinkClick from './../components/ScrollToTopOnLinkClick';
import FadeInAnimation from './../components/FadeInAnimation';

// import image
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
          <ScrollToTopOnLinkClick to='/projects/weather-api'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  01
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>WeatherAPI</h2>
                  <small>Code / Design / Personal</small>
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

        <FadeInAnimation wrapperElement='div' className='project trigger' direction='left'>
          <ScrollToTopOnLinkClick to='/projects/movie-list'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  02
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>Movie List</h2>
                  <small>Code / Design / Personal</small>
                  <p>A web page integrated React state into a movie rating feature, allowing users to conveniently rate and provide feedback on movies.</p>
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
          <ScrollToTopOnLinkClick to='/projects/bootstrap-web-page'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  03
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>Bootstrap Web Page</h2>
                  <small>Code / Personal</small>
                  <p>A responsive web page using Bootstrap that enhances the user experience across various devices</p>
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
          <ScrollToTopOnLinkClick to='/projects/astrology-icons'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  04
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
          <ScrollToTopOnLinkClick to='/projects/grid-web-page'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  05
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>Grid Web Page</h2>
                  <small>Code  /  Design  /  Personal</small>
                  <p>A web design which I utilized the CSS Grid system to create a flexible and responsive layout for different screen sizes and devices</p>
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
          <ScrollToTopOnLinkClick to='/projects/nxr-app'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  06
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>NXR App</h2>
                  <small>UI/UX / Design / Personal</small>
                  <p>A user-centered designed mobile app for Jet-ski and Snowmobile rentals.</p>
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
          <ScrollToTopOnLinkClick to='/projects/plusroom-app'>
            <div className='container'>
              <div className='row project-single'>
                {/* outer-left */}
                <div className='order'>
                  07
                </div>

                {/* center */}
                <div className='project-info'>
                  <h2>PlusRoom App</h2>
                  <small>UI/UX / Design / Personal</small>
                  <p>An intuitive mobile app designed for students providing interactive learning experiences.</p>
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