import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, sizes } from "../../../theme";

const StyledSubmit = styled.input`
  background-color: ${colors.actionBlue};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${colors.white};
  height: 24px;
  width: 75px;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  align-self: center;
  margin-right: 10px;
  cursor: pointer;
`;

const URIForm = styled.form`
  height: ${sizes.navbarHeight};
  display: grid;
  grid-template-columns: 1fr 80px;
  align-content: center;
`;

function NavBarField({ webid }) {
  const navigate = useNavigate();
  const [draftURI, setDraftURI] = useState(
    webid ? decodeURIComponent(webid) : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${encodeURIComponent(draftURI)}`);
  };

  return (
    <URIForm onSubmit={handleSubmit}>
      <input
        style={{ height: "24px", marginRight: "5px" }}
        type="text"
        onChange={(e) => setDraftURI(e.target.value)}
        value={draftURI}
      />
      <StyledSubmit type="submit" value="View" />
    </URIForm>
  );
}

export default NavBarField;
