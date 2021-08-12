import React from 'react';
import { NavLink } from 'react-router-dom';
   

const NavBAr = () => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light  m-2">
  <NavLink className="navbar-brand  head" to="/" exact >S-aini</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse font-weight-bold " id="navbarNavAltMarkup">
    <ul className="navbar-nav">
      <li className="nav-item ">
      <NavLink to="/about" className="nav-link">About me</NavLink>      </li>
      <li className="nav-item">
        <NavLink to="/project" className="nav-link">projects</NavLink>
      </li>
      <li className="nav-item">
                <NavLink to="/post" className="nav-link">Posts</NavLink>
      </li>
     
    </ul>
  </div>
</nav>

    )
}

export default NavBAr
