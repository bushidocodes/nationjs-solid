import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";

const mockLogin = vi.fn();

vi.mock("../context/AuthContext", () => ({
  useAuth: () => ({ login: mockLogin }),
}));

import Login from "./Login";

describe("Login", () => {
  beforeEach(() => {
    mockLogin.mockClear();
  });

  it("renders the logo and form", () => {
    render(<Login />);
    expect(screen.getByText("solid")).toBeTruthy();
    expect(screen.getByRole("button", { name: /log in/i })).toBeTruthy();
  });

  it("pre-fills the IDP input with solidcommunity.net", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("https://solidcommunity.net");
    expect(input.value).toBe("https://solidcommunity.net");
  });

  it("calls login with the default IDP when submitted unchanged", () => {
    render(<Login />);
    fireEvent.submit(
      screen.getByRole("button", { name: /log in/i }).closest("form"),
    );
    expect(mockLogin).toHaveBeenCalledWith("https://solidcommunity.net");
  });

  it("calls login with the typed IDP URL", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("https://solidcommunity.net");
    fireEvent.change(input, { target: { value: "https://myserver.example" } });
    fireEvent.submit(input.closest("form"));
    expect(mockLogin).toHaveBeenCalledWith("https://myserver.example");
  });
});
