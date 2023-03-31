import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from '../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from '../../components/FadeInAnimation';

// import images
import bootstrapWebPageImg1 from './../../assets/img/bootstrap-web-page/bootstrap-web-page-1.png';
import bootstrapWebPageImg2 from './../../assets/img/bootstrap-web-page/bootstrap-web-page-2.png';

export default function BootstrapWebPage() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>Bootstrap Web Page</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>Code  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>This project aimed to demonstrate my front-end development skills by creating a responsive web page using Bootstrap that enhances the user experience across various devices.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={bootstrapWebPageImg1} alt='Bootstrap Web Page Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        {/* project summary */}
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Create a mobile-first, responsive web page using any front-end technology, based on specific sections of a provided <Link to='https://www.figma.com/file/GqCD52jLNjpKmKk8NuNgjh/INM420-summer-2021' target={'_blank'} className='link-hover'>Figma</Link> design, to showcase front-end development skills</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>I utilized CSS Grid and Bootstrap to design a sleek and responsive web page featuring the header, main navigation, hero section, and footer with a contact form, emphasizing consistent code styling and a mobile-first approach. You can view the source code at my <Link to='https://github.com/clcapili/bootstrap-cc' target={'_blank'} className='link-hover'>github</Link> profile.</FadeInAnimation>
                </div>
              </div>

              <div className='col-lg-4'>
                <aside className='sidebar-summary'>
                  <div className='summary'>
                    <h6>MY ROLE</h6>
                    <ul>
                      <li>Front-end Developer</li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>SOLUTIONS</h6>
                    <ul>
                      <li>Responsive Web Page</li>
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

        <FadeInAnimation wrapperElement='img' src={bootstrapWebPageImg2} alt='Bootstrap Web Page Mockup #1' className='trigger' direction=''></FadeInAnimation>

        <section className='pager'>
          <div className='container'>
            <ScrollToTopOnLinkClick to='/projects/bootstrap-web-page' className='next'>
              <h4>next project</h4>
              <h1>Astrology Icons</h1>
            </ScrollToTopOnLinkClick>
          </div>
        </section>
      </div>
    </div>
  )
}