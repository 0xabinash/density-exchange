import "./navbar.css"
import { Link } from 'gatsby';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar-component'>
        <span className='logo'><img src="logo.png" alt="company-logo" /></span>
        <div className='nav-content'>
            <div className="links">
                <Link  to='/career'>Career</Link>
                <Link  to='/Blogs'>Blogs</Link>
                <Link  to='/Leaderboard'>Leaderboard</Link>
                <Link  to='/Fees'>Fees</Link>
            </div>
            <button>Trade Now</button>
        </div>
    </nav>
  )
}

export default Navbar;