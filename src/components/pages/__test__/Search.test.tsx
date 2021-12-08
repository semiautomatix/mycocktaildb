import { act, fireEvent, render, screen } from "@testing-library/react";
import TheCocktailDBRepository from "repository/TheCocktailDBRepository";
import { SearchPage } from "components/pages/Search";

jest.mock("repository/TheCocktailDBRepository");

describe("Search Page", () => {
  const drinks = {
    drinks: [
      {
        idDrink: "11007",
        strDrink: "Margarita",
      },
    ],
  };

  const mockSearchCocktails = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    TheCocktailDBRepository.mockImplementation(() => {
      return {
        searchCocktails: jest.fn(),
      };
    });
  });

  it("Success: populates search results", async () => {
    // arrange
    mockSearchCocktails.mockResolvedValue(drinks);

    render(<SearchPage />);

    // act
    await act(async () => {
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: "margarita" },
      });
      fireEvent.click(screen.getByTestId("search-icon"));
    });

    // assert
    //expect(screen.getByRole("tbody")).toHave;
    // expect(onSearch).toBeCalledWith(
    //   expect.any(Object),
    //   expect.objectContaining({
    //     value: "margarita",
    //   })
    // );
  });
});
