import { useSelector } from 'react-redux';
import { findBookByCategory } from './booksSlice';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row, 
} from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeBookCard = ({ category }) => {
    const books = useSelector(findBookByCategory(category));
    console.log(books);

    return (
        <Row style={{justifyContent: 'center'}}>
          
                <h1><Link to={`/category/${category}`} className='homePageTitle'>{category.toUpperCase()}</Link></h1>
                {books.filter((book, idx) => idx < 5).map((book, idx) => {
                    return (
                        <Card
                            color='info'
                            outline
                            style={{
                                width: '12rem',
                                marginBottom: 20,
                            }}
                            className='pb-2'
                        >
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                                style={{ maxHeight: 195 }}
                            />
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle tag='h5' className='clipLongTitle'>
                                    <strong>{book.volumeInfo.title}</strong>
                                </CardTitle>
                                <CardSubtitle
                                    tag='h6'
                                    className='clipAuthor mb-3'
                                >
                                    {book.volumeInfo.authors.join(', ')}
                                </CardSubtitle>
                                <Link
                                    to={`/category/${category}/books/${book.volumeInfo.title}`}
                                >
                                    <Button
                                        color='info'
                                        style={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        More Info
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    );
                })}
          
        </Row>
    );
};

export default HomeBookCard;
