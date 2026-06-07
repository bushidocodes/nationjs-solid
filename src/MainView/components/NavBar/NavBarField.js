import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
  /* * {
    margin: 10px;
  } */
`;

class NavBarField extends Component {
  state = {
    draftURI: this.props.webid ? decodeURIComponent(this.props.webid) : "",
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.history.push(`/${encodeURIComponent(this.state.draftURI)}`);
  };
  render = () => {
    return (
      <URIForm onSubmit={this.handleSubmit}>
        <label htmlFor="webid-input" style={{ position: "absolute", left: "-9999px" }}>
          WebID or profile URL
        </label>
        <input
          id="webid-input"
          style={{ height: "24px", marginRight: "5px" }}
          type="url"
          name="webid"
          placeholder="Enter a WebID URL…"
          aria-label="WebID or profile URL"
          onChange={(evt) => this.setState({ draftURI: evt.target.value })}
          value={this.state.draftURI}
        />
        <StyledSubmit type="submit" value="View" />
      </URIForm>
    );
  };
}

export default withRouter(NavBarField);
