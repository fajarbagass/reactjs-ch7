import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, productSelectors, deleteProducts } from '../features/productSlice';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ShowProduct = () => {

  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div>
      <NavBar />
      <Container fluid className="my-4">
        <h3 className="text-center">Book List</h3>
        <Link to="add" className="btn btn-primary ms-3">Add New Product</Link>
        <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
          {products.map((product) => (
          <Card style={{ width: '18rem', marginRight: '24px', marginTop: "24px" }} key={product.id}>
            <Card.Img variant="top" src={product.imgUrl} />
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><b>Judul</b> : {product.title}</ListGroup.Item>
                <ListGroup.Item><b>Harga</b> : Rp {product.price}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Link to={`edit/${product.id}`} className="btn btn-primary">Edit</Link>
            <Button onClick={() => dispatch(deleteProducts(product.id))} className="btn btn-danger">Delete</Button>
          </Card>
          ))}
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default ShowProduct