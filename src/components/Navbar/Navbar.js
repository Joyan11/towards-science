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
      </nav>
    </>
  );
}
