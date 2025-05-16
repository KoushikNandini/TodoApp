import { useRef } from "react"
import css from "./AddTodo.module.css"

function ADDTODO({ handleonTem }) {

    const todoItem = useRef()
    const todoDate = useRef()


    const handlenewItem = (e) => {

        e.preventDefault()
        handleonTem(todoItem.current.value, todoDate.current.value)
        todoItem.current.value = ""
        todoDate.current.value = ""

    }
    return <>
        <form onSubmit={handlenewItem} className="container">
            <div className="row">
                <div className="col-4">
                    <input className={css.text} ref={todoItem} type="text" placeholder="Enter your text" />
                </div>
                <div className="col-4"><input type="date" className={css.text} ref={todoDate} /></div>
                <div className="col-2"><button type="submit" className="btn btn-success nkButton" >ADD</button></div>
            </div>
        </form>
    </>
}

export default ADDTODO