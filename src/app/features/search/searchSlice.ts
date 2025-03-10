import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchStateI {
    appliedQuery: string
}

const initialState: SearchStateI = {
    appliedQuery: ""
};

export const searchSLice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setAppliedQuery: (state: SearchStateI, action: PayloadAction<string>) => {
            state.appliedQuery = action.payload;
        }
    },
});

export const { setAppliedQuery } = searchSLice.actions;
export default searchSLice.reducer;