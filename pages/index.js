import Hero from '../components/hero/Hero';
import Events from '../components/events/Events';
import AboutUs from '../components/AboutUs';
import Collaborators from '../components/collaborators/Collaborators';
import api from '../api/api';

class Index extends React.Component {
  static async getInitialProps () {
    const { posts } = await api.posts();
    const { collaborators } = api;
    return { posts, collaborators };
  }

  render () {
    const { posts, collaborators } = this.props;
    return (
      <React.Fragment>
        <Hero />
        <Events posts={posts} urlApi={api.urlApi} />
        <Collaborators collaborators={collaborators} />
        <AboutUs />
      </React.Fragment>
    );
  }
}

export default Index;
