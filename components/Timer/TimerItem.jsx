export default class TimertItem extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <div className='TimerItem'>
                {value < 10 ?(<span>0{value}</span>):(<span>{value}</span>)}
                <style jsx>{`
                    .TimerItem {
                        font-size: 18px;
                        margin: 20px;
                        padding: 20px;
                        background-color: white;
                        color: var(--blue);
                    }
                `}</style>
            </div>
        );

    }
}