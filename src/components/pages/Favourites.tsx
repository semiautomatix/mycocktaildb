import { FunctionComponent } from "react";
import { FavouritesTable } from "components/UI/organisms/FavouritesTable";
import { useFavourites } from "providers/favourites/use";

export const FavouritesPage: FunctionComponent = () => {
  const {
    favourites,
    actions: { deleteFavourite },
  } = useFavourites();

  const handleDeleteFavourite = (idDrink: string) => {
    deleteFavourite(idDrink);
  };

  return (
    <div>
      <FavouritesTable
        tableRows={Array.from(favourites.values())}
        onDeleteFavourite={handleDeleteFavourite}
      />
    </div>
  );
};
