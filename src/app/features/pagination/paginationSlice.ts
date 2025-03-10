import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PaginationStateI {
    currentPage: number;
    itemsPerPage: number;
}

const initialState: PaginationStateI = {
    currentPage: 1,
    itemsPerPage: 9,
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCuurentPage: (state: PaginationStateI, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    },
});

export const { setCuurentPage } = paginationSlice.actions;
export default paginationSlice.reducer;