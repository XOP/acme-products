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
  categories: [],
  filters: {
    attrFancy: false,
    attrRare: false,
    category: "placeholder",
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
      state.filters.attrRare = !!action.payload;
    },

    fancyToggle(state, action) {
      state.filters.attrFancy = !!action.payload;
    },

    categoryChange(state, action) {
      state.filters.category = action.payload.toLowerCase() || "placeholder";
    },

    itemSaveToggle(state, action) {
      const { id, isSaved } = action.payload;

      const item = state.items.find((item) => item.id === id);

      item.isSaved = isSaved;
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

      const cats = new Set();

      action.payload.reduce((acc, cur) => {
        const name = cur.category;

        acc.add(`${name.toUpperCase()[0]}${name.slice(1)}`);
        return acc;
      }, cats);

      state.categories = Array.from(cats);
      state.categories.unshift("placeholder");
    },
  },
});

export const {
  modalToggle,
  rareToggle,
  fancyToggle,
  categoryChange,
  itemSaveToggle,
} = itemsSlice.actions;

export const statusSelector = (state) => state.items.status;
export const errorSelector = (state) => state.items.error;

export const itemsSelector = (state) => state.items.items;
export const itemCategoriesSelector = (state) => state.items.categories;

export const itemSelector = createSelector(
  [itemsSelector, (state, _id) => _id],
  (items, _id) => items.find(({ id }) => id === _id)
);

export const rareAttrSelector = (state) => state.items.filters.attrRare;
export const fancyAttrSelector = (state) => state.items.filters.attrFancy;
export const categorySelector = (state) => state.items.filters.category;

export const itemsAmountSelector = createSelector(
  [(state) => state.items.items],
  (items) => items.length
);

export const filteredItemsSelector = createSelector(
  [(state) => state.items.filters, (state) => state.items.items],
  (filters, items) => {
    let _items = items;

    if (filters.attrFancy) {
      _items = _items.filter(({ attrFancy }) => attrFancy === true);
    }

    if (filters.attrRare) {
      _items = _items.filter(({ attrRare }) => attrRare === true);
    }

    if (filters.category !== "placeholder") {
      _items = _items.filter(({ category }) => category === filters.category);
    }

    return _items;
  }
);

export const filteredItemsAmountSelector = createSelector(
  [filteredItemsSelector],
  (items) => items.length
);

export default itemsSlice.reducer;
