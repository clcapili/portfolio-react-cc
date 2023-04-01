import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from '../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from '../../components/FadeInAnimation';

// import images
import nxrAppImg1 from './../../assets/img/nxr-app/nxr-app-1.png';
import nxrAppImg2 from './../../assets/img/nxr-app/nxr-app-2.png';

export default function NXRApp() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>NXR App</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>UI/UX  /  Design  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>This project focuses on designing a mobile app for Jet-ski and Snowmobile rentals that emphasizes user experience and ease of use, with the ultimate goal of delivering a seamless and efficient platform for users to rent these vehicles.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={nxrAppImg1} alt='NXR App Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        {/* project summary */}
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Design a mobile app that offers a user-friendly experience while effectively managing the complexities of Jet-ski and Snowmobile rentals, including the scheduling, booking, and payment processes</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>This mobile app has been crafted to simplify the Jet-ski and Snowmobile rental process. It boasts an intuitive and user-friendly interface, a seamless scheduling and booking system, and a secure and efficient payment process. The result is a hassle-free and convenient rental experience for customers. View the prototype on <Link to='https://xd.adobe.com/view/bbb76c60-2380-4973-bc20-1b221f523992-eee4/' target={'_blank'} className='link-hover'>Adobe XD</Link>.</FadeInAnimation>
                </div>
              </div>

              <div className='col-lg-4'>
                <aside className='sidebar-summary'>
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

        <FadeInAnimation wrapperElement='img' src={nxrAppImg2} alt='NXR App Mockup #1' className='trigger' direction=''></FadeInAnimation>

        <section className='pager'>
          <div className='container'>
            <ScrollToTopOnLinkClick to='/projects/plusroom-app' className='next'>
              <h4>next project</h4>
              <h1>PlusRoom App</h1>
            </ScrollToTopOnLinkClick>
          </div>
        </section>
      </div>
    </div>
  )
}