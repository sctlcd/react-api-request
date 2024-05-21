import React from "react";

export default function Button ({ text="click", btnClass, icon, onClick, id }) {
  return (
    <button id={`btn-${id}`} className={`btn ${btnClass}`} onClick={onClick} >
      <span className="mr-05">{icon}</span>
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </button>
  );
};