import React from 'react'

import { Link } from 'react-router-dom'

const Header = ({ darkMode, changeMode }) => {
    return (
        <header className='Header' style={{ background: darkMode ? '#2B3844' : '#ffffff' }}>
            <Link to={'/'}>
                <h1 style={{ color: darkMode ? '#ffffff' : '#111517' }}>Where in the world?</h1>
            </Link>
            <div onClick={() => changeMode()}>
                <i className={`${darkMode ? 'fa-solid' : 'fa-regular'} fa-moon`} style={{ color: darkMode ? '#ffffff' : '#111517' }}></i>
                <span style={{ color: darkMode ? '#ffffff' : '#111517' }}>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header