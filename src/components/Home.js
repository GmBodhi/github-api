import React from 'react';
import Nav from './Nav';
import '../css/home.css';
import {Link} from 'react-router-dom';
import Canvas from './canvas';
export default function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <Canvas />
        <h1>GitHub.API</h1>
        <p>Note: This package is under development..!</p>
        <Link to="/docs" className="seedocs">
          See the docs
        </Link>
      </div>
    </>
  );
}
