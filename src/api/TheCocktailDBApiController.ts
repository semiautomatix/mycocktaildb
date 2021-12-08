import Axios, { AxiosInstance } from "axios";

class TheCocktailDBApiController {
  public static API_KEY = "1"; // TODO: environment variable
  public static URL = `https://www.thecocktaildb.com/api/json/v1/${TheCocktailDBApiController.API_KEY}`; // TODO: environment variable
  public client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: TheCocktailDBApiController.URL,
    });
  }
}

export default TheCocktailDBApiController;
