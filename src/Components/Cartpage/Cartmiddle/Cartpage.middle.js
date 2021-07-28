import React from "react";
import Cartleft from "../Cartleft/Cartpage.left";
import Cartright from "../Cartright/Cartpage.right";
import "./Cartmiddle.style.css";
function Cartmiddle() {
  return (
    <div className="cart-container shadow-lg card px-3 py-4 mb-2">
      <div className="row justify-content-evenly">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <Cartleft />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <Cartright />
        </div>
      </div>
    </div>
  );
}

export default Cartmiddle;
