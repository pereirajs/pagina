import Hero from '../components/hero/Hero';
import Events from '../components/events/Events';
import AboutUs from '../components/AboutUs';
import Collaborators from '../components/collaborators/Collaborators';
import api from '../api/api';
import Navbar from '../components/Nav/Navbar';

class Index extends React.Component {
  state = {backgroundNav:'#61b8ed'}
  static async getInitialProps () {
    const { posts } = await api.posts();
    const { collaborators, timer } = api;
    return { posts, collaborators, timer };
  }

  handleScroll = (e) => {
    if (window.scrollY > 150) this.setState({backgroundNav:'#61b8ed'})
    else this.setState({backgroundNav:'transparent'})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  render () {
    const { backgroundNav } = this.state
    const { posts, collaborators, timer } = this.props;
    return (
      <React.Fragment>
        <Navbar backgroundNav={backgroundNav}/>
        <Hero timer={ timer }/>
        <Events posts={posts} urlApi={api.urlApi} />
        <Collaborators collaborators={collaborators} />
        <AboutUs />
      </React.Fragment>
    );
  }
}

export default Index;
