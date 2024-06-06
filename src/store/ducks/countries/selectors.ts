import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";

export const selectCountriesData: any = createSelector(
  (state: RootState) => state?.countries,
  (data) => data.countriesData
);
export const selectIsLoading: any = createSelector(
  (state: RootState) => state?.countries,
  (data) => data.isLoading
);

export default {
  selectCountriesData,
  selectIsLoading,
};
