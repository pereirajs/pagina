import React from 'react';

export default class Item extends React.Component {
    render() {
        const { name } = this.props;
        return(
            <article>
                <h4>{ name }</h4>
            </article>
        )
    }
}