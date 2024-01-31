import { render, screen } from "@testing-library/react";
import PollNavigation from "./PollNavigation";
import { ITEMS_LIST } from "../../shared/api/mockApi";

describe("PollNavigation Component tests", () => {
  beforeEach(() => {
    // write someting before each test
  });

  afterEach(() => {
    // write someting after each test
  });

  test("Renders correctly initial buttins", async () => {
    /* first we visit /login and test if the string in the element with class "login-label"  has"Please Log In" is there */
    render(
      <PollNavigation
        questions={ITEMS_LIST}
        handleActive={() => {}}
        activeQuestion={0}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(ITEMS_LIST.length);
    expect(buttons[0]).toBeInTheDocument();
  });
});
