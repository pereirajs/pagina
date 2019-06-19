import React from 'react';

export default class List extends React.Component {
    render() {
        const { children } = this.props;
        return(
            <section>
                { children }
            </section>
        )
    }
}