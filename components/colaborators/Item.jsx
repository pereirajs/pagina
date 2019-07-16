import React from 'react';
import A from '../Anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'



export default class Item extends React.Component {
    render() {
        const { name, avatar } = this.props;
        const bgImage = { backgroundImage: `url(${avatar})`};
        return(
            <article className="itemColaborator" style={ bgImage }>
                <div className="opacity">
                    <div className="contentItem">
                        <A> { name } </A>
                        <div className="contentIcons">
                            <div className="awesomeIcons"><FontAwesomeIcon icon={ faGithub } /></div>
                            <div className="awesomeIcons"><FontAwesomeIcon icon={ faTwitter } /></div>
                            <div className="awesomeIcons"><FontAwesomeIcon icon={ faLinkedin } /></div>
                        </div>
                    </div>

                </div>
                <style jsx>{`
                    .contentIcons {
                        display: flex;
                    }
                    .awesomeIcons {
                        color: var(--yellow);
                        margin: 4px;
                        cursor: pointer;                        
                    }
                    .itemColaborator {
                        display:flex;
                        background: url('/static/colaborators/alejandro_rendon_.JPG');
                        width: var(--width-item);
                        height: var(--height-item);
                        border-radius: 50%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        margin: 8px;
                        justify-content: center;
                        align-items: center;
                    }
                    .contentItem {
                        display:flex;
                        flex-direction: column;
                        width: var(--width-item);
                        height: var(--height-item);
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;

                    }
                    .opacity {
                        opacity: 0;
                        background-color: var(--blue);
                        width: var(--width-item);
                        height: var(--height-item);
                        border-radius: 50%;
                    }
                    .opacity:hover {
                        opacity: 0.9;
                        background-color: var(--dark-blue);
                        transition-property: all;
                        transition-duration: .9s;
                    }
                `}</style>
            </article>
        )
    }
}