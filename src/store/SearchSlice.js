import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const SearchSlice=createSlice({
    name:'SearchSlice',
    initialState:{
        products:[],
        oneProduct: {}
    },
    reducers:{
        getProducts:(state,action)=>{
            state.products = action.payload
        },
        searchAction:(state,action)=>{
            state.products = state.products.filter(item=>item?.title.includes(action.payload.inp) && item?.category.includes(action.payload.inp2))
        },
        getOneAction: (state, action) => {
            state.oneProduct = action.payload
        }
    }
})
export const getProductsAsunc=createAsyncThunk(
    'getProductsAsunc',
    async (param,{dispatch})=>{
        const response= await axios.get('https://fakestoreapi.com/products/')
        const data = await response.data
        dispatch(getProducts(data))
    }
)

export const getOneProduct = createAsyncThunk(
    'getOneProduct',
    async (id, {dispatch}) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const data = await response.data
        dispatch(getOneAction(data))
    
    }
)
export const {getProducts,searchAction, getOneAction} = SearchSlice.actions
export default SearchSlice.reducer
