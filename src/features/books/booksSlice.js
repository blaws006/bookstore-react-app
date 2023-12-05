import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'books/fetchBook',
    async (book) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=relevance&maxResults=5`);
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
    reducers: {
        clearBooksArr: (state) => {
            state.booksArray = []
            console.log(state.booksArray);
        }
        
    },
    extraReducers: (builder) => 
       builder.addCase(fetchBooks.pending, (state) => {
            state.isLoading = true;
       })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            action.payload.items.forEach((book) => {
               if (!state.booksArray.includes(book.id)) {
                console.log(book)
                state.booksArray.push(book);
               }
            })
            
            // console.log(state.booksArray)
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        })
        
    
})

export const booksReducer = booksSlice.reducer;

export const { clearBooksArr } = booksSlice.actions;

export const findBookByCategory = (genre) => (state) => {
    if (genre.includes(' ')) {
        genre = genre.split(' ').join('+')
        // console.log(genre)
    }

    return state.books.booksArray.filter((book, index, { id }) => book.volumeInfo.previewLink.includes(genre) 
    && index === state.books.booksArray.findIndex((o) => o.id === book.id))
}

