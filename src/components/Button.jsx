import React from "react";

export default function Button ({ text, btnClass }) {
  return (
    <button className={`btn ${btnClass}`}>
      {text ? text : "click"}
    </button>
  );
};