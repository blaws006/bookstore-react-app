import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail, category }) => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/' className='breadCrumb'>
              HOME
            </Link>
          </BreadcrumbItem>
          {detail && (
            <BreadcrumbItem>
              <Link to={`/category/${category}`} className='breadCrumb'>
                {category.toUpperCase()}
              </Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h2>{current}</h2>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;
