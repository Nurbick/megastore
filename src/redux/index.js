import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import {groupSlice} from "./reducers/groups";
import {productsSlice} from "./reducers/products";
import {partnersSlice} from "./reducers/partners";
import {usersSlice} from "./reducers/users";
import {applicationSlice} from "./reducers/application";
import storage from 'redux-persist/lib/storage';
import user from './reducers/user'




const rootReducer = combineReducers({
    user
});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: {
        persistedReducer,
        [productsSlice.reducerPath] : productsSlice.reducer,
        [groupSlice.reducerPath] : groupSlice.reducer,
        [partnersSlice.reducerPath] : partnersSlice.reducer,
        [applicationSlice.reducerPath] : applicationSlice.reducer,
        [usersSlice.reducerPath] : usersSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(groupSlice.middleware, productsSlice.middleware, partnersSlice.middleware, usersSlice.middleware, applicationSlice.middleware)

});

export const persistor = persistStore(store);
export default store