import React from 'react';

export default class List extends React.Component {
    render() {
        const { children } = this.props;
        return(
            <section className="gridColaborators">
                { children }
                <style jsx>{`
                    .gridColaborators {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                      }
                `}</style>
            </section>
        )
    }
}