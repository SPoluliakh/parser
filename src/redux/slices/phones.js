import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filter: "",
};

const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {
    getPhones: (state, { payload }) => {
      state.list = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setPosition: (state, { payload }) => {
      state.list = state.list.map((phone) =>
        phone._id === payload._id
          ? { ...phone, position: payload.value }
          : phone
      );
    },
  },
});
const phonesReducer = phonesSlice.reducer;

export const { getPhones, setFilter, setPosition } = phonesSlice.actions;
export default phonesReducer;
