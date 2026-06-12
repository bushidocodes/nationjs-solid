import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../theme";

const ErrorBox = styled.div`
  background-color: ${colors.white};
  margin-top: 12px;
  border: solid 1px ${colors.borderGrayLight};
  padding: 20px;
  text-align: center;
  color: #666;
`;

class ProfileErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBox>
          <p>Could not load data from this SOLID pod. The pod may be unreachable or the profile may not exist.</p>
        </ErrorBox>
      );
    }
    return this.props.children;
  }
}

ProfileErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileErrorBoundary;
