import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";


const BookCategory = ({ books }) => {
    console.log(books)
    return (
       
            <Card
                color="info" 
                outline
                style={{
                    width: '10rem'
                }}
                className="pb-2"
            >
                <img src={books.volumeInfo.imageLinks.thumbnail} alt={books.volumeInfo.title} />
                <CardBody style={{ textAlign: 'center' }}>
                    <CardTitle tag='h5'>
                        <strong>{books.volumeInfo.title}</strong>
                    </CardTitle>
                    <CardSubtitle tag='h6'>
                        {books.volumeInfo.authors.join(', ')}
                    </CardSubtitle>
                </CardBody>
                <Link to={`/books/${books.volumeInfo.title}`}>
                    <Button color="info" style={{ color: '#fff', fontWeight: 'bold' }}>More Info</Button>
                </Link>
            </Card>
       
        
    )
}

export default BookCategory;