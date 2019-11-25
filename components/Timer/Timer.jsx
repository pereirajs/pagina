import Countdown from 'react-countdown-now';
import TimerItem from './TimerItem';
import TimerContainer from './TimerContainer';
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { time, onTimeOver } = this.props;
        return(
            <div>
                <Countdown
                    date={new Date(time.timerStart)}
                    renderer={this.parserDate}
                    onComplete= {onTimeOver}
                    zeroPadTime={2} />
            </div>
        )
    }


    parserDate({ days, hours, minutes, seconds, completed }) {
        if (completed) {
            // Render a completed state
            return null;
        } else {
            // Render a countdown
            return (
                <TimerContainer>
                    <TimerItem value={days}/>
                    <TimerItem value={hours}/>
                    <TimerItem value={minutes}/>
                    <TimerItem value={seconds}/>
                </TimerContainer>
            );
        }
    }
}