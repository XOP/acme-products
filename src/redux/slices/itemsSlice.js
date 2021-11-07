import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

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
  filters: {
    attrFancy: false,
    attrRare: false,
    category: null,
  },
};

// ========================================================
// Async
// ========================================================

export const fetchItems = createAsyncThunk(
  "items/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get("/db.json");

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

      const body = document.querySelector("body");

      if (action.payload) {
        body?.classList.add("no-scroll");
      } else {
        body?.classList.remove("no-scroll");
      }
    },

    rareToggle(state, action) {
      state.filters.attrRare = action.payload;
    },

    fancyToggle(state, action) {
      state.filters.attrFancy = action.payload;
    },

    categoryChange(state, action) {
      state.filters.category = action.payload || null;
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

export const itemSelector = createSelector(
  [itemsSelector, (state, _id) => _id],
  (items, _id) => items.find(({ id }) => id === _id)
);

export const itemsAmountSelector = createSelector(
  itemsSelector,
  (items) => items.length
);

export const filteredItemsSelector = createSelector(
  [(state) => state.items.filters, itemsSelector],
  (filters, items) => {
    let _items = items;

    if (filters.attrFancy) {
      _items = _items.filter(({ attrFancy }) => Boolean(attrFancy));
    }

    if (filters.attrRare) {
      _items = _items.filter(({ attrRare }) => Boolean(attrRare));
    }

    if (filters.category !== null) {
      _items = _items.filter(({ category }) => category === filters.category);
    }

    return _items;
  }
);

export default itemsSlice.reducer;
