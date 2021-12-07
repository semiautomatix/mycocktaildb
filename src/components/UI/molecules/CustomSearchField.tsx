import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { Icon, Input } from "semantic-ui-react";

interface CustomSearchFieldProps {
  onSearch: (event: ChangeEvent, data: object) => void;
  value?: string;
}

export const CustomSearchField: FunctionComponent<CustomSearchFieldProps> = ({
  onSearch,
  value = "",
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const handleOnChange = (event: ChangeEvent, { value }) =>
    setInputValue(value as string);
  const handleOnSearch = (event: ChangeEvent, data: object) =>
    onSearch(event, { ...data, value: inputValue });
  return (
    <Input
      icon={
        <Icon name="search" inverted circular link onClick={handleOnSearch} />
      }
      onChange={handleOnChange}
      placeholder="Search..."
      value={inputValue}
    />
  );
};
