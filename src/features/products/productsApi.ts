import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartItem } from '../cart/cart.slice';

const baseUrl = 'http://localhost:8000/api/';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query<CartItem[], void>({
            query: () => `products`, 
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;