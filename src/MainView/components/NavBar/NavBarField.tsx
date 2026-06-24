import { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
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
`;

const URIForm = styled.form`
  height: ${sizes.navbarHeight};
  display: grid;
  grid-template-columns: 1fr 80px;
  align-content: center;
`;

const HiddenLabel = styled.label`
  position: absolute;
  left: -9999px;
`;

const WebIdInput = styled.input`
  height: 24px;
  margin-right: 5px;
`;

interface NavBarFieldProps {
  webid?: string;
}

function NavBarField({ webid }: NavBarFieldProps) {
  const [draftURI, setDraftURI] = useState(() =>
    webid ? decodeURIComponent(webid) : ""
  );
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate(`/${encodeURIComponent(draftURI)}`);
  };

  return (
    <URIForm onSubmit={handleSubmit}>
      <HiddenLabel htmlFor="webid-input">WebID or profile URL</HiddenLabel>
      <WebIdInput
        id="webid-input"
        type="url"
        name="webid"
        placeholder="Enter a WebID URL…"
        aria-label="WebID or profile URL"
        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
          setDraftURI(evt.target.value)
        }
        value={draftURI}
      />
      <StyledSubmit type="submit" value="View" />
    </URIForm>
  );
}

export default NavBarField;
