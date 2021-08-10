import LeftSide from './leftside';
import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import {Redirect, useParams} from 'react-router-dom';
import Doc from './Doc';

const fetchDocs = (setJson, {version, branch}) => {
  fetch(
      `https://cdn.statically.io/gh/gmbodhi/github-api/${branch}/docs/${version}.json`,
  )
      .then((res) => res.json())
      .then((r) => setJson(r));
};

export default function Docs() {
  const {docs, branch, version} = useParams();
  if (!branch || !version) return <Redirect to="/docs/dev/1.0.0/" />;
  const [json, setJson] = useState({
    children: [{name: undefined, id: 'undefined'}],
  });
  useEffect(() => {
    fetchDocs(setJson, {
      version,
      branch,
    });
  }, [version, branch]);
  if (docs) {
    return (
      <>
        <Nav />
        <LeftSide json={json} />
        <Doc docs={docs} json={json} />
      </>
    );
  }
  return (
    <>
      <Nav />
      <LeftSide json={json} />
    </>
  );
}
