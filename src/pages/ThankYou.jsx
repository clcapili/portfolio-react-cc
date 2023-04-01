import { Link } from 'react-router-dom';
import FadeInAnimation from './../components/FadeInAnimation';

// import images
import computer from './../assets/img/thank-you.svg';
import iconLongLeft from './../assets/img/icon-arrow-long-left.svg';

export default function ThankYou() {
  return (
    <div className='pages thank-you'>
      <section className='hero-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>Thank You!</FadeInAnimation>
              <FadeInAnimation wrapperElement='p' className='trigger' direction=''>Thank you for submitting your form, I have received it and will be in touch with you shortly.</FadeInAnimation>

              <FadeInAnimation wrapperElement='div' className='back-link trigger' direction='down'>
                <Link to='/'>
                  <img src={iconLongLeft} alt='icon left for back link' />
                  <h5>go back</h5>
                </Link>
              </FadeInAnimation>
            </div>

            <div className='col-6'>
              <FadeInAnimation wrapperElement='img' src={computer} alt='thank you happy computer svg icon' className='computer-face trigger' direction=''></FadeInAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}