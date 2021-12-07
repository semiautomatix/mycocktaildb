import { FunctionComponent, useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { TheCocktailDBRepository } from "repository/TheCocktailDBRepository";
import { Cocktail } from "models/cocktail";
import { FavouritesProvider } from "providers/favourites/provider";
import { Home } from "components/pages/Home";

const theCocktailDBRepository: TheCocktailDBRepository =
  new TheCocktailDBRepository();

const App: FunctionComponent = () => {
  const [drinks, setDrinks] = useState<Cocktail[]>([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const cocktails: Cocktail[] | undefined =
        await theCocktailDBRepository.searchCocktails("margarita");

      setDrinks(cocktails);
    };
    fetchDrinks().catch((err) => console.error(err));
  }, []);

  console.log("drinks", drinks);

  return (
    <FavouritesProvider>
      <Home />
    </FavouritesProvider>
  );
};

export default App;
