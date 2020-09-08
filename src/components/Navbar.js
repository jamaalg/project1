import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="hurray">
        About
      </NavLink>
      <NavLink to="/cv" activeClassName="hurray">
        CV
      </NavLink>
    </div>
  );
}

export default Navbar;
