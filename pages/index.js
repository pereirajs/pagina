import Hero from "../components/hero/Hero";
import Events from "../components/events/Events";
import AboutUs from "../components/AboutUs";
import api from '../api/api';

class Index extends React.Component {

  static async getInitialProps() {
    const { posts } = await api.PTTpost.posts();
    console.log(posts)
    const p = {a:1, b:2};
    return { p };
  }

  render(){
    return (
      <React.Fragment>
          <Hero />
          <Events />
          <AboutUs />
        </React.Fragment>
    );
  }
  
} 

export default Index;
