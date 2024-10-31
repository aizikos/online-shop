import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API = 'https://fakestoreapi.com/products'
export interface raiting{
    rate: number,
    count: number
}
 
export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: raiting
}

// export interface Product {
//     id: number,
//     name: string,
//     style: string,
//     color: string,
//     fabric: string,
//     price: number,
//     description: string,
//     sizes: string,
//     image_url: string
// }


interface InitialState{
    products: Product[]
    loading: boolean
    error : string | null
}

const initialState : InitialState = {
    products: [],
    loading: false,
    error: null
 }

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try{
        const res = await axios.get(API)
        return res.data
    } catch(error){
        console.log(error);
        
    }
})

export const DeleteProduct = createAsyncThunk('products/DeleteProduct', async(id:number) => {
    try{
        await axios.delete(API)

        return id
    } catch(error){
        console.log(error);
        
    }

})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (build)=> {
        build
        .addCase(getProducts.pending, (state) =>{
            state.loading = true
        })
        .addCase(getProducts.fulfilled, (state,action) =>{
            state.loading = false
            state.products=action.payload
        })
        .addCase(getProducts.rejected, (state) =>{
            state.error = "ERROR 404"
        })
    }
})

export default productSlice.reducer