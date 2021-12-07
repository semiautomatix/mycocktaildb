import { FunctionComponent } from "react";
import { Header, Segment, Tab } from "semantic-ui-react";
import { SearchPage } from "components/pages/Search";
import { FavouritesPage } from "components/pages/Favourites";

const panes = [
  {
    menuItem: "Search",
    render: () => (
      <Tab.Pane>
        <SearchPage />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Favourites",
    render: () => (
      <Tab.Pane>
        <FavouritesPage />
      </Tab.Pane>
    ),
  },
];

export const Home: FunctionComponent = () => {
  return (
    <div>
      <Header as="h1" attached="top">
        My Cocktail Page
      </Header>
      <Segment attached>
        <Tab panes={panes} />
      </Segment>
    </div>
  );
};
