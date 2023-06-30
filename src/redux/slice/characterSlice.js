import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchCharacter = createAsyncThunk('character/searchCharacters', async (query) => {
    const response = await axios.get(`http://localhost:8080/api/search?q=${query}`);
    return response.data;
});

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characters: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchCharacter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchCharacter.fulfilled, (state, action) => {
                state.loading = false;
                state.characters = action.payload;
            })
            .addCase(searchCharacter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default characterSlice.reducer;
