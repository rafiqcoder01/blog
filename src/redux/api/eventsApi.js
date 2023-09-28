import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Base_url } from "../../utils/utils";


export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => `/events/event-view?page=1`,
        }),
        getEventDetail: builder.query({
            query: (id) => `/events/event-detail/${id}`,
        }),
        getSearchEvents: builder.query({
            query: (searchData,page) => `/events/event-search?page=${page}&search=${searchData}`,
        }),
        getCategoryEvents: builder.query({
            query: ({currentPage,category}) => `/events/event-view?page=${currentPage}&location=${category}`,
        }),
        
    }),
});


export const {
    useGetEventsQuery,
    useGetEventDetailQuery,
    useGetCategoryEventsQuery,
    useGetSearchEventsQuery,
} = eventsApi;