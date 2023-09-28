import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../../utils/utils";


export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `/blogs/blog-view/?page=2`,
        }),
        getBlogDetails: builder.query({
            query: (id) => `/blogs/blog-detail/${id}`,
        }),
        getBlogSearch: builder.query({
            query: (string) => `/blogs/blog-search?search=${string}`,
        }),
        getCategoryBlogs: builder.query({
            query: (string) => `/blogs/blog-view/?category=${string}`,
        }),

    }),
});


export const {
    useGetBlogsQuery,
    useGetBlogDetailsQuery,
    useGetBlogSearchQuery,
    useGetCategoryBlogsQuery,
} = blogApi;