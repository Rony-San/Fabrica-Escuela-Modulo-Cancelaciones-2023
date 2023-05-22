import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterReducer from './features/counter/counterSlice'
import authReducer  from './features/auth/authSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter', 'auth'],
    blacklist: [],
}

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)