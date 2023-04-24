import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const groupSlice = createApi({
    reducerPath: 'groups',
    baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8080/`}),
    endpoints: (build) => ({
        getGroups: build.query({
            query: () => `groups`
        })
    })
});

export const {useGetGroupsQuery} = groupSlice;