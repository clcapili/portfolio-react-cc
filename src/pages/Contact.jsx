import React, { useState } from 'react';
import { Link } from "react-router-dom";

import FadeInAnimation from './../components/FadeInAnimation';
import ScrollToTopOnLinkClick from './../components/ScrollToTopOnLinkClick';

// import images
import displayPhoto from './../assets/img/display-photo.jpg';
import codepenIcon from './../assets/img/icon-codepen.svg';
import githubIcon from './../assets/img/icon-github.svg';
import behanceIcon from './../assets/img/icon-behance.svg';
import linkedinIcon from './../assets/img/icon-linkedin.svg';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xeqwrzzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // handle the response data
      // reset form fields
      setFormData({
        fullName: '',
        emailAddress: '',
        phone: '',
        message: '',
      });
      console.log('Form submission complete!');
      // redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className='pages contact'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h3' className='trigger' direction=''>
            If you want to build a brand/website and don't know where to start — <span>drop me a line.</span>
          </FadeInAnimation>
        </div>
      </section>

      <section className='contact-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10'>
              <FadeInAnimation wrapperElement='h1' className='trigger' direction='down'>
                Let's make something great!
              </FadeInAnimation>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row form-wrapper'>
            <div className='col-lg-8'>
              {/* form start */}
              <form onSubmit={handleSubmit}>
                <div className='form-fields'>
                  <label htmlFor='fullName'><span>01</span>Full name*</label>
                  <input 
                    type='text' 
                    id='fullName' 
                    name='fullName' 
                    value={formData.fullName} 
                    onChange={handleInputChange} 
                    placeholder='Your full name' 
                    required
                  />
                </div>

                <div className='form-fields'>
                  <label htmlFor='emailAddress'><span>02</span>Email address*</label>
                  <input 
                    type='email' 
                    id='emailAddress' 
                    name='emailAddress' 
                    value={formData.emailAddress} 
                    onChange={handleInputChange} 
                    placeholder='Your email address' 
                    required
                  />
                </div>

                <div className='form-fields'>
                  <label htmlFor='phone'><span>03</span>Phone number*</label>
                  <input 
                    type='tel' 
                    id='phone' 
                    name='phone' 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder='123-456-7890' 
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
                    required
                  />
                </div>

                <div className='form-fields'>
                  <label htmlFor='message'><span>04</span>Message</label>
                  <input
                    type='text' 
                    id='message' 
                    name='message' 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder='(Optional)'
                  />
                </div>

                <div className='submit-button'>
                  <input type='submit' value='Submit' />
                </div>
              </form>
              {/* form end */}

              <div className='legal'>By submitting this form you consent to data processing and communication in accordance with the <ScrollToTopOnLinkClick to='/privacy-policy' className='link-hover'> privacy policy</ScrollToTopOnLinkClick>.</div>
            </div>

            <div className='col-lg-4'>
              <aside className="sidebar-contact">
                <img src={displayPhoto} className='display-photo' alt='Charlene Capili in an office' />

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