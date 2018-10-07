import Navbar from "./Navbar";
import Counter from "./Counter";

const Hero = () => (
  <header className="flex flex-column justify-between pb4">
    <Navbar />
    <div className="hero tc">
      <h1>Comunidad de Aprendizaje de JavaScript</h1>
      <Counter />
    </div>
    <a className="more db tc">Ver más</a>

    <style jsx>{`
      header {
        background-color: var(--blue);
        height: 95vh;
        color: white;
        background: url('/static/hero-bg.jpg') center top;
        background-size: cover;
      }
      a {
        color: white;
      }
    `}</style>
  </header>
);

export default Hero;
