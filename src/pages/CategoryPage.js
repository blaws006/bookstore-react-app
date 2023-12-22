import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { findBookByCategory} from "../features/books/booksSlice";
import { Row, Col, Container } from 'reactstrap';
import  BookCategory  from '../features/books/BookCategory'
import SubHeader from "../components/SubHeader";


const CategoryPage = () => {
    const { category } = useParams();
    const books = useSelector(findBookByCategory(category));
    console.log(books)
    return (
        
        <Container className="growHeight">
            <Row>
                {category && <SubHeader current={category.toUpperCase()} detail={true} category={category} /> }
            </Row>
            
            <Row xs='2' sm='3' md='12' lg='6' style={{ justifyContent: 'center', alignItems: 'center' }}>
                
                {books.map((book, idx) => {
                    return (      
                        <Col key={idx} id={idx}>
                            <BookCategory books={book} category={category} />
                        </Col>
                    )
                })}
            </Row>
        </Container> 
    )

}

export default CategoryPage;