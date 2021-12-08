import { fireEvent, render, screen } from "@testing-library/react";
import { CustomSearchField } from "../CustomSearchField";

test("Success: triggers search event", () => {
  // arrange
  const onSearch = jest.fn();
  render(<CustomSearchField onSearch={onSearch} />);

  // act
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "margarita" },
  });
  fireEvent.click(screen.getByTestId("search-icon"));

  // assert
  expect(onSearch).toBeCalledWith(
    expect.any(Object),
    expect.objectContaining({
      value: "margarita",
    })
  );
});
