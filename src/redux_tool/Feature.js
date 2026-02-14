import { createSlice } from "@reduxjs/toolkit";

const todoslice= createSlice({
    name: 'todo',
    initialState: {
        text:"",
        arr:[]
    },
    reducers:{
        settext:(state,action)=>{
            state.text=action.payload;
        },
        addtodo: (state,action)=>{
            state.arr.push(action.payload)
        }
    }
})

export const {addtodo,settext}=todoslice.actions
export default todoslice.reducer