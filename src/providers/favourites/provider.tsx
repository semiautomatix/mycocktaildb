import { Favourite } from "models/favourite";
import { useState } from "react";
import { FavouritesContext } from "./context";

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState<
    Map<string, Record<string, unknown>>
  >(new Map<string, Record<string, unknown>>());

  const addFavourite = (favourite: Favourite) => {
    const map = new Map<string, Record<string, unknown>>(favourites);
    map.set(favourite.idDrink, favourite);
    setFavourites(map);
  };

  const deleteFavourite = (id: string) => {
    const map = new Map<string, Record<string, unknown>>(favourites);
    map.delete(id);
    setFavourites(map);
  };

  const value = {
    favourites,
    actions: {
      addFavourite,
      deleteFavourite,
    },
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
