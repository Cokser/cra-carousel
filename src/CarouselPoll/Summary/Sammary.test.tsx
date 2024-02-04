import { render, screen, fireEvent } from "@testing-library/react";
import { ITEMS_LIST } from "../../shared/api/mockApi";
import Summary from "./Summary";

const handleSubmitMock = jest.fn();
const questions = ITEMS_LIST.data;

describe("Summary Component tests", () => {
  test("Renders correctly initial button", async () => {
    render(<Summary questions={questions} handleSubmit={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("calls handleSubmit with correct data on click", () => {
    render(<Summary questions={questions} handleSubmit={handleSubmitMock} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(handleSubmitMock).toHaveBeenCalledWith({ data: questions });
  });
});
