import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProducts } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Button
} from 'react-bootstrap';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(createProducts({title, price, imgUrl}));
    navigate('/books');
  }

  return (
    <Container className="p-5">
      <h1 className="text-center">Form Add Book</h1>
      <Form onSubmit={createProduct} className="border border-1 p-5">
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
        <Form.Group className="mb-3" controlId="imgUrl">
          <Form.Label><b>Gambar</b></Form.Label>
          <Form.Control type="text" placeholder="url gambar"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-success">Submit</Button>
      </Form>
    </Container>
  )
}

export default AddProduct