import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/" exact style={{padding:15}}>Home</NavLink>
    <NavLink to="/movies" exact style={{padding:15}}>Movies</NavLink>
    <NavLink to="/directors" exact style={{padding:15}}>Directors</NavLink>
    <NavLink to="/actors" exact style={{padding:15}}>Actors</NavLink>
        </div>
        )
}

export default NavBar;
