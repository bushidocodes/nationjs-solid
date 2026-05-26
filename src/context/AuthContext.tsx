import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getDefaultSession,
  login as solidLogin,
  logout as solidLogout,
} from "@inrupt/solid-client-authn-browser";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const session = getDefaultSession();
  const [isLoggedIn, setIsLoggedIn] = useState(session.info.isLoggedIn);
  const [webId, setWebId] = useState(session.info.webId || null);

  useEffect(() => {
    session.onLogin(() => {
      setIsLoggedIn(true);
      setWebId(session.info.webId || null);
    });
    session.onLogout(() => {
      setIsLoggedIn(false);
      setWebId(null);
    });
    session.onSessionRestore((url) => {
      setIsLoggedIn(session.info.isLoggedIn);
      setWebId(session.info.webId || null);
    });
  }, [session]);

  const login = (oidcIssuer) =>
    solidLogin({
      oidcIssuer,
      redirectUrl: window.location.href,
      clientName: "NationJS Solid Demo",
    });

  const logout = () => solidLogout();

  return (
    <AuthContext.Provider value={{ isLoggedIn, webId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
