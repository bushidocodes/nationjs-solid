import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";

vi.mock("@inrupt/solid-client-authn-browser", () => ({
  getDefaultSession: () => ({ info: { isLoggedIn: false } }),
}));

const mockGetSolidDataset = vi.fn();
const mockGetThing = vi.fn();
const mockGetStringNoLocale = vi.fn(() => null);
const mockGetUrl = vi.fn(() => null);
const mockGetUrlAll = vi.fn(() => []);
const mockGetInteger = vi.fn(() => null);

vi.mock("@inrupt/solid-client", () => ({
  getSolidDataset: (...args) => mockGetSolidDataset(...args),
  getThing: (...args) => mockGetThing(...args),
  getStringNoLocale: (...args) => mockGetStringNoLocale(...args),
  getUrl: (...args) => mockGetUrl(...args),
  getUrlAll: (...args) => mockGetUrlAll(...args),
  getInteger: (...args) => mockGetInteger(...args),
}));

import { useProfile } from "./useProfile";

// Simple wrapper component so we can test the hook without renderHook (not in @testing-library/react v12)
function ProfileDisplay({ webId }) {
  const { profile, loading, error } = useProfile(webId);
  if (loading) return <div>loading</div>;
  if (error) return <div>error: {error.message}</div>;
  if (!profile) return <div>no profile</div>;
  return (
    <div>
      <span data-testid="name">{profile.name}</span>
      <span data-testid="image">{profile.image}</span>
    </div>
  );
}

describe("useProfile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows no profile when webId is null", () => {
    render(<ProfileDisplay webId={null} />);
    expect(screen.getByText("no profile")).toBeTruthy();
    expect(mockGetSolidDataset).not.toHaveBeenCalled();
  });

  it("shows loading while fetching", () => {
    mockGetSolidDataset.mockReturnValue(new Promise(() => {})); // never resolves
    render(<ProfileDisplay webId="https://example.org/profile#me" />);
    expect(screen.getByText("loading")).toBeTruthy();
  });

  it("renders profile name after successful fetch", async () => {
    const mockDataset = {};
    const mockThing = {};
    mockGetSolidDataset.mockResolvedValue(mockDataset);
    mockGetThing.mockReturnValue(mockThing);
    mockGetStringNoLocale.mockImplementation((_thing, predicate) =>
      predicate.endsWith("name") ? "Ruben Verborgh" : null
    );
    mockGetUrl.mockReturnValue(null);

    render(<ProfileDisplay webId="https://ruben.verborgh.org/profile/#me" />);

    await waitFor(() => expect(screen.getByTestId("name")).toBeTruthy());
    expect(screen.getByTestId("name").textContent).toBe("Ruben Verborgh");
    expect(mockGetSolidDataset).toHaveBeenCalledWith(
      "https://ruben.verborgh.org/profile/#me",
      { fetch: undefined }
    );
  });

  it("shows error when fetch fails", async () => {
    mockGetSolidDataset.mockRejectedValue(new Error("Network error"));

    render(<ProfileDisplay webId="https://example.org/profile#me" />);

    await waitFor(() => screen.getByText("error: Network error"));
  });

  it("shows no profile when thing is not found in dataset", async () => {
    mockGetSolidDataset.mockResolvedValue({});
    mockGetThing.mockReturnValue(null);

    render(<ProfileDisplay webId="https://example.org/profile#me" />);

    await waitFor(() => screen.getByText("no profile"));
  });
});
