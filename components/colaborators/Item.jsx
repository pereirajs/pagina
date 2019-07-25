import React from 'react';
import A from '../Anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faStaylinked } from '@fortawesome/free-brands-svg-icons'



export default class Item extends React.Component {
    render() {
        const { name, avatar, twitter, github, linkedin, web } = this.props;
        const bgImage = { backgroundImage: `url(${avatar})`};
        return(
            <article className="itemColaborator" style={ bgImage }>
                <div className="opacity">
                    <div className="contentItem">
                        <A> { name } </A>
                        <div className="contentIcons">
                            { github && (<div className="awesomeIcons" onClick={this.clickLink.bind(this, github)}><FontAwesomeIcon icon={ faGithub } /></div>) }
                            { twitter && (<div className="awesomeIcons"onClick={this.clickLink.bind(this, twitter)}><FontAwesomeIcon icon={ faTwitter } /></div>) }
                            { linkedin && (<div className="awesomeIcons"onClick={this.clickLink.bind(this, linkedin)}><FontAwesomeIcon icon={ faLinkedin } /></div>) }
                            { web && (<div className="awesomeIcons"onClick={this.clickLink.bind(this, web)}><FontAwesomeIcon icon={ faStaylinked } /></div>) }
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

    clickLink(link) {
        const redirectWindow = window.open(link, '_blank');
        redirectWindow.location;

    }
}