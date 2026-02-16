import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const materialsApi = createApi({
  reducerPath: 'rtkQueryMaterialsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://68dfdefa93207c4b4793043b.mockapi.io',
  }),
  // Для обновления отображения контента
  tagTypes: ['Material'],
  endpoints: build => ({
    fetchMaterials: build.query({
      query: () => '/materials',
      // Для обновления отображения контента
      providesTags: ['Material'],
    }),

    // Для извлечения данных и предотвращения вложенности.
    // transformResponse: (response, meta, arg) => response.data,

    // Для выявления ошибки и предотвращения вложенности.
    // transformErrorResponse: (response, meta, arg) => response.status,

    fetchMaterialById: build.query({
      query: id => `/materials/${id}`,
      // Для обновления отображения контента
      providesTags: ['Material'],
    }),

    createMaterial: build.mutation({
      query: newMaterial => ({
        url: '/materials',
        method: 'POST',
        body: newMaterial,
      }),
      // Для обновления отображения контента
      invalidatesTags: ['Material'],
    }),

    updateMaterial: build.mutation({
      query: ({ materialId, ...patch }) => ({
        url: `/materials/${materialId}`,
        method: 'PUT',
        body: patch,
      }),
      // Для обновления отображения контента
      invalidatesTags: ['Material'],
    }),

    deleteMaterial: build.mutation({
      query: materialId => ({
        url: `/materials/${materialId}`,
        method: 'DELETE',
      }),
      // Для обновления отображения контента
      invalidatesTags: ['Material'],
    }),
  }),
});

export const {
  useFetchMaterialsQuery,
  useFetchMaterialByIdQuery,
  useCreateMaterialMutation,
  useUpdateMaterialMutation,
  useDeleteMaterialMutation,
} = materialsApi;
