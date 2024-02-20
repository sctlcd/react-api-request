import React from "react";

export default function Title({ classes, text }) {
  return (
    <h1 className={classes ? classes || "title text-center" : "title"}>
      {text ? text : "Title"}
    </h1>
  );
};