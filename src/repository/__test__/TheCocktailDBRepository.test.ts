import nock from "nock";
import { TheCocktailDBRepository } from "../TheCocktailDBRepository";

describe("The Cocktail DB Repository", () => {
  let sut: TheCocktailDBRepository;

  beforeEach(() => {
    sut = new TheCocktailDBRepository();
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.enableNetConnect();
  });

  it("Search Cocktail", async () => {
    nock("https://www.thecocktaildb.com")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/json/v1/1/search.php")
      .query({
        s: "margarita",
      })
      .reply(200, [
        {
          idDrink: "11007",
          strDrink: "Margarita",
        },
      ]);

    const result = await sut.searchCocktails("margarita");

    expect(result).toMatchObject([
      {
        idDrink: "11007",
        strDrink: "Margarita",
      },
    ]);
  });
});
