import { useSelector } from "react-redux";
import { findBookByCategory } from "./booksSlice";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const HomeBookCard = ({ category }) => {
  const books = useSelector(findBookByCategory(category))
  console.log(books)
  const [ book ] = books;
    console.log()
  return (
   <>
    {books.map((book, idx) => {
        return (
                    <Card
                color="info" 
                outline
                style={{
                    width: '12rem',
                    marginBottom: 20,
                    
                }}
                className="pb-2"
            >
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={{maxHeight: 195}} />
                <CardBody style={{ textAlign: 'center' }}>
                    <CardTitle tag='h5' className="clipLongTitle">
                        <strong>{book.volumeInfo.title}</strong>
                    </CardTitle>
                    <CardSubtitle tag='h6' className="clipAuthor mb-3">
                        {book.volumeInfo.authors.join(', ')}
                    </CardSubtitle>
                    <Link to={`/category/${category}/books/${book.volumeInfo.title}`}>
                        <Button color="info" style={{ color: '#fff', fontWeight: 'bold' }}>More Info</Button>
                    </Link>
                </CardBody>
                
            </Card>
        )
    })}
   </>
    
)
}

export default HomeBookCard;