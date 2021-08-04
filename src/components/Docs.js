import LeftSide from "./leftside";
import React from "react";
import Nav from "./Nav";

export default function Docs(props) {
  return (
    <>
      <Nav />
      <LeftSide version="1.0.0" branch="dev" />
    </>
  );
}
