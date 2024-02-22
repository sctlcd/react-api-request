import React from "react";

export default function Button ({ text="click", btnClass, icon }) {
  return (
    <button className={`btn ${btnClass}`}>
      <span className="mr-05">{icon}</span>
      {text}
    </button>
  );
};