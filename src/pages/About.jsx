import FadeInAnimation from './../components/FadeInAnimation';

export default function About() {
  return (
    <div className='pages about'>
      <section className='hero-text'>
        <div className='container'>
          <FadeInAnimation wrapperElement='h4' className='trigger' direction=''>
            I'm a Toronto based Web Developer and Interactive Designer <span>with 6+ years of experience in developing solid, scalable digital products with excellent user experiences.</span>
          </FadeInAnimation>
        </div>
      </section>
        
      <section className='about-me'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='skills'>
                <FadeInAnimation wrapperElement='div' className='skillset trigger' direction='left'>
                  <h6>Programming Languages</h6>
                  <ul>
                    <li>HTML5 & CSS3/SASS</li>
                    <li>JavaScript &#40;ES6&#41;</li>
                    <li>PHP, GraphQL</li>
                  </ul>
                </FadeInAnimation>

                <FadeInAnimation wrapperElement='div' className='skillset trigger' direction='left'>
                  <h6>Libraries & Frameworks</h6>
                  <ul>
                    <li>jQuery, React.js, Node.js</li>
                    <li>Bootstrap, Foundation</li>
                  </ul>
                </FadeInAnimation>

                <FadeInAnimation wrapperElement='div' className='skillset trigger' direction='left'>
                  <h6>Tools & Platforms</h6>
                  <ul>
                    <li>Git, Webpack</li>
                    <li>WordPress, RestAPI</li>
                  </ul>
                </FadeInAnimation>

                <FadeInAnimation wrapperElement='div' className='skillset trigger' direction='left'>
                  <h6>Design</h6>
                  <ul>
                    <li>Adobe XD & Figma</li>
                    <li>Adobe Illustrator & Photoshop</li>
                  </ul>
                </FadeInAnimation>
              </div>
            </div>

            <div className='col-md-7'>
              <FadeInAnimation wrapperElement='p' className='trigger' direction='up'>
                My name is Charlene Capili, and I consider myself as someone who is creative combined with a strong and logical mind. As a result, I developed passion for interactive design and web development. I am a problem-solver, and a very organized person with high attention to detail. I enjoy designing and coding things from scratch and bringing concepts to life on the internet, as well as passion for  UI design, brand identity, and design systems, as I value intuitive designs and thoughtful interactions.
              </FadeInAnimation>
              <h1>digital tools.</h1>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}