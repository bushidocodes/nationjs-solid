import { Link } from "react-router";
import styled from "styled-components";

const ProfileList = styled.ul`
  text-align: left;
`;

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This project is an attempt to replicate the familiar experience of social
        networking using the Solid framework. Solid is led by Sir Tim Berners-Lee
        and his merry band of researchers. It is an abbreviated portmanteau of
        &apos;Social&apos; and &apos;Linked Data,&apos; the semantic web concept that enables web apps
        to assemble a social graph from structured data decentralized across the
        world wide web.
      </p>
      <h2>Cool Profiles</h2>
      <ProfileList>
        <li>
          <Link to={`/${encodeURIComponent("https://ruben.verborgh.org/profile/#me")}/`}>
            Ruben Verborgh
          </Link>
        </li>
        <li>
          <Link to={`/${encodeURIComponent("http://csarven.ca/#i")}/`}>
            Sarven Capadisli
          </Link>
        </li>
        <li>
          <Link
            to={`/${encodeURIComponent(
              "https://id.myopenlink.net/DAV/home/KingsleyUyiIdehen/Public/kingsley.ttl#this"
            )}/`}
          >
            Kingsley Uyi Idehen
          </Link>
        </li>
      </ProfileList>
    </div>
  );
}

export default About;
