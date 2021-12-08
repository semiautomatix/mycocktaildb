import { FunctionComponent } from "react";
import { Table, Image } from "semantic-ui-react";
import { Cocktail } from "models/cocktail";
import { FavouritesIcon } from "components/UI/atoms/FavouritesIcon";

interface SearchResultsTableProps {
  onAddFavourite: (cocktail: Cocktail) => void;
  tableRows?: Cocktail[];
  favouriteIds?: string[];
  loading?: boolean;
}

export const SearchResultsTable: FunctionComponent<SearchResultsTableProps> = ({
  onAddFavourite,
  tableRows = [],
  favouriteIds = [],
  loading = false,
}) => {
  const handleOnAddFavourite = (cocktail: Cocktail) => onAddFavourite(cocktail);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>&nbsp;</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableRows.map((tableRow) => (
          <Table.Row id={tableRow.idDrink}>
            <Table.Cell>{tableRow.strDrink}</Table.Cell>
            <Table.Cell>
              <Image src={tableRow.strDrinkThumb} size="small" />
            </Table.Cell>
            <Table.Cell>
              <FavouritesIcon
                selected={favouriteIds.includes(tableRow.idDrink)}
                onClick={() => handleOnAddFavourite(tableRow)}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
