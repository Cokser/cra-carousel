import { render, screen } from "@testing-library/react";
import { ITEMS_LIST } from "../shared/api/mockApi";
import { Carousel } from "./Carousel";
import { PollContext } from "../shared/hooks/usePollContext";

const defaultComponent = (
  <PollContext.Provider value={ITEMS_LIST.data}>
    <Carousel
      handleSubmit={() => {}}
      handleQuestion={() => {}}
      slideOnSelect={false}
    />
  </PollContext.Provider>
);

describe("Carousel Component tests", () => {
  it("Renders correctly initial all slides", () => {
    render(defaultComponent);
    ITEMS_LIST.data.forEach((item) => {
      const slide = screen.getByText(item.title);
      expect(slide).toBeInTheDocument();
    });
  });
});
