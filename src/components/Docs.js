import LeftSide from './leftside';
import React from 'react';
import Nav from './Nav';
import {useParams} from 'react-router-dom';
export default function Docs() {
  const {docs} = useParams();
  if (docs) {
    console.log(docs);
    return (
      <>
        <Nav />
        <LeftSide version="1.0.0" branch="dev" />
        {docs}
      </>
    );
  }
  return (
    <>
      <Nav />
      <LeftSide version="1.0.0" branch="dev" />
    </>
  );
}
