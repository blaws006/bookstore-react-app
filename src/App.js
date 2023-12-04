import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './features/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchBooks('sci-fi'));
  }, [dispatch]);
  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  )
}

export default App;
