import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const usersSlice = createApi({
    reducerPath: 'users',
    tagTypes:['users'],
    baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8080/`}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => `users`,
            providesTags:['users']
        }),
        addUser: build.mutation({
            query: (person)=>({
                url:'users',
                method: 'POST',
                body: person
            }),
            invalidatesTags: ['users']
        })
    })
});

export const {useGetUsersQuery, useAddUserMutation} = usersSlice;
