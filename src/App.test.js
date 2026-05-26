import React from "react";
import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";

vi.mock("./context/AuthContext", () => ({
  useAuth: () => ({ isLoggedIn: false, webId: null, login: vi.fn(), logout: vi.fn() }),
  AuthProvider: ({ children }) => children,
}));

vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => children,
  Link: ({ children }) => children,
  Route: () => null,
  Switch: () => null,
}));

import App from "./App";

describe("App", () => {
  it("renders login view when not authenticated", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
