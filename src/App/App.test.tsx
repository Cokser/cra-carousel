import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { useCarouselForm } from "../shared/hooks/useCarouselForm";
import { ITEMS_LIST } from "../shared/api/mockApi";

jest.mock("../shared/hooks/useCarouselForm");

test("renders correctly with initial data", () => {
  // @ts-ignore
  useCarouselForm.mockReturnValue({
    data: ITEMS_LIST.data,
    handleSubmit: jest.fn(),
  });

  render(<App />);
  const carouselWrapper = screen.getByTestId("carousel-wrapper");
  expect(carouselWrapper).toBeInTheDocument();
});
