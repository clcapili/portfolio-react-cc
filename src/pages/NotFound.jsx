import { Link } from 'react-router-dom';

import FadeInAnimation from './../components/FadeInAnimation';

import computer from './../assets/img/404.svg';
import iconLongLeft from './../assets/img/icon-arrow-long-left.svg';

export default function NotFound() {
  return (
    <div className='pages not-found'>
      <section className='hero-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>404</FadeInAnimation>
              <FadeInAnimation wrapperElement='p' className='trigger' direction=''>The page you are looking for doesn't exist</FadeInAnimation>

              <FadeInAnimation wrapperElement='div' className='back-link trigger' direction='down'>
                <Link to='/'>
                  <img src={iconLongLeft} alt='icon left for back link' />
                  <h5>go back</h5>
                </Link>
              </FadeInAnimation>
            </div>

            <div className='col-6'>
              <FadeInAnimation wrapperElement='img' src={computer} alt='404 sad computer svg icon' className='computer-face trigger' direction=''></FadeInAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}