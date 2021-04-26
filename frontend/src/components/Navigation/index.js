import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav>
            <ul className='nav-list'>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <div className='profile-btns'>
                        {isLoaded && sessionLinks}
                    </div>
                </li>
            </ul>

        </nav>
    );
}

export default Navigation;