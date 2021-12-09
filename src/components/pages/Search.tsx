import { Cocktail } from "models/cocktail";
import { FunctionComponent, useCallback, useEffect, useReducer } from "react";
import { CustomSearchField } from "components/UI/molecules/CustomSearchField";
import TheCocktailDBRepository from "repository/TheCocktailDBRepository";
import { SearchResultsTable } from "components/UI/organisms/SearchResultsTable";
import { useFavourites } from "providers/favourites/use";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

const searchReducer = (
  state: typeof initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "SEARCH_START":
      return { ...state, value: action.query, loading: true };
    case "SEARCH_END":
      return { ...state, results: action.results, loading: false };
    default:
      throw new Error();
  }
};

export const SearchPage: FunctionComponent = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { loading, results, value } = state;
  const {
    favourites,
    actions: { addFavourite },
  } = useFavourites();

  useEffect(() => {
    const fetchDrinks = async () => {
      const theCocktailDBRepository: TheCocktailDBRepository =
        new TheCocktailDBRepository();

      const cocktails: Cocktail[] | undefined =
        await theCocktailDBRepository.searchCocktails(value);

      dispatch({ type: "SEARCH_END", results: cocktails });
    };
    if (value) fetchDrinks().catch((err) => console.error(err)); // TODO: error handling
  }, [value]);

  const handleSearchChange = useCallback(
    (e, data) => {
      if (data.value !== value) {
        dispatch({ type: "SEARCH_START", query: data.value });
      }
    },
    [value]
  );

  const handleAddFavourite = (cocktail: Cocktail) => {
    addFavourite(cocktail);
  };

  return (
    <div>
      <CustomSearchField onSearch={handleSearchChange} value={value} />
      <SearchResultsTable
        loading={loading}
        tableRows={results}
        favouriteIds={Array.from(favourites.keys())}
        onAddFavourite={handleAddFavourite}
      />
    </div>
  );
};
