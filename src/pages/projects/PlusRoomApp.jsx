import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from './../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from './../../components/FadeInAnimation';

// import images
import plusroomAppImg1 from './../../assets/img/plusroom-app/plusroom-app-1.png';
import plusroomAppImg2 from './../../assets/img/plusroom-app/plusroom-app-2.png';

export default function PlusRoomApp() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>PlusRoom App</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>UI/UX  /  Design  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>An intuitive mobile app designed for students providing interactive learning experiences.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={plusroomAppImg1} alt='PlusRoom App Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        {/* project summary */}
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Design a mobile app with 50+ screens that has a good UI/UX</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>We created a seamless and intuitive UI/UX design for a comprehensive mobile application that offers virtual learning opportunities to students. <Link to='https://www.behance.net/gallery/152249365/PlusRoom-Meet-Learn-Mobile-Application' target={'_blank'} className='link-hover'>Check it out on Behance</Link></FadeInAnimation>
                </div>
              </div>

              <div className='col-lg-4'>
                <aside className='sidebar-summary'>
                  <div className='summary'>
                    <h6>THE TEAM</h6> 
                    <ul>
                      <li>Charlene Capili</li>
                      <li>Justin Andrew Fronda</li>
                      <li>Jon Retizos</li>
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

        <FadeInAnimation wrapperElement='img' src={plusroomAppImg2} alt='PlusRoom App Mockup #1' className='trigger' direction=''></FadeInAnimation>

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