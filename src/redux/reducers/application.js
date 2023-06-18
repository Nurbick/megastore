import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const applicationSlice = createApi({
    reducerPath: 'applications',
    tagTypes:['applications'],
    baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8080/`}),
    endpoints: (build) => ({
        addApplication:build.mutation({
            query: (application)=>({
                url:'applications',
                method: 'POST',
                body: application
            }),
            invalidatesTags: ['applications']
        }),
        getApplications: build.query({
            query: () => `applications`,
            providesTags:['applications']
        }),
    })
});



export const {useAddApplicationMutation, useGetApplicationsQuery} = applicationSlice;