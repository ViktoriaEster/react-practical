import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActons';

const Header = () => {
    const history = useNavigate ();
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        history.push('/login');
    };

    return (
        <div className="header">
            <div className="user-info">
                {user ? (
                    <>
                        <span>Welcome, {user.username}!</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <span>Not logged in</span>
                )}
            </div>
        </div>
    );
};

export default Header;
