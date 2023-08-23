import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    persistReducer,
    PERSIST,
    PURGE,
    PAUSE,
    REHYDRATE,
    REGISTER,
} from "redux-persist";
import rootReducer from "./GlobalState"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, PURGE, REGISTER, PERSIST, PAUSE, REHYDRATE],
        },
    }),
});