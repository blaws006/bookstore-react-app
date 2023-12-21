import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { findBookByCategory} from "../features/books/booksSlice";
import { Link } from "react-router-dom";


const CategoryPage = () => {
    const { category } = useParams();
    const books = useSelector(findBookByCategory(category));
    console.log(books)
    return (
        <>
            {books.map((book, idx) => {
                return (
                    <div key={idx} id={idx}>
                        <Link to={`/books/${book.volumeInfo.title}`}>{book.volumeInfo.title}</Link>
                    </div>
                )
            })}
        </>
    )

}

export default CategoryPage;