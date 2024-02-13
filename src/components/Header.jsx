import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenuOutline } from "react-icons/io5";




const Header = () => {
  return (
    <div className="container nav__container">
      <Link to={'/'}>
        <h2><span>.</span> Pages</h2>
      </Link>
      <ul className="nav__menu">
        <li><Link to={'/profile'}>Orlando</Link></li>
        <li><Link to={'/create'}>Create</Link></li>
        <li><Link to={'/authors'}>Authors</Link></li>
        <li><Link to={'/logout'}>Logout</Link></li>
      </ul>
      <div className="nav__toggle-btn">
        <IoMenuOutline />
      </div>
    </div>
  )
}

export default Header