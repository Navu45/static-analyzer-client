import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
};
export const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        check: (state) => {
            state.value = !state.value;
        },
    }
})

export const { check } = checkboxSlice.actions;
export const checkboxSelector = (state) => state.checkbox.value;
export default checkboxSlice.reducer;
