import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PCComponent {
    _id: number;
    image: string;
    productName: string;
    category: string;
    price: number;
    inStock: boolean;
    rating: number;
  }


export const pcBuilderApi = createApi({
    reducerPath: 'pcBuilderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Replace '/api' with your API endpoint
  endpoints: (builder) => ({
    getComponents: builder.query({
      query: () => '/api/builder',
    }),
  }),
});

export const { useGetComponentsQuery } = pcBuilderApi;