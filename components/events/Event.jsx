import A from '../Anchor';

export default class Event extends React.Component {
  render () {
    const { post } = this.props;
    const { urlApi } = this.props;
    return (
      <article
        className='eventItem'
        style={{ backgroundImage: `url(${urlApi}${post.feature_image})` }}>
        <div className='opacity'>
          <div className='eventContent'>
            <A href={`${urlApi}/${post.slug}`} target='_blank'>
              {post.title}
            </A>
          </div>
        </div>
        <style jsx>{`
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
                .opacity:hover {
                  opacity: 0.9;
                  background-color: var(--dark-blue);
                  transition-property: all;
                  transition-duration: .9s;
                }

                .eventContent {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                }
                .eventContent:hover {
                  opacity: 1;
                  transition-property: all;
                  transition-duration: .9s;
                }
            `}
        </style>
      </article>
    );
  }
}
