import { configureStore } from "@reduxjs/toolkit";
import authDetailSlice from "./authDetailSlice";
import createSagaMiddleware from "@redux-saga/core";
import dataSlice from "./dataSlice";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {

        auth: authDetailSlice.reducer,
        data: dataSlice.reducer

    },
    middleware: [saga]
})

export default store