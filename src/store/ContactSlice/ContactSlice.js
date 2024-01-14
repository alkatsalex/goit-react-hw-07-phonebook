import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: data => {
        const newContact = {
          ...data,
          id: nanoid(),
        };
        return { payload: newContact };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const ContactReducer = ContactSlice.reducer;
export const { addContact, deleteContact } = ContactSlice.actions;
