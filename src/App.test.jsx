import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";

vi.mock("./context/AuthContext", () => ({
  useAuth: vi.fn(),
  AuthProvider: ({ children }) => children,
}));

vi.mock("react-router", () => ({
  BrowserRouter: ({ children }) => children,
}));

vi.mock("./MainView", () => ({
  default: () => <div>main view</div>,
}));

import { useAuth } from "./context/AuthContext";
import App from "./App";

describe("App", () => {
  it("shows the login form when not authenticated", () => {
    useAuth.mockReturnValue({
      isLoggedIn: false,
      webId: null,
      login: vi.fn(),
      logout: vi.fn(),
    });
    render(<App />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeTruthy();
    expect(screen.getByText("solid")).toBeTruthy();
    expect(screen.queryByText("main view")).toBeNull();
  });

  it("shows the main view when authenticated", () => {
    useAuth.mockReturnValue({
      isLoggedIn: true,
      webId: "https://user.example/profile#me",
      login: vi.fn(),
      logout: vi.fn(),
    });
    render(<App />);
    expect(screen.getByText("main view")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /log in/i })).toBeNull();
  });
});
