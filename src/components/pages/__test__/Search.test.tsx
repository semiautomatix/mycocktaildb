import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TheCocktailDBRepository from "repository/TheCocktailDBRepository";
import { SearchPage } from "components/pages/Search";

jest.mock("repository/TheCocktailDBRepository");

describe("Search Page", () => {
  const drinks = [
    // TODO: update this to allow table to properly render
    {
      idDrink: "drink-id-1",
      strDrink: "Margarita",
    },
    {
      idDrink: "drink-id-2",
      strDrink: "Tom Collins",
    },
  ];

  const mockSearchCocktails = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    TheCocktailDBRepository.mockImplementation(() => {
      return {
        searchCocktails: mockSearchCocktails,
      };
    });
  });

  it("Success: populates search results", async () => {
    // arrange
    mockSearchCocktails.mockResolvedValue(drinks);

    render(<SearchPage />);

    // act
    await userEvent.type(screen.getByRole("textbox"), "tom collins", {
      delay: 100,
    });

    userEvent.click(screen.getByTestId("search-icon"));

    await waitFor(() =>
      expect(screen.getByTestId("table-row-1")).toBeInTheDocument()
    );

    // assert
    expect(screen.queryAllByRole("row")).toHaveLength(3);
  });
});
