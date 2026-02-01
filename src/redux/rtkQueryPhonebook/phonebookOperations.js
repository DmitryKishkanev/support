import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'rtkQueryPhonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://68dfdefa93207c4b4793043b.mockapi.io',
  }),
  endpoints: build => ({
    getContactsByName: build.query({
      query: name => `/contacts`,
    }),
  }),
});

export const { useGetContactsByNameQuery } = phonebookApi;
