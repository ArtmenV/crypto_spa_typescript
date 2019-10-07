import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container-fluid justify-content-center">
          <div className="row">
            <div className="col-lg-10">
              <div className="navbar-brand">
                <NavLink className="nav-link text-light ml-9" to="/" exact>
                  <h5>Coinmarketcap</h5>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
