import { render, screen } from "@testing-library/react";
import { ITEMS_LIST } from "../../shared/api/mockApi";
import PollOption from "./PollOption";

describe("PollOption Component tests", () => {
  test("Renders correctly initial button", async () => {
    /* first we visit /login and test if the string in the element with class "login-label"  has"Please Log In" is there */
    render(
      <PollOption
        id={0}
        icon="ThumbsUpIcon"
        label="Yes"
        questionId={ITEMS_LIST[0].id}
        handlePoll={() => {}}
        answer={ITEMS_LIST[0].answer}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
