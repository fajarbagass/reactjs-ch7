import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async() => {
    const response = await axios.get('http://localhost:3002/products');
    return response.data;
});

export const createProducts = createAsyncThunk("products/createProducts", async({title, price, imgUrl}) => {
    const response = await axios.post('http://localhost:3002/products',{
        title,
        price,
        imgUrl
    });
    return response.data;
});

export const updateProducts = createAsyncThunk("products/updateProducts", async({id, title, price, imgUrl}) => {
    const response = await axios.patch(`http://localhost:3002/products/${id}`,{
        title,
        price,
        imgUrl
    });
    return response.data;
});

export const deleteProducts = createAsyncThunk("products/deleteProducts", async(id) => {
    await axios.delete(`http://localhost:3002/products/${id}`);
    return id;
});

const productEntity = createEntityAdapter({
    selectId: (product) => product.id
});

const productSlice = createSlice({
    name: "product",
    initialState: productEntity.getInitialState(),
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            productEntity.setAll(state, action.payload);
        },
        [createProducts.fulfilled]: (state, action) => {
            productEntity.addOne(state, action.payload);
        },
        [deleteProducts.fulfilled]: (state, action) => {
            productEntity.removeOne(state, action.payload);
        },
        [updateProducts.fulfilled]: (state, action) => {
            productEntity.updateOne(state, {id: action.payload.id, update: action.payload});
        }
    }
});

export const productSelectors = productEntity.getSelectors(state => state.product);
export default productSlice.reducer;