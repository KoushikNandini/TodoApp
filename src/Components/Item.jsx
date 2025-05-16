import TODOItem from "./TodoItem"
import css from "./Item.module.css"
import { useContext } from "react"
import { TodosItemContainer } from "../TodosStore/TodosStore"

const Items = ({ todoname, tododate }) => {

    const { todos, deleteTodo } = useContext(TodosItemContainer)
    return (
        <div className="row">
            <div className="col-4" >
                {todoname}
            </div>
            <div className="col-4">{tododate}</div>
            <div className="col-2"><button onClick={() => deleteTodo(todoname)} type="button" className="btn btn-danger">Delete</button></div>
        </div>
    )
}
export default Items