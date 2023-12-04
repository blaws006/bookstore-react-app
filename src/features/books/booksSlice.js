import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'books/fetchBook',
    async (book) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=relevance`);
        if (!response.ok) {

            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

const initialState = {
    booksArray: [],
    isLoading: true,
    errMess: '',
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.booksArray = action.payload;
            console.log(state.booksArray.items[0])
        },
        [fetchBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
})

export const booksReducer = booksSlice.reducer;