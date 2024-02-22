import React from "react";

export default function Button ({ text="click", btnClass, icon }) {
  return (
    <button className={`btn ${btnClass}`}>
      {icon}
      {text}
    </button>
  );
};