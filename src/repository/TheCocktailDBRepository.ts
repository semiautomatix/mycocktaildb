import { Cocktail } from "models/cocktail";
import TheCocktailDBApiController from "api/TheCocktailDBApiController";

// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
class TheCocktailDBRepository {
  private cocktailDBApiController: TheCocktailDBApiController =
    new TheCocktailDBApiController();
  private readonly searchURL: string = "/search.php";

  public searchCocktails = async (
    searchString: string
  ): Promise<Cocktail[]> => {
    const { data } = await this.cocktailDBApiController.client.get(
      this.searchURL,
      {
        params: {
          s: searchString,
        },
      }
    );
    return data.drinks ?? [];
  };
}

export default TheCocktailDBRepository;
