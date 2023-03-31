import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from '../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from '../../components/FadeInAnimation';

// import images
import gridWebPageImg1 from './../../assets/img/grid-web-page/grid-web-page-1.png';
import gridWebPageImg2 from './../../assets/img/grid-web-page/grid-web-page-2.png';

export default function GridWebPage() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>Grid Web Page</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>Code  /  Design  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>In this project, I utilized the CSS Grid to create a visually appealing and dynamic layout, enabling the easy organization and display of content.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={gridWebPageImg1} alt='Grid Web Page Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        {/* project summary */}
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Designing a web page with a flexible and responsive layout that can adjust to different screen sizes and devices while still maintaining a consistent design</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>By using CSS Grid in the design process, I was able to achieve a visually appealing and dynamic layout that easily adapts to various screen sizes, ensuring a seamless and user-friendly experience for visitors. You can view the source code at my <Link to='https://codepen.io/charlenelcapili/pen/oNpVxqr' target={'_blank'} className='link-hover'>Codepen</Link> profile.</FadeInAnimation>
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

        <FadeInAnimation wrapperElement='img' src={gridWebPageImg2} alt='Grid Web Page Mockup #1' className='trigger' direction=''></FadeInAnimation>

        <section className='pager'>
          <div className='container'>
            <ScrollToTopOnLinkClick to='/projects/nxr-app' className='next'>
              <h4>next project</h4>
              <h1>NXR App</h1>
            </ScrollToTopOnLinkClick>
          </div>
        </section>
      </div>
    </div>
  )
}