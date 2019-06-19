import Hero from "../components/hero/Hero";
import Events from "../components/events/Events";
import AboutUs from "../components/AboutUs";
import Colaborators from "../components/colaborators/Colaborators"
import api from '../api/api';

class Index extends React.Component {

  static async getInitialProps() {
    const { posts } = await api.posts();
    const { colaborators } =  api;
    return { posts, colaborators };
  }

  render(){
    const { posts, colaborators } = this.props;
    return (
      <React.Fragment>
          <Hero />
          <Events posts={ posts } urlApi= { api.urlApi }/>
          <Colaborators colaborators={ colaborators } />
          <AboutUs />
        </React.Fragment>
    );
  }

}

export default Index;
