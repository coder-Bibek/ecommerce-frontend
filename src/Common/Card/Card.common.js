import React from "react";
import "./Card.style.css";
function Card({ children, logo, label,icon }) {
  return (
    <div className="card mb-2 position-relative prod-card">
      <img src={logo} className="card-img-top" height={200} alt="logo" />
      <section className="d-flex flex-row align-items-center justify-content-around mt-2">
        <h5 className="label">{label}</h5>
        {icon}
      </section>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
