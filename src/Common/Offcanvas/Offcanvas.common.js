import React from "react";
import "./Offcanvas.style.css";
import logo from "../../Images/logo.png";
function Offcanvas() {
  return (
    <div
      className="offcanvas offcanvas-start "
      data-bs-scroll="true"
      data-bs-backdrop="false"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="offcanvas-header d-flex justify-content-start bg-light">
        <img
          src={logo}
          width={30}
          height={30}
          alt="logo"
          className="img-fluid"
        />
        <label>Ecommerce</label>
      </div>
      <div className="offcanvas-body">
        <label className="text-muted mb-3 text-white">login details</label>
        <section className="d-flex flex-row align-items-center mid-section">
          <i className="fa fa-sign-in text-white mb-3" />
          <label className=" mb-3 text-white">Mero Login</label>
        </section>
        <label className="text-muted mb-3 text-white">order details</label>
        <section className="d-flex flex-row align-items-center mid-section">
          <i className="fa fa-cart-plus text-white mb-4" />
          <label className=" mb-4 text-white">Mero Cart</label>
        </section>
        <section className="d-flex flex-row align-items-center mid-section">
          <i className="fa fa-first-order text-white mb-3" />
          <label className=" mb-3 text-white">Mero Order</label>
        </section>
      </div>
    </div>
  );
}

export default Offcanvas;
