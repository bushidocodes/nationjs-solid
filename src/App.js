import styled from "styled-components";
import Login from "./LogIn/Login";
import MainView from "./MainView";
import { BrowserRouter as Router } from "react-router";
import { sizes } from "./theme";
import { useAuth } from "./context/AuthContext";

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: ${sizes.navbarHeight} 1fr;
  grid-template-columns: 100%;
`;

const LoggedInContent = styled.div`
  text-align: left;
`;

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Router>
      <AppWrapper>
        {isLoggedIn ? (
          <LoggedInContent>
            <MainView />
          </LoggedInContent>
        ) : (
          <Login />
        )}
      </AppWrapper>
    </Router>
  );
}

export default App;
