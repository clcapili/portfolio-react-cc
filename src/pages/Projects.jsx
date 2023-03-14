import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.body.classList.add('projects-layout')
    return () => {
      document.body.classList.remove('projects-layout')
    }
  }, [])

  return (
    <div className='pages projects'>
      <section className='hero-text'>
        <div className='container'>
          <h3>Crafting code and visual personalities for digital brands.</h3>
        </div>
      </section>

      <section className='project'>
        <div className='container'>
          
        </div>
      </section>
    </div>
  );
}