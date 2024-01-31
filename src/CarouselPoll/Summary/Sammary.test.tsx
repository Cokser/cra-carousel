import { render, screen } from "@testing-library/react";
import { ITEMS_LIST } from "../../shared/api/mockApi";
import Summary from "./Summary";

describe("Summary Component tests", () => {
  test("Renders correctly initial button", async () => {
    /* first we visit /login and test if the string in the element with class "login-label"  has"Please Log In" is there */
    render(<Summary questions={ITEMS_LIST} handleSubmit={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
