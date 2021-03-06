import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import '../DemoButton';
import DemoButton from '../DemoButton';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink exact to="/about" className='nav-page-btn'>About</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <DemoButton />
                <LoginFormModal />
                <NavLink to="/signup" className='nav-page-btn' id='signup-btn'>Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav>
            <ul className='nav-list'>

                <div id='left-side-div'>
                    <li>
                        <NavLink id='home-link-logo' exact to="/"><h1 className='bottoms-up'>BottomsUp</h1><img src="/nav-shaker.svg" alt="shaker logo" id='shaker-nav' /></NavLink>
                    </li>
                </div>
                <li>
                    <div className='right-side-nav'>

                        {isLoaded && sessionLinks}
                    </div>
                </li>

            </ul>
        </nav >
    );
}

export default Navigation;