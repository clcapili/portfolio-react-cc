import FadeInAnimation from './../components/FadeInAnimation';

export default function PrivacyPolicy() {
  return (
    <div className='pages privacy-policy'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h4' className='trigger' direction=''>
            Privacy Policy
          </FadeInAnimation>
        </div>
      </section>
        
      <section className='policy'>
        <div className='container'>
          <div className='row'>
              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                Your privacy is important to us. It is CC Dev &amp; Design' policy to respect your privacy regarding any information we may collect from you across our website, https://charlenelcapili.me/, and other sites we own and operate.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                We don't share any personally identifying information publicly or with third-parties, except when required to by law.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
              </FadeInAnimation>

              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                This policy is effective as of 21 August 2020.
              </FadeInAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}