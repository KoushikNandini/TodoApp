
import { useContext } from "react"
import Items from "./Item"
import { TodosItemContainer } from "../TodosStore/TodosStore"
function TODOItem() {
   
    const { todos, addNewItem } = useContext(TodosItemContainer)
    return (
        <div className="container">
            {todos.map((items) => (
                < Items key={items.name} todoname={items.name} tododate={items.date}  ></Items>
                ))}
            
        </div>
    )
}
export default TODOItem

