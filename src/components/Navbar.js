import React from "react";

function Navbar({cartCount}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🛒 ShopHub
        </a>

        <div className="ms-auto">
          <button className="btn btn-warning">
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;