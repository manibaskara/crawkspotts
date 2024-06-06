import { createSlice } from "@reduxjs/toolkit";

import { CountryDataList } from "../../../types";
import thunks from "./thunks";

export type CountriesSlice = {
  countriesData: CountryDataList;
  isLoading: boolean;
};

const initialState: CountriesSlice = {
  countriesData: [],
  isLoading: false,
};

const financeSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.getCountriesDataThunk.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(
      thunks.getCountriesDataThunk.fulfilled,
      (state, action) => ({
        ...state,
        countriesData: action.payload,
        isLoading: false,
      })
    );
    builder.addCase(thunks.getCountriesDataThunk.rejected, (state) => ({
      ...state,
      countriesData: [],
      isLoading: false,
    }));
  },
});

export default financeSlice;
