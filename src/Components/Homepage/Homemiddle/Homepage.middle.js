import React, { useState } from "react";
import Card from "../../../Common/Card/Card.common";
import "./Homemiddle.style.css";
import Products from "../../../Products/products.json";
import Ads from "../../../Common/Ads/Ads.common";
function Homemiddle() {
  const [cart, setCart] = useState([]);
  return (
    <div className="container flex-wrap middleContainer">
      <Ads />
      <div className="row">
        {Products.map((product, i) => (
          <div className="col-md-6 col-sm-12 col-lg-3" key={i}>
            <Card
              logo={product.image}
              label={product.brand}
              icon={
                <i
                  className="fa fa-cart-arrow-down cart-down px-2 mb-2"
                  id="cart-plus"
                  aria-hidden="true"
                  onClick={() => {
                    let prodbrand = product.brand;
                    setCart([{ brand: prodbrand, value: 1 }]);
                    console.log(cart)
                  }}
                />
              }
            >
              <section className="d-flex flex-row justify-content-between align-items-center desc-section">
                <label className="w-90">{product.description}</label>
                <strong className="position-relative">{product.price}</strong>
              </section>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homemiddle;
