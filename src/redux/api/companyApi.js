import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../../utils/utils";


export const companyApi = createApi({
    reducerPath: "companyApi",
    baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
    endpoints: (builder) => ({
        getCompanyCategory: builder.query({
            query: () => `/company/company-categories`,
        }),
        getFilterCompany: builder.query({
            query: (category) => `/company/companies/?category=${category}`,
        }),
        getCompanies: builder.query({
            query: (pageNo) => `/company/companies/?page=${pageNo}`,
        }),
        getCompaniesSearch: builder.query({
            query: (search) => `/company/companies/?search=${search}`,
        }),
        getCompaniesTrending: builder.query({
            query: () => `/blogs/blog-view/?page=1`,
        }),
        getCompaniesMore: builder.query({
            query: () => `/blogs/blog-view/?page=2`,
        }),     
    }),
});


export const {
    useGetCompaniesQuery,
    useGetCompanyCategoryQuery,
    useGetCompaniesSearchQuery,
    useGetFilterCompanyQuery,
    useGetCompaniesTrendingQuery,
    useGetCompaniesMoreQuery
} = companyApi;