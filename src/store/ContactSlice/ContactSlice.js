import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk } from './thunk';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

// const ContactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       prepare: data => {
//         const newContact = {
//           ...data,
//           id: nanoid(),
//         };
//         return { payload: newContact };
//       },
//       reducer: (state, { payload }) => {
//         state.contacts.push(payload);
//       },
//     },
//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(el => el.id !== payload);
//     },
//   },
// });
export const ContactReducer = ContactSlice.reducer;
