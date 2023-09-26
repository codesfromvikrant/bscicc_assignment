import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  showDroplist: false,
  searchBy: "name",
  searchTerm: ""
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    setShowDroplist: (state, action) => {
      state.showDroplist = action.payload;
    },
    setSearchBy: (state, action) => {
      state.searchBy = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setShowForm, setShowDroplist, setSearchBy, setSearchTerm } = viewSlice.actions;

export default viewSlice.reducer;