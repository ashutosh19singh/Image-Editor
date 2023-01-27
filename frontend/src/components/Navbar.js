import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
  {/* Hello world */}
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_edit.Magazin.png"
            height={45}
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <Link className="nav-link" to="/home">
               Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/filter">
              Filter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/editor">
              Editor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/filterslider">
              FilterSlider
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/manageuser">
              Manageuser
            </Link>
          </li> */}
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Navbar;