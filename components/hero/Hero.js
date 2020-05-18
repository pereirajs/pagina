import Counter from './Counter';

const Hero = (props) => (
  <section className='flex flex-column justify-between pb4 hero-section'>
    <div className='tc hero'>
      <h1>Comunidad de Aprendizaje de JavaScript</h1>
      <Counter timer={props.timer}/>
    </div>
    <a className='more db tc'>Conoce más sobre nosotros</a>

    <style jsx>{`
      .hero-section {
        background-color: var(--blue);
        height: 95vh;
        color: white;
        background: url('/static/hero-bg.jpg') center top;
        background-size: cover;
      }
      .hero {
        margin-top: 176px;
      }
      a {
        color: white;
      }
    `}</style>
  </section>
);

export default Hero;
