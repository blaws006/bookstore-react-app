import { useSelector } from "react-redux";

import { sortUniqueValues } from "../features/books/booksSlice";

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