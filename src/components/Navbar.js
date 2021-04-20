import React from "react";
import Logo from "../assets/images/atom.svg";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <nav className="nav nav-primary">
        <div className="nav--logo">
          <p>
            Towards
            <span>
              <img alt="towards science logo" srcSet={Logo} />
            </span>
            Science
          </p>
        </div>
        <ul className="list nav--list">
          <li className="nav-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/playlists" className="link">
              Playlists
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/liked-videos" className="link">
              Liked videos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/watch-list" className="link">
              Watch List
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
