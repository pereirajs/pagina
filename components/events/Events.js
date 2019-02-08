import Content from "../Content";
import A from "../Anchor";
import api from '../../api/api';

export default class Events extends React.Component{

  static async getInitialProps() {
    const { posts } = await api.PTTpost.posts();
    console.log('..............................................................................................')
    const p = {a:1, b:2};
    return { p };
  }
  
  render() {
    const { p } = this.props;
    console.log(p)
    return (
      <section id="eventos">
        <Content className="center mw6 tc pv5" component="article">
          <h1>Eventos</h1>
          <p>
            Los realizamos una vez por mes, durante 2 horas y compartimos algunos
            snacks. Aunque la entrada es gratuira es necesario que reserves.
            {' '}
            <A href="#registro">Asistir al próximo evento</A>
          </p>
        </Content>
      </section>
    )

  }

}


