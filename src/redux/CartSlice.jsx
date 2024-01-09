import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "mycart",
  initialState: {
    value: [],
  },
  reducers: {
    addProdcut: (state, action) => {
      var produtdata = action.payload;
      state.value = [...state.value, { produtdata, qty: 1 }];
    },
    incremetQty: (state, action) => {
      const id = action.payload;
      state.value = state.value.map((obj) =>
        obj.produtdata.id == id ? { ...obj, qty: obj.qty + 1 } : obj
      );
    },
    decremetQty: (state, action) => {
      const id = action.payload;
      state.value = state.value.map((obj) =>
        obj.produtdata.id == id ? { ...obj, qty: obj.qty - 1 } : obj
      );
    },

    removeitem: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((obj) => obj.produtdata.id != id);
    },
  },
});
export const { addProdcut, incremetQty, decremetQty, removeitem } =
  slice.actions;
export default slice.reducer;
