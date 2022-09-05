import React from 'react'
import './header.css'
function Header() {
    return (
        <nav>
            <ul className="main-nav">
                <Link to="/">
                    <img src='/img/logo.png' alt='logo'/>
                </Link>
                
                <Link to="/" id='homeNav'>Home</Link>
                
            </ul>
        </nav>
    )
}

export default Header
