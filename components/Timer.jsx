export default class Timer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { time } = this.props;
        return(
            <div>
                <h2> {this.parserDate(time.timer)} </h2>
            </div>
        )
    }

    parserDate(timer) {

        console.log('timer', timer)
        const pDate = new Date(timer);
        console.log(pDate)
        return pDate.getDate();

    }
}