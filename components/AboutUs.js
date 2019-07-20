import Content from './Content';
import A from './Anchor';
import Button from './Button';

const AboutUs = () => (
  <section id='nosotros'>
    <Content className='center mw6 tc pv5' component='article' light>
      <h1>Nosotros</h1>
      <p>
        PereiraJS es un espacio gratuito y libre para aprender y compartir
        conocimiento sobre JavaScript. Realizamos charlas y talleres cada mes,
        generalmente el último jueves del mes. Las charlas son dos por evento, y
        una vez terminado, brindamos un espacio para realizar networking y
        disfrutar de algunos snacks gracias a nuestros patrocinadores{' '}
        <A href='#patrocinadores'>patrocinadores</A>
      </p>
      <Button href='#' className='mt4' secondary>
        ¿Te Interesa Brindar Una Charla?
      </Button>
    </Content>

    <style jsx>{`
      section {
        background-color: var(--dark-blue);
      }
    `}</style>
  </section>
);

export default AboutUs;
