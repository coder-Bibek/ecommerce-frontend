import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import Offcanvas from "../Offcanvas/Offcanvas.common";
import "./Navbar.style.css";
function Navbar() {

  //state and hooks
  const [length] = useState(2);
  const [bars, setBars] = useState("fa fa-bars mx-1 mt-1 mytoggle");

  //handling bars
  const handleBars = () => {
    if (bars === "fa fa-bars mx-1 mt-1 mytoggle") {
      if (window.innerWidth < 600) {
        document.querySelector("body").style.marginLeft = "80px";
        setBars("fa fa-times mt-1 mytoggle mx-5");
      } else {
        document.querySelector("body").style.marginLeft = "170px";
        setBars("fa fa-times mx-1 mt-1 mytoggle");
      }
    } else {
      document.querySelector("body").style.marginLeft = "0px";
      setBars("fa fa-bars mx-1 mt-1 mytoggle");
    }
  };

  //return statements
  return (
    <>
      <Offcanvas />
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="mycontainer">
          <span
            className={bars}
            data-bs-toggle="offcanvas"
            id="toggle"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            onClick={handleBars}
          ></span>

          <span className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="logo"
              width={35}
              height={28}
              className="d-inline-block align-text-top"
            />
            <Link to="/" className="text-black-50 text-decoration-none">
              Ecommerce
            </Link>
          </span>

          <ul className="navbar-nav d-flex flex-row align-items-center position-relative">
            <Link to="/ecommerce/cart">
              <i className="fa fa-shopping-cart position-relative" />
              {length > 0 ? (
                <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger mx-2">
                  {length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              ) : (
                <span></span>
              )}
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
