import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks, findBookByCategory, sortUniqueValues } from "../features/books/booksSlice";
import { clearBooksArr } from "../features/books/booksSlice";
import { categories } from "../app/shared/categories";



const Home = () => {

    const books = useSelector(sortUniqueValues);
 
    return (
        <>
            {books.map((book, idx) => {
                    return (
                        <div id={idx} key={idx} className="text-center">
                            {book.volumeInfo.title}
                        </div>
                    )
            })}
        </>
    )

}

export default Home;