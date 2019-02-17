export default class GridEvents extends React.Component {

  render() {
    const { children }= this.props;
    return(
      <section className="gridEvents">
        { children }
        <style jsx>{`
            .gridEvents{
              display: flex;
              flex-wrap: wrap;
            }
        `}
        </style>
    </section>
    );
  }

}
