import { render, screen } from "@testing-library/react";
import { ITEMS_LIST } from "../../shared/api/mockApi";
import Sammary from "./Sammary";

describe("Sammary Component tests", () => {
  test("Renders correctly initial button", async () => {
    /* first we visit /login and test if the string in the element with class "login-label"  has"Please Log In" is there */
    render(<Sammary questions={ITEMS_LIST} hadnleSubmit={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
