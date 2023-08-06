import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const signUpAction = createAsyncThunk(
    'signUpAction',
    async (param, {dispatch}) => {
            await axios({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(param)
            })
            console.log(param);
            localStorage.setItem('user', JSON.stringify(param))
    }
)

export const loginAction = createAsyncThunk(
    'loginAction',
    async (param, {dispatch}) => {
        await axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(param)
        })
        console.log(param);
        dispatch(setLogin())
}
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        signUp: JSON.parse(localStorage.getItem('user')) ? true: false,
        login: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.login = true
        },
    }
})

export const {setLogin} = userSlice.actions;
export default userSlice.reducer
