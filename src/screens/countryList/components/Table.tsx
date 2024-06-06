import { Table, flexRender } from "@tanstack/react-table";
import React from "react";
import countries from "../../../store/ducks/countries";
import { useAppSelector } from "../../../store/store";
import { CountryData, CountryDataList } from "../../../types";

type TableProps = {
  table: Table<CountryData>;
};

export const CountryTable: React.FC<TableProps> = ({ table }) => {
  const countriesData: CountryDataList = useAppSelector(
    countries.selectCountriesData
  );
  return (
    <div>
      {countriesData.length !== 0 ? (
        <table className="mt-4 border-1 w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
