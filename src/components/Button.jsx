import React from "react";

export default function Button ({ text, btnClass, icon }) {
  return (
    <button className={`btn ${btnClass}`}>
      {icon}
      {text ? text : "click"}
    </button>
  );
};