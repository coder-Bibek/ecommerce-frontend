import React, { useState } from "react";
import Genericcard from "../../../Common/Card/Generic.card";
import cart from "../../../Products/cart.json";
function Cartleft() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      {cart.map((product, i) => (
        <Genericcard key={i}>
          <img src={product.image} alt="product" height={150} />
          <p className="mt-3 text-center">{product.brand}</p>
          <section className="d-flex justify-content-center ">
            <span
              className="mx-2 btn btn-primary h-25"
              onClick={() => setCounter(++counter)}
            >
              +
            </span>
            <label className="mx-2 mt-2">{counter < 0 ? setCounter(0):counter}</label>
            <span
              className="mx-2 btn btn-danger h-25"
              onClick={() => setCounter(--counter)}
            >
              -
            </span>
          </section>
        </Genericcard>
      ))}
    </div>
  );
}

export default Cartleft;
