import Logo from '../Logo';

const Navbar = () => (
  <nav className='flex items-center justify-between mw8 center pv3 w-100'>
    <a href='/'>
      <Logo />
    </a>
    <ul className='flex items-center'>
      <li className='ph2'>
        <a href='#events' title='Ir a Eventos'>
          Eventos
        </a>
      </li>
      <li className='ph2'>
        <a href='#sponsors' title='Ir a Patrocinadores'>
          Patrocinadores
        </a>
      </li>
      <li className='ph2'>
        <a href='#collaborators' title='Ir a Colaboradores'>
          Colaboradores
        </a>
      </li>
      <li className='ph2'>
        <a href='#aboutus' title='Ir a Acerca de nosotros'>
          Nosotros
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
