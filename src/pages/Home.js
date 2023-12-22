import { categories } from "../app/shared/categories";
import { Link } from 'react-router-dom';
import SubHeader from "../components/SubHeader";
import { Row, Container } from 'reactstrap'

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <SubHeader current='HOME' />
                </Row>
            </Container>
               
            {categories.map((category, idx) => {
                    return (
                        <div id={idx} key={idx} className="text-center">
                            <Link to={`/category/${category}`}>
                                {category.toUpperCase()}
                            </Link> 
                        </div>
                    )
            })}
        </>
    )

}

export default Home;