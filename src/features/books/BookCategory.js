import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const BookCategory = ({ books, category }) => {
    console.log(books)
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
                <img src={books.volumeInfo.imageLinks.thumbnail} alt={books.volumeInfo.title} style={{maxHeight: 195}} />
                <CardBody style={{ textAlign: 'center' }}>
                    <CardTitle tag='h5' className="clipLongTitle">
                        <strong>{books.volumeInfo.title}</strong>
                    </CardTitle>
                    <CardSubtitle tag='h6' className="clipAuthor mb-3">
                        {books.volumeInfo.authors.join(', ')}
                    </CardSubtitle>
                    <Link to={`/category/${category}/books/${books.volumeInfo.title}`}>
                        <Button color="info" style={{ color: '#fff', fontWeight: 'bold' }}>More Info</Button>
                    </Link>
                </CardBody>
                
            </Card>
       
        
    )
}

export default BookCategory;