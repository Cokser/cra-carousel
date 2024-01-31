import { render, screen } from "@testing-library/react";
import { ITEMS_LIST } from "../shared/api/mockApi";
import { Carousel } from "./Carousel";
import { PollContext } from "../shared/hooks/usePollContext";

describe("Carousel Component tests", () => {
  test("Renders correctly initial Carousel Component", () => {
    /* first we visit /login and test if the string in the element with class "login-label"  has"Please Log In" is there */
    render(
      <PollContext.Provider value={ITEMS_LIST}>
        <Carousel hadnleSubmit={() => {}} handleQuestion={() => {}} />
      </PollContext.Provider>
    );
    const item = screen.getByText(ITEMS_LIST[0].title);
    expect(item).toBeInTheDocument();
  });
});
