import { Api, CreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartItem } from '../cart/cart.slice';

const baseUrl = 'http://localhost:8000/api/';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query<CartItem[], void>({
            query: () => `products`,
            transformResponse(baseQueryReturnValue: any[]) {
                return baseQueryReturnValue.map((item: any) => {
                    item.price = item.price > 0 ? ((item.price / 100).toFixed(2)).toString() : '0';
                    item.quantity = 1;
                    return item;
                })
            }
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;