import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img
              src="./images/hornet_studio_logo.svg"
              alt="hornet_std_logo"
              className="img_logo"
            />
          </NavLink>
        </div>

        <div className="list">
          <ul
            className={Mobile ? "navMenu-list" : "navMenu"}
            onClick={() => setMobile(false)}
          >
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/piercing">Piercing</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/realisation">Réalisations</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <button
            className="hamburger_button"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars fa-xl"></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
