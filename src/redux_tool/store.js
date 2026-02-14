import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./Feature";


const store= configureStore({
    reducer:{
        todox:todoreducer
    },
});


export default store;