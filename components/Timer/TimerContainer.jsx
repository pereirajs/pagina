export default class TimertItem extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className='TimerContainer'>
                { children }
                <style jsx>{`
                    .TimerContainer {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }

                `}</style>
            </div>
        );

    }
}