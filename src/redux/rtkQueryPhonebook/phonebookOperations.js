import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'rtkQueryPhonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://68dfdefa93207c4b4793043b.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    deleteContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    createContact: build.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = phonebookApi;
