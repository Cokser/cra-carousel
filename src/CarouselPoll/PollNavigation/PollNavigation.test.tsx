import { render, screen, fireEvent } from "@testing-library/react";
import PollNavigation from "./PollNavigation";
import { ITEMS_LIST } from "../../shared/api/mockApi";

describe("PollNavigation Component tests", () => {
  const activeQuestion = 2;
  const handleActiveMock = jest.fn();

  it("Renders correctly initial buttons", async () => {
    render(
      <PollNavigation
        questions={ITEMS_LIST}
        handleActive={() => {}}
        activeQuestion={0}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons).toHaveLength(ITEMS_LIST.length);
  });

  it("calls handleActive with correct id when a button is clicked", () => {
    render(
      <PollNavigation
        questions={ITEMS_LIST}
        activeQuestion={activeQuestion}
        handleActive={handleActiveMock}
      />
    );

    fireEvent.click(screen.getByTestId(ITEMS_LIST[1].id));
    expect(handleActiveMock).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByTestId(ITEMS_LIST[3].id));
    expect(handleActiveMock).toHaveBeenCalledWith(3);
  });
});
