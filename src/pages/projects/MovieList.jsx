import { Link } from 'react-router-dom';
import ScrollToTopOnLinkClick from '../../components/ScrollToTopOnLinkClick';
import FadeInAnimation from '../../components/FadeInAnimation';

// import images
import movieListImg1 from './../../assets/img/movie-list/movie-list-1.png';
import movieListImg2 from './../../assets/img/movie-list/movie-list-2.png';

export default function MovieList() {
  return (
    <div className='pages project-single-template'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>Movie List</FadeInAnimation>
          <FadeInAnimation wrapperElement='span' className='trigger' direction=''>Code  /  Design  /  Personal</FadeInAnimation>
        </div>
      </section>

      <div className='project-single-template-inner'>
        <section className='project-takeaway'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <FadeInAnimation wrapperElement='p' className='trigger' direction=''>This project focused on integrating React state into a movie rating feature, allowing users to conveniently rate and provide feedback on movies.</FadeInAnimation>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={movieListImg1} alt='PlusRoom App Mockup #1' className='trigger' direction=''></FadeInAnimation>
        
        {/* project summary */}
        <section className='project-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='challenge'>
                  <h5>Challenge</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>Use React state to enable users to add movie ratings</FadeInAnimation>
                </div>

                <div className='solution'>
                  <h5>Solution</h5>
                  <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>I developed a user-friendly movie rating system by implementing React state, allowing users to easily rate and provide feedback on movies. You can view the source code at my <Link to='https://github.com/clcapili/movielist-react-cc' target={'_blank'} className='link-hover'>github</Link> profile.</FadeInAnimation>
                </div>
              </div>

              <div className='col-lg-4'>
                <aside className='sidebar-summary'>
                  <div className='summary'>
                    <h6>MY ROLE</h6>
                    <ul>
                      <li>Full-stack Designer</li>
                      <li>UI Designer</li>
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
                      <li>Design</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <FadeInAnimation wrapperElement='img' src={movieListImg2} alt='PlusRoom App Mockup #1' className='trigger' direction=''></FadeInAnimation>

        <section className='pager'>
          <div className='container'>
            <ScrollToTopOnLinkClick to='/projects/bootstrap-web-page' className='next'>
              <h4>next project</h4>
              <h1>Bootstrap Web Page</h1>
            </ScrollToTopOnLinkClick>
          </div>
        </section>
      </div>
    </div>
  )
}