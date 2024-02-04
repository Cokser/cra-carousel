import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App/App";

test("renders correctly with initial data", () => {
  render(<App />);
  const carouselComponent = screen.getByTestId("carousel-wrapper");
  expect(carouselComponent).toBeInTheDocument();
});
