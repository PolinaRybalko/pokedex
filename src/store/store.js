import { configureStore, createSlice } from "@reduxjs/toolkit";
const typeSlice = createSlice({
  name: "type",
  initialState: { type: ""},
  reducers: {
    changeType(state,action) {
        state.type = action.payload
    }
  },
});

const store = configureStore({
  reducer: typeSlice.reducer,
});

export const typeActions = typeSlice.actions;
export default store;