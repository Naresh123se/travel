import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

// creating our api slice
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Page", "User"],
  endpoints: (builder) => ({}),
});
