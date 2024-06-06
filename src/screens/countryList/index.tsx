import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import countries from "../../store/ducks/countries";
import { useAppSelector } from "../../store/store";
import { CountryData, CountryDataList } from "../../types";
import { Filters } from "./components/Filters";
import { CountryTable } from "./components/Table";
import "./index.css";

const columnHelper = createColumnHelper<CountryData>();

type Props = {};

export const CountryList: React.FC<Props> = () => {
  const countriesData: CountryDataList = useAppSelector(
    countries.selectCountriesData
  );
  const isLoading: boolean = useAppSelector(countries.selectIsLoading);

  const columns = useMemo<ColumnDef<CountryData, any>[]>(
    () => [
      columnHelper.accessor("name", {
        header: () => <span>Country Name</span>,
      }),
      columnHelper.accessor("id", {
        id: "id",
        header: () => <span>Code</span>,
      }),
      columnHelper.accessor("capital", {
        header: () => <span>Capital</span>,
      }),
      columnHelper.accessor("phone", {
        header: () => <span>Ph Code</span>,
      }),
      columnHelper.accessor("population", {
        header: () => <span>Population</span>,
        meta: {
          filterVariant: "range",
        },
      }),
      columnHelper.accessor("media.flag", {
        header: () => <span>Flag</span>,
        cell: (info) => (
          <img src={info.getValue()} alt="Flag" width="30" height="20"></img>
        ),
      }),
      columnHelper.accessor("media.emblem", {
        header: () => <span>Emblem</span>,
        cell: (info) => (
          <img src={info.getValue()} alt="Emblem" width="20" height="20"></img>
        ),
      }),
    ],
    []
  );
  const table = useReactTable({
    data: countriesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {},
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <h2 className="text-2xl font-bold">Countries Info</h2>
      <Filters table={table} />
      {isLoading ? (
        <div className={"loader"}></div>
      ) : (
        <CountryTable table={table} />
      )}
    </div>
  );
};
