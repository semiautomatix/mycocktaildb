import nock from "nock";
import TheCocktailDBRepository from "../TheCocktailDBRepository";

describe("The Cocktail DB Repository", () => {
  let sut: TheCocktailDBRepository;

  beforeEach(() => {
    sut = new TheCocktailDBRepository();
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.enableNetConnect();
  });

  it("Success: Search Cocktail", async () => {
    // arrange
    nock("https://www.thecocktaildb.com")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/json/v1/1/search.php")
      .query({
        s: "margarita",
      })
      .reply(200, {
        drinks: [
          {
            idDrink: "11007",
            strDrink: "Margarita",
          },
        ],
      });

    // act
    const result = await sut.searchCocktails("margarita");

    // assert
    expect(result).toMatchObject([
      {
        idDrink: "11007",
        strDrink: "Margarita",
      },
    ]);
  });
});
