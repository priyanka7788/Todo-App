import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "../redux/actions/index1";


const Todos = () => {
    const dispatch = useDispatch()
     let todos = useSelector((state) => state.todo);
    useEffect(() => { 
        dispatch(getAllTodo())
},[dispatch])
    const func = (data) => {

        if (data?.length > 0) {
            return data.map((todo) => (
                <li key={todo._id}>{todo.data}</li>
            
        ))
    }
}
   

    return (
        <article>
            <ul>{
            
                func(todos.data)
            
            }
            </ul>
        </article>
        
    )

}
export default Todos;    