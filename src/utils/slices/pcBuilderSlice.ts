import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export const fetchPCComponents = createAsyncThunk('pcBuilder/fetchPCComponents', async () => {
  // Implement the logic to fetch data from the database here
  // For example, you can use axios to make an HTTP request to your backend API
  // and retrieve the PC components data
  const response = await fetch('http://localhost:3000/api/builder'); // Replace with your API endpoint
  const data = await response.json();
  console.log(data);
  return data;
});






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


  extraReducers: (builder) => {
    builder.addCase(fetchPCComponents.fulfilled, (state, action) => {
      state.components = action.payload;
      console.log(action.payload);
      // Extract unique categories from the fetched data
      state.uniqueCategories = action.payload.reduce((categories: string[], product:PCComponent) => {
        if (!categories.includes(product.category)) {
          return [...categories, product.category];
        }
        return categories;
      }, []);
    });
  },

});

export const { addToPCBuilder, removeFromPCBuilder, clearPCBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;

export const selectPCBuilderComponents = (state: RootState) => state.pcBuilder.components;

export const selectUniqueCategories = (state: RootState) => state.pcBuilder.uniqueCategories;