import React from "react";
import Genericcard from "../../../Common/Card/Generic.card";

function Cartright() {
  return (
    <Genericcard>
      <section className="d-flex flex-column align-items-center ">
        <span className="mb-3">
          <label className="mx-4">Vegetables:</label>
          <label>$48</label>
        </span>
        <span className="mb-3">
          <label className="mx-4">Johnson:</label>
          <label className="">$48</label>
        </span>
      </section>
      <hr />
      <section className="d-flex flex-row justify-content-center">
        <label className="mx-4">Total: </label>
        <label>$96</label>
      </section>
      <hr />
      <section className="d-flex flex-row justify-content-evenly">
        <button className="btn btn-info">
            checkout
        </button>
        <button className="btn btn-danger mx-2">
            Remove all
        </button>
      </section>
    </Genericcard>
  );
}

export default Cartright;
