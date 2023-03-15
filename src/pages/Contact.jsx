import { Link } from "react-router-dom";

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
            <div className='col-md-8'>
              <form>
                <div className='form-fields'>
                  <label for='full-name'><span>01</span>Full name*</label>
                  <input type='text' id='full-name' name='full-name' placeholder='Your full name' required />
                </div>

                <div className='form-fields'>
                  <label for='email-address'><span>02</span>Email address*</label>
                  <input type='email' id='email-address' name='email-address' placeholder='Your email address' required />
                </div>

                <div className='form-fields'>
                  <label for='phone'><span>03</span>Phone number*</label>
                  <input  type='tel' id='phone' name='phone' placeholder='Your phone number' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
                </div>

                <div className='form-fields'>
                  <label for='message'><span>04</span>Message</label>
                  <input type='text' id='message' name='message' placeholder='(Optional)' />
                </div>

                <div className='submit-button'>
                  <input type='submit' value='Submit' />
                </div>
              </form>

              <div className='legal'>By submitting this form you consent to data processing and communication in accordance with the <Link to='/'> privacy policy</Link>.</div>
            </div>

            <div className='col-md-4'>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}