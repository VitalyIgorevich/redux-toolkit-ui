import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    lastName: '',
    firstName: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        }
    }   
})
export const {setFirstName, setLastName} = userSlice.actions
export default userSlice.reducer