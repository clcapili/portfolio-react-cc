import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from '../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from '../../components/FadeInAnimation';

// import images
import paseoWebsiteImg1 from './../../assets/img/paseo-website/paseo-website-1.png';
import paseoWebsiteImg2 from './../../assets/img/paseo-website/paseo-website-2.png';

export default function PaseoWebsite() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>Paseo Website</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>UI/UX  /  Design  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>A dynamic coffee website designed to provide an interactive and engaging experience for coffee enthusiasts.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={paseoWebsiteImg1} alt='Paseo Website Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        {/* project summary */}
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Design a coffee website that engages users with an interactive and immersive experience, while also providing relevant and useful information on the coffee products and services offered by the company</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>The coffee website was designed with a focus on creating an interactive and engaging experience for coffee enthusiasts. Through the use of visually appealing graphics and intuitive navigation, users are able to explore the company's coffee products and services in an immersive way. The website also provides valuable information on coffee brewing methods, coffee origins, and other coffee-related topics, catering to users who are passionate about the art of coffee making. Overall, the coffee website successfully balances user engagement and relevant information to provide an enjoyable and informative experience for visitors.</FadeInAnimation>
                </div>
              </div>

              <div className='col-lg-4'>
                <aside className='sidebar-summary'>
                  <div className='summary'>
                    <h6>THE TEAM</h6> 
                    <ul>
                      <li>Charlene Capili</li>
                      <li>Elloisa Mata</li>
                      <li>Justin Andrew Fronda</li>
                      <li>Tom O'Neil</li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>MY ROLE</h6>
                    <ul>
                      <li>UI/UX Designer</li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>SOLUTIONS</h6>
                    <ul>
                      <li>UI/UX</li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>Industry</h6>
                    <ul>
                      <li>Design</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={paseoWebsiteImg2} alt='Paseo Website Mockup #1' className='trigger' direction=''></FadeInAnimation>

        <section className='pager'>
          <div className='container'>
            <ScrollToTopOnLinkClick to='/projects/weather-api' className='next'>
              <h4>next project</h4>
              <h1>WeatherAPI</h1>
            </ScrollToTopOnLinkClick>
          </div>
        </section>
      </div>
    </div>
  )
}