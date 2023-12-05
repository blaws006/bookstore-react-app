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
        }

    },
    extraReducers: (builder) => 
       builder.addCase(fetchBooks.pending, (state) => {
            state.isLoading = true;
       })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            
            action.payload.items.forEach((book, idx) => {
                
                if (state.booksArray.indexOf(book.id) === -1) {
                    
                    state.booksArray.push(book);  
                }
            })
            
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        })
        
    
})

export const booksReducer = booksSlice.reducer;

export const { clearBooksArr } = booksSlice.actions;

export const getAllBooks = (state) => {
    return state.books.booksArray;
}

export const findBookByCategory = (genre) => (state) => {
    if (genre.includes(' ')) {
        genre = genre.split(' ').join('+')
        // console.log(genre)
    }

    return state.books.booksArray.filter((book, index, { id }) => book.volumeInfo.previewLink.includes(genre) 
    && index === state.books.booksArray.findIndex((o) => o.id === book.id));
}

export const sortUniqueValues = (state) => {
    return state.books.booksArray.filter((obj, index) => {
        return index === state.books.booksArray.findIndex((o) => obj.id === o.id)
    })
}

export const getSingleBook = (title) => (state) => {
    return state.books.booksArray.find((book) => book.volumeInfo.title === title)
} 

