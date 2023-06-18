import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const partnersSlice = createApi({
    reducerPath: 'partners',
    baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8080/`}),
    endpoints: (build) => ({
        getPartners: build.query({
            query: () => `partners`
        })
    })
});

export const {useGetPartnersQuery} = partnersSlice;