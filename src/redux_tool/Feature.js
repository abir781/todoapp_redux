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
        },
        deletetodo: (state,action)=>{
            state.arr=state.arr.filter((a)=>a!==action.payload)
        }
    }
})

export const {addtodo,settext,deletetodo}=todoslice.actions
export default todoslice.reducer