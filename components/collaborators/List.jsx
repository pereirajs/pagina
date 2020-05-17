import React from 'react';

export default class List extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <section className='gridCollaborators'>
        {children}
        <style jsx>{`
          .gridCollaborators {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </section>
    );
  }
}
