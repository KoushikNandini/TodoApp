import "bootstrap/dist/css/bootstrap.min.css"
import ADDHeader from "./Components/APPHeader"
import ADDTODO from "./Components/ADDTodo"
import TODOItem from "./Components/TodoItem"
import "./index.css"
import Display from "./Components/Display"
import { useState } from "react"
import css from "./App.module.css"

function App() {
  
  let [todos, setTodos] = useState([])
  
  let onClick = (itemName,itemDate) => {
  
    let new_TodosList = [...todos, {
      name: itemName,
      date: itemDate
    },]
   
    setTodos(new_TodosList)
  
  }
  let deleteClick = (itemName) => {
   
    const updatedTodos = todos.filter(todo => todo.name !== itemName);
    setTodos(updatedTodos)
  }

  
 
  return(
    <div className={css.Container}>
      <ADDHeader></ADDHeader>
      <ADDTODO handleonTem={onClick} ></ADDTODO>
      {todos.length === 0 && <Display></Display>}
      <div className = "Item-container">
        <TODOItem TODOS={todos} handledeleteClick={deleteClick}></TODOItem>
     </div>
    </div>
  )
}

export default App
