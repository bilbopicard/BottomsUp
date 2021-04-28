import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const { id } = useSelector(state => state.session.user)
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="profile-div">
            {/* <button className="profile-btn" onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button> */}

            <ul className="profile-dropdown">
                <NavLink to={`/users/${id}`}><li>{user.username}</li></NavLink>
                {/* <li>{user.email}</li> */}
                <li>
                    <button onClick={logout} >Log Out</button>
                </li>
            </ul>

        </div>
    );
}

export default ProfileButton;