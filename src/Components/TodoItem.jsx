
import Items from "./Item"
function TODOItem({ TODOS, handledeleteClick }) {
   
    return (
        <div className="container">
            {TODOS.map((items) => (
                < Items key={items.name} todoname={items.name} tododate={items.date} handleDelete={handledeleteClick} ></Items>
                ))}
            
        </div>
    )
}
export default TODOItem

