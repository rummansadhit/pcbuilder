import { configureStore } from '@reduxjs/toolkit';
import pcBuilderReducer from './slices/pcBuilderSlice';

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;