import React from 'react';
import Content from '../Content';
import Header from './Header'
import List from './List'
import Item from './Item';

export default class Colaborators extends React.Component {
    render() {
        const { colaborators } = this.props;
        return(
            <section>
                <Content className="center mw6 tc pv5" component="article">
                    <Header/>
                    <List>
                    { colaborators.map( colaborator => <Item key={ colaborator.id } {...colaborator}/>)}
                    </List>
                </Content>

            </section>
        )
    }
}