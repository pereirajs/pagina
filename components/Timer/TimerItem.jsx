export default class TimertItem extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <div className='TimerItem'>
                <div className="contentDots">
                    <div className="dots"></div>
                    <div className="dots"></div>
                </div>
                {value < 10 ?(<span>0{value}</span>):(<span>{value}</span>)}
                <style jsx>{`
                    .TimerItem {
                        font-size: 64px;
                        margin: 14px;
                        padding: 14px;
                        background-color: white;
                        color: var(--blue);
                        color: var(--blue);
                        border-radius: 4%;
                    }
                    .contentDots {
                        display: flex;
                        flex-direction:row;
                        justify-content: space-between;

                    }
                    .dots {
                        width: 7px;
                        height: 7px;
                        background-color: var(--blue);
                        border-radius: 50%;
                    }
                `}</style>
            </div>
        );

    }
}