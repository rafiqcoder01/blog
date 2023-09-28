import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../../utils/utils";


export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
    endpoints: (builder) => ({
        getCompaniesHome: builder.query({
            query: () => `/company/companies/?page_type=home`,
        }),
        getCarouselHome: builder.query({
            query: () => `/blogs/blog-view/?page=2`,
        }),
        getArticlesHome: builder.query({
            query: (category) => `/blogs/blog-view/?category=${category}`,
        }),

    }),
});


export const {
    useGetCompaniesHomeQuery,
    useGetCarouselHomeQuery,
    useGetArticlesHomeQuery
} = homeApi;