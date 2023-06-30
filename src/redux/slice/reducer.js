import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Define tu estado inicial aquí
};

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        // Define tus reducers aquí
        actionType: (state, action) => {
            // Actualiza y devuelve el nuevo estado
            state.someProperty = action.payload;
        },
    },
});

export const { actionType } = mySlice.actions;
export default mySlice.reducer;
