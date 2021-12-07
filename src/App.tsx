import { FunctionComponent } from "react";
import "semantic-ui-css/semantic.min.css";
import { FavouritesProvider } from "providers/favourites/provider";
import { Home } from "components/pages/Home";

const App: FunctionComponent = () => {
  return (
    <FavouritesProvider>
      <Home />
    </FavouritesProvider>
  );
};

export default App;
