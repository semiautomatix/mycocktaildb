import React, { FunctionComponent } from "react";
import { Icon } from "semantic-ui-react";

interface FavouritesIconProps {
  selected?: boolean;
  onClick: (value: any) => void;
}

export const FavouritesIcon: FunctionComponent<FavouritesIconProps> = ({
  selected = false,
  onClick,
}) =>
  selected ? (
    <Icon name="star" size="large" color="yellow" />
  ) : (
    <Icon name="star outline" onClick={onClick} size="large" />
  );
