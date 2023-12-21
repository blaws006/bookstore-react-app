import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { findBookByCategory} from "../features/books/booksSlice";

import { Row, Col, Container } from 'reactstrap';
import  BookCategory  from '../features/books/BookCategory'


const CategoryPage = () => {
    const { category } = useParams();
    const books = useSelector(findBookByCategory(category));
    console.log(books)
    return (
        <Container>
            <Row xs='6' style={{ justifyContent: 'center', alignItems: 'center' }}>
                {books.map((book, idx) => {
                    return (      
                        <Col key={idx} id={idx}>
                            <BookCategory books={book} />
                        </Col>
                    )
                })}
            </Row>
        </Container> 
    )

}

export default CategoryPage;