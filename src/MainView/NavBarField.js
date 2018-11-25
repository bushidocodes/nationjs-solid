import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const StyledSubmit = styled.input`
  background-color: #3578e5;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #fff;
  height: 24px;
  width: 75px;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  align-self: center;
  margin-right: 10px;
`;

const URIForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 75px;
  * {
    margin: 10px;
  }
`;

class NavBar extends Component {
  state = {
    draftURI: this.props.webid ? decodeURIComponent(this.props.webid) : "",
    shouldRedirect: false
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ shouldRedirect: true });
  };
  render = () => {
    if (this.state.shouldRedirect === true) {
      this.setState({ shouldRedirect: false });
      return <Redirect to={`/${encodeURIComponent(this.state.draftURI)}`} />;
    } else {
      return (
        <URIForm onSubmit={this.handleSubmit}>
          <input
            style={{ margin: "10px" }}
            type="text"
            name="lastname"
            onChange={evt => this.setState({ draftURI: evt.target.value })}
            value={this.state.draftURI}
          />
          <StyledSubmit type="submit" value="View" />
        </URIForm>
      );
    }
  };
}

export default NavBar;
