import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PCComponent } from '../types/PCComponent';


interface PCBuilderState {
  components: PCComponent[];
  uniqueCategories: string[];
}

const initialState: PCBuilderState = {
  components: [],
  uniqueCategories: [],
};

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addToPCBuilder(state, action: PayloadAction<PCComponent>) {
      state.components.push(action.payload);
    },
    removeFromPCBuilder(state, action: PayloadAction<string>) {
      state.components = state.components.filter((item) => item._id !== action.payload);
    },
    clearPCBuilder(state) {
      state.components = [];
    },
  },
});

export const { addToPCBuilder, removeFromPCBuilder, clearPCBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;

export const selectPCBuilderComponents = (state: RootState) => state.pcBuilder.components;

