import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { cartReducer } from '../features/cartSlice';
import { productReducer } from '../features/productSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Only persist cart
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
