import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import pcBuilderReducer from './slices/pcBuilderSlice';
import thunk from 'redux-thunk'; 
const persistConfig = {
  key: 'root',
  storage,
  // Add any other configuration options if needed
};

const persistedReducer = persistReducer(persistConfig, pcBuilderReducer);

const store = configureStore({
  reducer: {
    pcBuilder: persistedReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
