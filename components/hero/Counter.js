import Button from '../Button';
import Timer from '../Timer/Timer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOver: false
    }
    this.handleTimerOver = this.handleTimerOver.bind(this);
  }
  render() {
    const {timer} = this.props;
    return(
      <div>
        {this.state.timeOver ?(<h2>El Meetup está en curso</h2>):(<h2>El Próximo evento será en</h2>)}
        <Timer time={timer} onTimeOver={this.handleTimerOver}/>
        <Button href='#' className='mt3'>Quiero Asistir</Button>
      </div>
    );
  }
  handleTimerOver() {
    this.setState({
      timeOver: true
    });
  }
}
export default Counter;
