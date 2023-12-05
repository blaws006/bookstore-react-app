import { useParams } from "react-router-dom";
import { getSingleBook } from "../features/books/booksSlice";
import { useSelector } from "react-redux";

const BookPage = () => {
    const { title } = useParams();
    const book = useSelector(getSingleBook(title))
    console.log(title)
    return (
        <>
          <h1>{book.volumeInfo.title}</h1>
        </>
    )
}

export default BookPage;