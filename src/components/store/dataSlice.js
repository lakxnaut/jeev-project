import { createSlice } from "@reduxjs/toolkit";


const initialState = { jsonData: [], dummyjson: [], fakestore: [] }

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getJsonplaceholder(state, action) {
            state.jsonData = action.payload


        },
        getDummyjson(state, action) {
            state.dummyjson = action.payload



        },
        getFakestore(state, action) {
            state.fakestore = action.payload




        }
    }
})

export const dataSliceActions = dataSlice.actions

export default dataSlice