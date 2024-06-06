import { Table } from "@tanstack/react-table";
import React, { useState } from "react";
import { PopulationDropdownData } from "../../../constants";
import countries from "../../../store/ducks/countries";
import { dispatch } from "../../../store/store";
import { CountryData } from "../../../types";
import { Dropdown } from "./Dropdown";

type FiltersProp = {
  table: Table<CountryData>;
};
export const Filters: React.FC<FiltersProp> = ({ table }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [populationFilter, setPopulationFilter] = useState<string>("0");
  const onClickShowAllCountries = () => {
    dispatch(countries.getCountriesDataThunk());
  };

  const onDropDownSelect = (value: string) => {
    setPopulationFilter(value);
    table.setColumnFilters((old) => [
      ...old.filter((item) => item.id !== "population"),
      { id: "population", value: [0, parseInt(value)] },
    ]);
  };

  const onClickClear = () => {
    setNameFilter("");
    setPopulationFilter("0");
    table.resetColumnFilters();
  };
  return (
    <div className="mt-4 flex flex-row">
      <input
        placeholder="Country Name"
        className={"border-2 px-2 py-1 rounded-md"}
        value={nameFilter}
        onChange={(e) => {
          setNameFilter(e.target.value);
          table.setColumnFilters((old) => [
            ...old.filter((item) => item.id !== "name"),
            { id: "name", value: e.target.value },
          ]);
        }}
      />

      <Dropdown
        value={populationFilter}
        onChange={onDropDownSelect}
        placeholder="Population"
        data={PopulationDropdownData}
      />

      <button
        className={"underline text-violet-600 underline-offset-4 font-medium"}
        onClick={onClickClear}
        type="button"
      >
        Clear
      </button>
      <div className="flex-1 flex flex-row-reverse">
        <button
          className=" bg-violet-600 text-white text-lg px-4	py-2 ml-10 rounded-md font-medium hover:bg-violet-500 border-none"
          onClick={onClickShowAllCountries}
          type="button"
        >
          Show all Countries
        </button>
      </div>
    </div>
  );
};
