import React from 'react';
import logo from '../assets/images/logo.png';

export const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='todo list'></img>
                </div>
                <h3>To Do App</h3>
            </nav>
        </header>
    )
}

export default Header;