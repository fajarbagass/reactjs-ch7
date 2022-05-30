import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelectors, updateProducts } from '../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Button
} from 'react-bootstrap';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const product = useSelector((state) => productSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getProducts());

  },[dispatch]);

  useEffect(() => {
    if(product){
        setTitle(product.title);
        setPrice(product.price);
    }
  },[product])

  const handleUpdate = async(e) => {
      e.preventDefault();
      await dispatch(updateProducts({id, title, price}));
      navigate('/books');
  }

  return (
    <Container className="p-5">
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label><b>Judul Buku</b></Form.Label>
          <Form.Control type="text" placeholder="judul buku"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label><b>Harga Buku</b></Form.Label>
          <Form.Control type="text" placeholder="harga"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-success">Update</Button>
      </Form>
    </Container>
  )
}

export default EditProduct