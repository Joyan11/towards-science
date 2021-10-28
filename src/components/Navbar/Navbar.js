import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/atom.svg";
import { useGeneralContext } from "../../contexts/general-context";

export function Navbar() {
  const { dispatchgeneral } = useGeneralContext();
  return (
    <>
      <nav className="nav nav-primary">
        <div className="nav--logo">
          <span
            className="ham-menu"
            onClick={() => dispatchgeneral({ type: "MENU_TOGGLE" })}>
            <ion-icon name="menu-outline"></ion-icon>
          </span>
          <p>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Towards
              <span>
                <img alt="towards science logo" srcSet={Logo} />
              </span>
              Science
            </Link>
          </p>
        </div>
        <ul className="list nav--list">
          <Link to="/user" className="router-link">
            <li className="nav-item" style={{ padding: "0 1rem 0 0" }}>
              <div className="notification">
                <ion-icon
                  name="person-circle-outline"
                  class="notification-icon"></ion-icon>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
