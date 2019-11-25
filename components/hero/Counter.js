import Button from '../Button';
import Timer from '../Timer/Timer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOver: 'El Próximo evento será en'
    }
    this.handleTimerOver = this.handleTimerOver.bind(this);
  }
  componentDidMount() {
    const { timerStart, timerEnd } = this.props.timer;
    const now = new Date(Date.now());
    const timeMeetupStart = new Date(timerStart);
    const timeMeetupEnd = new Date(timerEnd);

    if (now.getMonth() === timeMeetupStart.getMonth() &&
        now.getDate() === timeMeetupStart.getDate() &&
        now.getHours() > timeMeetupStart.getHours() && now.getHours() < timeMeetupEnd.getHours()) {
          this.setState({
            timeOver: 'El Meetup está en curso'
          });      
    }
  }
  render() {
    const { timer } = this.props;
    const { timeOver } = this.state;
    return(
      <div>
        <h2>{ timeOver }</h2>
        <Timer time={timer} onTimeOver={this.handleTimerOver}/>
        <Button href='#' className='mt3'>Quiero Asistir</Button>
      </div>
    );
  }
  handleTimerOver() {
    this.setState({
      timeOver: 'El Meetup está en curso'
    });
  }
}
export default Counter;
