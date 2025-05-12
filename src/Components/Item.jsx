import TODOItem from "./TodoItem"
import css from "./Item.module.css"

const Items = ({ todoname, tododate, handleDelete }) => {

   
    return (
        <div className="row">
            <div className="col-4" >
                {todoname}
            </div>
            <div className="col-4">{tododate}</div>
            <div className="col-2"><button onClick={() => handleDelete(todoname)} type="button" className="btn btn-danger">Delete</button></div>
        </div>
    )
}
export default Items