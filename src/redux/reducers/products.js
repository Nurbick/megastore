import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const selectOrder = (order) =>{
    switch (order) {
        case 'asc' : {
            return '_sort=price&_order=asc'
        }
        case 'desc' : {
            return '_sort=price&_order=desc'
        }
        case 'abc' : {
            return '_sort=name&_order=asc'
        }
    }
};

export const productsSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8080/`}),
    endpoints: (build) => ({
        filterProducts: build.query({
            query: (filter) => `products?${filter.category !=='all' ? `category=${filter.category}&`:``}`,
            providesTags:['products']
        }),
        getProducts: build.query({
            query: () => `products`,
            providesTags:['products']
        }),
        addProducts: build.mutation({
            query: (product)=>({
                url:'products',
                method: 'POST',
                body: product
            }),
            providesTags:['products']
        }),
        getProduct: build.query({
            query: (id) => `products/${id}`,
                providesTags:['products']
        }),
        sortProducts: build.query({
            query: (order) => `products?${ order!=="default" ? selectOrder(order) : '' }`,
            providesTags:['products']
        })
    })
});

export const {useFilterProductsQuery,useGetProductsQuery, useGetProductQuery, useSortProductsQuery, useAddProductsMutation} = productsSlice;