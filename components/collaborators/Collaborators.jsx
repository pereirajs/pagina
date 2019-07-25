import React from 'react';
import Content from '../Content';
import Header from './Header';
import List from './List';
import Item from './Item';

export default class Collaborators extends React.Component {
  render () {
    const { collaborators } = this.props;
    return (
      <section>
        <Content className='center mw6 tc pv5' component='article'>
          <Header />
        </Content>
        <Content className='center mw12 tc pv5' component='article'>
          <List>
            {collaborators.map(collaborator => <Item key={collaborator.id} {...collaborator} />)}
          </List>
        </Content>
      </section>
    );
  }
}
