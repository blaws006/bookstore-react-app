import { categories } from '../app/shared/categories';
// import { Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import { Row, Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading';
const HomeBookCard = lazy(() =>
  delayForDemo(import('../features/books/HomeBookCard'))
);

const Home = () => {
  const booksArr = useSelector((state) => state.books.booksArray);
  const isLoading = useSelector((state) => state.books.isLoading);
  const errMess = useSelector((state) => state.books.errMess);
  if (isLoading) {
    return (
      <>
        <Container>
          <Row>
            <SubHeader current='HOME' />
          </Row>
        </Container>
        <h1>Loading</h1>
      </>
    );
  }
  if (errMess !== '') {
    return (
      <>
        <Container>
          <Row>
            <SubHeader current='HOME' />
          </Row>
        </Container>
        <h1>{errMess}</h1>
      </>
    );
  }
  return (
    <>
      <Container>
        <Row>
          <SubHeader current='HOME' />
        </Row>
      </Container>
      {booksArr &&
        categories.map((category, idx) => {
          return (
            <div id={idx} key={idx} className='text-center'>
              <Suspense fallback={<Loading />}>
                <HomeBookCard category={category} />
              </Suspense>

              {/* <Link to={`/category/${category}`}>
                            {category.toUpperCase()}
                        </Link>  */}
            </div>
          );
        })}
    </>
  );
};

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}

export default Home;
