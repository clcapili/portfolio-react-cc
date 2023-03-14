import React from 'react';
import { Link } from 'react-router-dom';

import icon from './../assets/img/icon-arrow-up-right.svg';

export default function Footer() {

  return (

    <footer>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer-col'>

            <h6>© 2023 All Rights Reserved</h6>

          </div>

          <div className='footer-col'>

            <div className='socials'>
              <h6>Socials</h6>
              
              <ul className='social-links'>
                <li>
                  <Link to='https://codepen.io/charlenelcapili' target={'_blank'}>
                    Codepen
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </Link>
                </li>
                <li>
                  <Link to='https://github.com/clcapili' target={'_blank'}>
                    Github
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </Link>
                </li>
                <li>
                  <Link to='https://www.behance.net/charlenelcapili' target={'_blank'}>
                    Behance
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </Link>
                </li>
                <li>
                  <Link to='https://www.linkedin.com/in/charlenelcapili/' target={'_blank'}>
                    LinkedIn
                    <img src={icon} alt='Icon arrow up right for external links' />
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className='footer-col'>
            <div className='contact-details'>
              <div className='contact'>
                <h6>Let's talk</h6>
                <p>Charlene Capili</p>
                <Link to='mailto:hello@charlenelcapili.me' target={'_blank'}>
                  hello@charlenelcapili.me
                  <img src={icon} alt='Icon arrow up right for external links' />
                </Link>
              </div>

              <p>Toronto, ON</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  );

}