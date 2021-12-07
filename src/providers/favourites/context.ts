import { Favourite } from "models/favourite";
import { createContext } from "react";

interface InitContextProps {
  favourites: Map<string, Record<string, unknown>>;
  actions: {
    addFavourite: (favourite: Favourite) => void;
    deleteFavourite: (id: string) => void;
  };
}

const defaultState = {
  favourites: new Map<string, Record<string, unknown>>(),
  actions: {
    addFavourite: (favourite: Favourite) => {
      //
    },
    deleteFavourite: (id: string) => {
      //
    },
  },
};

export const FavouritesContext = createContext<InitContextProps>(defaultState);
