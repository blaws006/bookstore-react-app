import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchBooks, clearBooksArr} from './features/books/booksSlice';
import { categories } from './app/shared/categories';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BookPage from './pages/BookPage';


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


  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<CategoryPage />} />
          <Route path='/books/:title' element={<BookPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
