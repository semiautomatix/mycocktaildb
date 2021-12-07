import React, { FunctionComponent } from "react";
import { Table, Image, Rating, Icon } from "semantic-ui-react";
import { Cocktail } from "models/cocktail";

interface FavouritesTableProps {
  onDeleteFavourite: (idDrink: string) => void;
  tableRows?: Cocktail[];
}

export const FavouritesTable: FunctionComponent<FavouritesTableProps> = ({
  onDeleteFavourite,
  tableRows = [],
}) => {
  const handleOnDeleteFavourite = (idDrink: string) =>
    onDeleteFavourite(idDrink);
  console.log(tableRows);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>&nbsp;</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableRows.map((tableRow) => (
          <Table.Row>
            <Table.Cell>{tableRow.strDrink}</Table.Cell>
            <Table.Cell>
              <Image src={tableRow.strDrinkThumb} size="small" />
            </Table.Cell>
            <Table.Cell>
              <Rating maxRating={5} clearable />
            </Table.Cell>
            <Table.Cell>
              <Icon
                name="trash"
                onClick={() => handleOnDeleteFavourite(tableRow.idDrink)}
                size="large"
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
