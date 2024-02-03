import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App/App";

describe("App component", () => {
  test("renders correctly with initial data", async () => {
    render(<App />);
    const carouselComponent = screen.getByTestId("carousel-wrapper");
    expect(carouselComponent).toBeInTheDocument();
  });
});
