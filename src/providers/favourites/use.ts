import { useContext } from "react";
import { FavouritesContext } from "./context";

export const useFavourites = () => {
  return useContext(FavouritesContext);
};
