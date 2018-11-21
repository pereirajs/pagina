import Logo from '../Logo'

const Navbar = () => (
  <nav className="flex items-center justify-between mw8 center pv3 w-100">
    <a href="/">
      <Logo />
    </a>
    <ul className="flex items-center">
      <li className="ph2">
        <a href="#eventos" title="Ir a Eventos">
          Eventos
        </a>
      </li>
      <li className="ph2">
        <a href="#patrocinadores" title="Ir a Patrocinadores">
          Patrocinadores
        </a>
      </li>
      <li className="ph2">
        <a href="#contacto" title="Ir a Contacto">
          Contacto
        </a>
      </li>
    </ul>

    <style jsx>{`
      a {
        text-transform: uppercase;
        color: white;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Navbar;
