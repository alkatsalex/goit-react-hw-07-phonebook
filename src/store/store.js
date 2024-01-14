import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ContactReducer } from './ContactSlice/ContactSlice';
import { FilterReducer } from './filterSlice/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const reducer = combineReducers({
  contacts: ContactReducer,
  filter: FilterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, ContactReducer);
// const reducer = combineReducers({
//   contacts: persistedReducer,
//   filter: FilterReducer,
// });

// export const store = configureStore({ reducer });

// export const persistor = persistStore(store);
