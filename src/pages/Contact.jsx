import { Link } from "react-router-dom";

import displayPhoto from './../assets/img/display-photo.jpg';
import codepenIcon from './../assets/img/icon-codepen.svg';
import githubIcon from './../assets/img/icon-github.svg';
import behanceIcon from './../assets/img/icon-behance.svg';
import linkedinIcon from './../assets/img/icon-linkedin.svg';

export default function Contact() {
  return (
    <div className='pages contact'>
      <section className='hero-text'>
        <div className='container'>
          <h3>If you want to build a brand/website and don't know where to start — <span>drop me a line.</span></h3>
        </div>
      </section>

      <section className='contact-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10'>
              <h1>Let's make something great!</h1>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row form-wrapper'>
            <div className='col-lg-8'>
              <form>
                <div className='form-fields'>
                  <label htmlFor='full-name'><span>01</span>Full name*</label>
                  <input type='text' id='full-name' name='full-name' placeholder='Your full name' required />
                </div>

                <div className='form-fields'>
                  <label htmlFor='email-address'><span>02</span>Email address*</label>
                  <input type='email' id='email-address' name='email-address' placeholder='Your email address' required />
                </div>

                <div className='form-fields'>
                  <label htmlFor='phone'><span>03</span>Phone number*</label>
                  <input  type='tel' id='phone' name='phone' placeholder='Your phone number' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
                </div>

                <div className='form-fields'>
                  <label htmlFor='message'><span>04</span>Message</label>
                  <input type='text' id='message' name='message' placeholder='(Optional)' />
                </div>

                <div className='submit-button'>
                  <input type='submit' value='Submit' />
                </div>
              </form>

              <div className='legal'>By submitting this form you consent to data processing and communication in accordance with the <Link to='/'> privacy policy</Link>.</div>
            </div>

            <div className='col-lg-4'>
              <aside className="sidebar-contact">
                <img src={displayPhoto} className='display-photo' alt='Charlene Capili display photo in an office' />

                <div className='sidebar-summary'>
                  <div className='summary'>
                    <h6>Email</h6> 
                    <ul>
                      <li>
                        <Link to='mailto:hello@charlenelcapili.me' className='link-hover' target='_blank'>
                          {/* icon */}
                          hello@charlenelcapili.me
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className='summary'>
                    <h6>Socials</h6>
                    <ul>
                      <li>
                        <Link to='https://codepen.io/charlenelcapili' className='link-hover' target='_blank'>
                          {/* icon */}
                          <img src={codepenIcon} className='social-icon' alt='SVG icon for Codepen' />
                          codepen
                        </Link>
                      </li>

                      <li>
                        <Link to='https://github.com/clcapili' className='link-hover' target='_blank'>
                          {/* icon */}
                          <img src={githubIcon} className='social-icon' alt='SVG icon for Github' />
                          github
                        </Link>
                      </li>

                      <li>
                        <Link to='https://www.behance.net/charlenelcapili' className='link-hover' target='_blank'>
                          {/* icon */}
                          <img src={behanceIcon} className='social-icon' alt='SVG icon for Behance' />
                          behance
                        </Link>
                      </li>

                      <li>
                        <Link to='https://www.linkedin.com/in/charlenelcapili/' className='link-hover' target='_blank'>
                          {/* icon */}
                          <img src={linkedinIcon} className='social-icon' alt='SVG icon for LinkedIn' />
                          linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}