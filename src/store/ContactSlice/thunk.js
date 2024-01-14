import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsAPI } from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContactsAPI();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
