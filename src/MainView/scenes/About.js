import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>About</h1>
    <p>
      This project is an attempt to replicate the familiar experience of social
      networking using the Solid framework. Solid is led by Sir Tim Berners-Lee
      and his merry band of researchers. It is an abbreviated portmanteau of
      'Social' and 'Linked Data,' the semantic web concept that enables web apps
      to assemble a social graph from structured data decentralized across the
      world wide web.
    </p>
    <h2>Cool Profiles</h2>
    <ul style={{ textAlign: "left" }}>
      <Link
        to={`/${encodeURIComponent("https://ruben.verborgh.org/profile/#me")}/`}
      >
        <li>Ruben Verborgh</li>
      </Link>
      <Link to={`/${encodeURIComponent("http://csarven.ca/#i")}/`}>
        <li>Sarven Capadisli</li>
      </Link>
      <Link
        to={`/${encodeURIComponent(
          "https://id.myopenlink.net/DAV/home/KingsleyUyiIdehen/Public/kingsley.ttl#this"
        )}/`}
      >
        <li>Kingsley Uyi Idehen</li>
      </Link>
    </ul>
  </div>
);
