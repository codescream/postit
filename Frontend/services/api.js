import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const packageApi = createApi({
  reducerPath: "packageApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:8000/",
    prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem('userData'));
      if (user) {
        headers.set('authorization', 'Bearer ' + user.accessToken);
      }

      return headers;
    }

  }),
  endpoints: (builder) => ({
    authenticate: builder.mutation({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
    }),
    fetchParcels: builder.query({
      query: (user_id) => ({
        url: `/parcel/user/${user_id}`,
      }),
    }),
  }),
});

export const { useAuthenticateMutation, useFetchParcelsQuery } = packageApi;
