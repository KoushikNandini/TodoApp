import "bootstrap/dist/css/bootstrap.min.css"
import ADDHeader from "./Components/APPHeader"
import ADDTODO from "./Components/ADDTodo"
import TODOItem from "./Components/TodoItem"
import "./index.css"
import Display from "./Components/Display"
import css from "./App.module.css"
import TodoItemContainerContext from "./TodosStore/TodosStore"


function App() {

  return (
    <TodoItemContainerContext>
      <div className={css.Container}>
        <ADDHeader></ADDHeader>
        <ADDTODO ></ADDTODO>
        <Display></Display>
        <div className="Item-container">
          <TODOItem></TODOItem>
        </div>
      </div>
    </TodoItemContainerContext>
  )
}

export default App
