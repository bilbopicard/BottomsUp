import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './About.css';


function About() {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    if (!sessionUser) {
        history.push('/');
    }
    return (
        <div id='about-container'>
            <div id='about-inner-div'>
                <div id="img-div-about">
                    <img src="./jamie.png" id='about-pic' alt='Jamie, the developer' />
                </div>
                <div id='about-right-div'>
                    <p>I'm Jamie. I made this app because I wanted a simple to use app for people to find some delicious cocktails. The instructions are easy to follow and the recipes are some of my favorites from my years making classic and craft cocktails behind the stick. This app can be a digital bartender for anyone wanting a tasty drink.</p>
                    <div id='about-links'>
                        <a href='https://github.com/bilbopicard' target='_blank' rel="noreferrer">GitHub</a>
                        <a href='https://www.linkedin.com/in/sullivan-jamie/' target='_blank' rel="noreferrer">LinkedIn</a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About;