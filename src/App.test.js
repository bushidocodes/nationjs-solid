import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

vi.mock("./context/AuthContext", () => ({
  useAuth: vi.fn(),
  AuthProvider: ({ children }) => children,
}));

vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => children,
  Link: ({ children }) => children,
  Route: () => null,
  Switch: () => null,
}));

import { useAuth } from "./context/AuthContext";
import App from "./App";

describe("App", () => {
  it("shows login form when not authenticated", () => {
    useAuth.mockReturnValue({ isLoggedIn: false, webId: null, login: vi.fn(), logout: vi.fn() });
    render(<App />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeTruthy();
    expect(screen.getByText("solid")).toBeTruthy();
  });

  it("shows main view when authenticated", () => {
    useAuth.mockReturnValue({ isLoggedIn: true, webId: "https://user.example/profile#me", login: vi.fn(), logout: vi.fn() });
    render(<App />);
    // MainView renders; the login button should not be present
    expect(screen.queryByRole("button", { name: /log in/i })).toBeNull();
  });
});
