import React from "react";

// Stateless functional component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
