import {configureStore} from '@reduxjs/toolkit'
import { tabReducer } from './tabReducer';
import todosReducers from './todosReducer';

const store = configureStore({
    reducer: {
        todo: todosReducers,
        currentTab: tabReducer
    }
})

export default store;