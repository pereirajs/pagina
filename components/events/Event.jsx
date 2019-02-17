
export default class Event extends React.Component{
  render(){
    const { post }= this.props;
    const { urlApi }= this.props;
    return(
        <article
            className="eventItem"
            style={{ backgroundImage: `url(${urlApi}${post.feature_image})` }}>
            <div className="opacity">
                <div className="eventContent">
                    <span>{post.title}</span>
                </div>
            </div>

            <style>{`
                .eventItem {
                    width: 33%;
                    height: 250px;
                    background-position: 50% 50%;
                    background-size: cover;
                }
                .opacity {
                    opacity: 0.5;
                    background-color: var(--blue);
                    width: 100%;
                    height: 100%;
                }
                .eventContent {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
            `}
            </style>
        </article>
    );
  }
}
