import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BE_URL } from "../../../config";
import axios from "axios";


const initialState = {
    products: [],
    searchText: "",
}
export const fetchProductData = createAsyncThunk("product/fetchProduct", () => {
    return axios
        .get(`${BE_URL}/product/getAll`, {
            params: {
                gender: "male",
            },
        })
        .then((resData) => {
            return resData.data;
        });
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.unshift(payload.data);
        },
        updateProduct: (state, { payload }) => {
            state.products.splice(payload?.index, 1, payload?.data);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.fulfilled, (state, { payload }) => {
            state.products = payload.data;
        });
    },
});

export default productSlice.reducer;
export const { addProduct, updateProduct } = productSlice.actions;




// export const fetchProductData = createAsyncThunk("product/fetchProduct", () => {

//     // console.log("resdata----=====-----");
//     return axios.get(`${BE_URL}/product/getAll` {
//         params:{
//             gender:"male",
//         },

//     })
//     .then((resData) => {
//         // console.log("resdata", resData);
//         return resData.data
//         // .catch((err) => console.log(err.message));
//     });

// });

// const productSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchProductData.fulfilled, (state, { payload }) => {

//             state.products = payload.data
//         });
//     }

// });

// export default productSlice.reducer


