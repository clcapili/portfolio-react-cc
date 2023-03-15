import { Link } from 'react-router-dom';

import computer from './../assets/img/404.svg';
import iconLongLeft from './../assets/img/icon-arrow-long-left.svg';

export default function NotFound() {
  return (
    <div className='pages not-found'>
      <section className='hero-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h1>404</h1>
              <p>The page you are looking for doesn't exist</p>

              <div className='back-link'>
                <Link to='/'>
                  <img src={iconLongLeft} alt='icon left for back link' />
                  <h5>go back</h5>
                </Link>
              </div>
            </div>

            <div className='col-6'>
              <img src={computer} alt='404 sad computer svg icon' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}