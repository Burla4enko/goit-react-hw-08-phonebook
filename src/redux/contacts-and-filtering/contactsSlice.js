import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from './operations';

const extraActions = [fetchContacts, addContact, deleteContact, updateContact];
const getActionByType = type => extraActions.map(action => action[type]);

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const fetchFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload);
  state.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchFulfilledReducer)
      .addCase(addContact.fulfilled, addFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteFulfilledReducer)
      .addMatcher(isAnyOf(...getActionByType('fulfilled')), anyFulfilledReducer)
      .addMatcher(isAnyOf(...getActionByType('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActionByType('rejected')), anyRejectedReducer);
  },
});

export const contactsReducer = contactsSlice.reducer;
