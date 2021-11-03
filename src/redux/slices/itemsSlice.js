import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

import { STATUS } from "../globals";

// ========================================================
// Setup
// ========================================================

// const itemsDB = new Map([
//   [EP, process.env.REACT_APP_DB_PATH],
//   [TOKEN, process.env.REACT_APP_DB_TOKEN],
// ]);

const initialState = {
  status: STATUS.init,
  error: null,
  isModal: false,
  items: [],
};

// ========================================================
// Async
// ========================================================

export const fetchItems = createAsyncThunk(
  "items/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/db.json');

      const data = await response.data;

      return data;
    } catch (err) {
      let error = err;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

// ========================================================
// Slice
// ========================================================

export const itemsSlice = createSlice({
  name: "items",
  initialState,

  reducers: {
    modalToggle(state, action) {
      state.isModal = action.payload;

      const body = document.querySelector('body');

      if (action.payload) {
        body?.classList.add('no-scroll');
      } else {
        body?.classList.remove('no-scroll');
      }
    },
  },

  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = STATUS.loading;
    },

    [fetchItems.rejected]: (state, action) => {
      state.status = STATUS.error;

      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    },

    [fetchItems.fulfilled]: (state, action) => {
      state.status = STATUS.idle;
      state.items = action.payload;
    },
  },
});

export const { modalToggle } = itemsSlice.actions;

export const statusSelector = (state) => state.items.status;
export const errorSelector = (state) => state.items.error;
export const itemsSelector = (state) => state.items.items;

export default itemsSlice.reducer;
