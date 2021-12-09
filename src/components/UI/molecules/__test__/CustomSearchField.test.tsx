import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomSearchField } from "../CustomSearchField";

test("Success: triggers search event", async () => {
  // arrange
  const onSearch = jest.fn();
  render(<CustomSearchField onSearch={onSearch} />);

  // act
  await userEvent.type(screen.getByRole("textbox"), "margarita", {
    delay: 100,
  });
  userEvent.click(screen.getByTestId("search-icon"));

  // assert
  expect(onSearch).toBeCalledWith(
    expect.any(Object),
    expect.objectContaining({
      value: "margarita",
    })
  );
});
