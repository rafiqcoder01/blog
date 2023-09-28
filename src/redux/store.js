//setup redux store using react-toolkit

import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./api/bogApi";
import { companyApi } from "./api/companyApi";
import { eventsApi } from "./api/eventsApi";
import { homeApi } from "./api/homeApi";


export default configureStore({
    reducer: {
        [companyApi.reducerPath]: companyApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [homeApi.reducerPath] : homeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(companyApi.middleware,blogApi.middleware,eventsApi.middleware,homeApi.middleware)

});

