import React from "react";

function Genericcard({ children }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Genericcard;
