import axios from 'axios';
import { ADDNEW_TODO ,GETALL_TODO} from './type';


const API_URL = "http://localhost:4000";


export const addNewTodo = (data)=>async(dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data })
        
        dispatch({ type: ADDNEW_TODO,payload:res.data})

    } catch (err) {
        console.log("error while call the function addNewTodo API", err.message);
    }
}

export const getAllTodo= ()=>async (dispatch) =>{
    try {
        
        const res = await axios.get(`${API_URL}/todos`)
        
        
        dispatch({ type:GETALL_TODO,payload:res.data})

    } catch (err) {
        console.log("error while call the function addNewTodo API", err.message);
    }         
}