import { createAsyncThunk } from "@reduxjs/toolkit";
import { CountryService } from "../../../services";

const getCountriesDataThunk = createAsyncThunk("countries/get", async () => {
  const response = await CountryService.getCountries();
  return response?.data;
});

const thunks = {
  getCountriesDataThunk,
};

export default thunks;
