import { categories } from "../app/shared/categories";
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <>
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