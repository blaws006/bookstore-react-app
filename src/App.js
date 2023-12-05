import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, findBookByCategory, clearBooksArr } from './features/books/booksSlice';
import { categories } from './app/shared/categories';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearBooksArr())
  }, [dispatch])

  useEffect(() =>{
      let i = 0;
      
      while(i < categories.length) {
        dispatch(fetchBooks(categories[i]));
        i++;
      }
       
  }, [dispatch]);

  const books = useSelector(findBookByCategory('nonfiction'));

  console.log(books)

  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  )
}

export default App;
