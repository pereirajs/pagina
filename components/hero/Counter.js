import Button from '../Button';
import Timer from '../Timer/Timer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOver: 'El Próximo evento será en',
      btnWannaAsist: 'Quiero Asistir'
    }
    this.handleTimerOver = this.handleTimerOver.bind(this);
  }
  componentDidMount() {
    const { timerStart, timerEnd } = this.props.timer;
    const now = new Date(Date.now());
    const timeMeetupStart = new Date(timerStart);
    const timeMeetupEnd = new Date(timerEnd);
    console.log(now.getHours())
    console.log(timeMeetupStart.getHours())
    console.log(timeMeetupEnd.getHours())

    if (now.getMonth() === timeMeetupStart.getMonth() &&
        now.getDate() === timeMeetupStart.getDate() &&
        now.getHours() >= timeMeetupStart.getHours() && now.getHours() <= timeMeetupEnd.getHours()) {
          this.setState({
            timeOver: 'El Meetup está en curso',
            btnWannaAsist: 'No importa. Quiero Asistir'
          });      
    }
  }
  render() {
    const { timer } = this.props;
    const { timeOver, btnWannaAsist } = this.state;
    return(
      <div>
        <h2>{ timeOver }</h2>
        <Timer time={timer} onTimeOver={this.handleTimerOver}/>
        <Button href='#' className='mt3'>{ btnWannaAsist }</Button>
      </div>
    );
  }
  handleTimerOver() {
    this.setState({
      timeOver: 'El Meetup está en curso',
      btnWannaAsist: 'No importa. Quiero Asistir'
    });
  }
}
export default Counter;
