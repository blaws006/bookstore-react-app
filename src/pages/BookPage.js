import { useParams } from "react-router-dom";
import { getSingleBook } from "../features/books/booksSlice";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";

const BookPage = () => {
    const { title } = useParams();
    const book = useSelector(getSingleBook(title))
    
    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center', height: 100+'%', marginTop: 50 }}>
          <Row sm='1' md='2'>
            <Col style={{flexDirection: 'column', display: 'flex'}} lg='4'>
             <Row>
              <Col>
                <img 
                  src={book.volumeInfo.imageLinks.thumbnail} 
                  alt={book.volumeInfo.title} 
                  title={book.volumeInfo.title} 
                  style={{maxWidth: 128}}
                />

              </Col>
             </Row>
             <Row style={{marginTop: 20}}>
              <Col>
                <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer" >
                  <Button color='info' className='book-text' style={{ color: '#fff', fontWeight: 'bold' }}>
                     Find Book
                  </Button>
                </a>
              </Col>
             </Row>
            </Col>
            <Col>
              <h1>{book.volumeInfo.title}</h1>
              <p>Author: {book.volumeInfo.authors.join(', ')}</p>
              <p>Genres: {book.volumeInfo.categories.join(', ')}</p>
              {book.volumeInfo.averageRating && <p>Average Rating among readers: {book.volumeInfo.averageRating} out of 5</p>}
              <p className='text-overflow-clamp'>{book.volumeInfo.description}</p>
            </Col>
          </Row>
         
        </Container>
      
        
    )
}

export default BookPage;