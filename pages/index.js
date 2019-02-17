import Hero from "../components/hero/Hero";
import Events from "../components/events/Events";
import AboutUs from "../components/AboutUs";
import api from '../api/api';

class Index extends React.Component {

  static async getInitialProps() {
    const { posts } = await api.PTTpost.posts();
    return { posts };
  }

  render(){
    const { posts } = this.props;
    return (
      <React.Fragment>
          <Hero />
          <Events posts={ posts } urlApi= { api.urlApi }/>
          <AboutUs />
        </React.Fragment>
    );
  }

}

export default Index;
