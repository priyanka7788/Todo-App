import {configureStore} from '@reduxjs/toolkit'
import todosReducers from './todosReducer';

const store = configureStore({
    reducer: {
       todo:todosReducers 
    }
})

export default store;