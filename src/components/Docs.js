import LeftSide from "./LeftSide";
import React from "react";
import Nav from "./nav";

export default function Docs(props) {
  return (
    <>
      <Nav />
      <LeftSide version="1.0.0" branch="dev" />
    </>
  );
}
