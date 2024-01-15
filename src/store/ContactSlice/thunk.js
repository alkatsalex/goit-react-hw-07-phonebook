import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsAPI, postNewContact, deleteContact } from 'api/contactsApi';

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

export const addContactThunk = createAsyncThunk(
  'contacts/postNewContacts',
  async (object, { rejectWithValue }) => {
    try {
      return await postNewContact(object);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
