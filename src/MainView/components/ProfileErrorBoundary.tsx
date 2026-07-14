import { Component, type ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../theme";

interface ProfileErrorBoundaryProps {
  children: ReactNode;
}

interface ProfileErrorBoundaryState {
  hasError: boolean;
}

const ErrorBox = styled.div`
  background-color: ${colors.white};
  margin-top: 12px;
  border: solid 1px ${colors.borderGrayLight};
  padding: 20px;
  text-align: center;
  color: #666;
`;

class ProfileErrorBoundary extends Component<
  ProfileErrorBoundaryProps,
  ProfileErrorBoundaryState
> {
  state: ProfileErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ProfileErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBox>
          <p>
            Could not load data from this SOLID pod. The pod may be unreachable
            or the profile may not exist.
          </p>
        </ErrorBox>
      );
    }
    return this.props.children;
  }
}

export default ProfileErrorBoundary;
