import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from './../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from './../../components/FadeInAnimation';

import weatherApiImg1 from './../../assets/img/project-weatherapi-1.png';
import weatherApiImg2 from './../../assets/img/project-weatherapi-2.png';

export default function WeatherAPI() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>WeatherAPI</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>Code  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>A web app that displays current weather data for a specified location.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={weatherApiImg1} alt='Weather API Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Make a web page that incorporates ONE Rest API call</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>I utilized the <Link to='https://www.weatherapi.com/docs/' target='_blank' className='link-hover'>WeatherAPI</Link> to develop a dynamic web page that displays real-time weather information. You can view the source code at my <Link to='https://github.com/clcapili/weather-api' target={'_blank'} className='link-hover'>github</Link> profile.</FadeInAnimation>
                </div>
              </div>

              <div className='col-lg-4'>
                <aside className='sidebar-summary'>

                  <div className='summary'>
                    <h6>MY ROLE</h6>
                    <ul>
                      <li>Full-Stack Developer</li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>SOLUTIONS</h6>
                    <ul>
                      <li>Dynamic Web Page</li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>Industry</h6>
                    <ul>
                      <li>Web Development</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={weatherApiImg2} alt='Weather API Mockup #1' className='trigger' direction=''></FadeInAnimation>

        <section className='pager'>
          <div className='container'>
            <ScrollToTopOnLinkClick to='/projects' className='next'>
              <h4>next project</h4>
              <h1>PlusRoom App</h1>
            </ScrollToTopOnLinkClick>
          </div>
        </section>
      </div>
    </div>
  )
}