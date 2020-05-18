import Logo from '../Logo';

const Navbar = (props) => {
    const style = {background:props.backgroundNav}

    return (
      <header>
        <nav style = {style} className='flex items-center justify-between center'>
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
    
        </nav>
        <style jsx>{`
          header {
            background: transparent;
            position:fixed;
            width:100%;
            z-index:10;
          }
          a {
            text-transform: uppercase;
            color: white;
            text-decoration: none;
          }
          header > nav {
            padding: 1rem 1em;
          }
        `}</style>
      </header>
    );
}

export default Navbar;
