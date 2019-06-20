import React from 'react';
import A from '../Anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'



export default class Item extends React.Component {
    render() {
        const icon = <FontAwesomeIcon icon={ faGithub } />;
        console.log('icon', icon);
        const { name } = this.props;
        return(
            <article className="itemColaborator">
                <div className="opacity">
                    <div className="contentItem">
                        <A> { name } </A>
                        <div>
                            <FontAwesomeIcon icon={ faGithub }
                                style={{ color: `var(--yellow);` }}  />

                        </div>
                    </div>

                </div>
                <style jsx>{`
                    .iconContact {
                        color: var(--yellow);
                    }
                    .itemColaborator {
                        display:flex;
                        background: url('/static/colaborators/andres_rodriguez.JPG');
                        width: 300px;
                        height: 300px;
                        border-radius: 50%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        margin: 8px;
                        justify-content: center;
                        align-items: center;
                    }
                    .contentItem {
                        display:flex;
                        width: 300px;
                        height: 300px;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;

                    }
                    .opacity {
                        opacity: 0;
                        background-color: var(--blue);
                        width: 300px;
                        height: 300px;
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