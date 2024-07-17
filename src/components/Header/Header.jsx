import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import { useState } from "react";
import { MenuScale } from "iconoir-react";
import React from "react";

const Header = () => {
  const location = useLocation();
  const [toggled, setToggled] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full bg-dark bg-grains bg-[length:235px_235px] bg-fixed bg-repeat z-[999]">
      <Container fluid>
        <div className="relative w-full py-3 flex items-center justify-between gap-x-3">
          <div className="relative flex items-center gap-x-5">
            <Link to="/" className="block w-12">
              <img
                src="/assets/images/logo.svg"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
            <div className={`menu-wrapper ${toggled ? "active" : ""}`}>
              <div
                className="menu-backdrop"
                onClick={() => setToggled(false)}
              ></div>
              <ul className="menu">
                <li className="menu-item">
                  <Link
                    className={`menu-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Create Token
                  </Link>
                </li>
                {/* <li className="menu-item">
                  <Link className="menu-link">Analytics</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link">Portfolio</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link">Credits</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="relative flex items-center gap-x-2">
            {/* <button type="button" className="btn btn-primary">
            
            </button> */}
            <w3m-button />
            <button
              type="button"
              className="btn btn-primary inline-block lg:hidden"
              onClick={() => setToggled(true)}
            >
              <MenuScale />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
