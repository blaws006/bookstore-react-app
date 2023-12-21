import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchBooks, clearBooksArr} from './features/books/booksSlice';
import { categories } from './app/shared/categories';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BookPage from './pages/BookPage';
import { Container } from 'reactstrap';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() =>{
      dispatch(clearBooksArr());
      let i = 0;
      while (i < categories.length) {
        dispatch(fetchBooks(categories[i]));
          i++;
      }
      
  }, [dispatch]);
  const books = useSelector((state) => state.books.booksArray)
  console.log(books);
  
  return (
    <div className='App'>
      <Header />
        <Container className='wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:category' element={<CategoryPage />} />
            <Route path='/books/:title' element={<BookPage />} />
          </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App;
