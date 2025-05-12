import { useState } from "react"
import css from "./AddTodo.module.css"

function ADDTODO({ handleonTem })
{

    const [todoitem, setTodoItem] = useState("")
    const [tododate, setTodoDate] = useState("")
    
   const handleonName = (e) => {
            setTodoItem(e.target.value)
    }
    const handleonDate = (e) => {
       
        setTodoDate(e.target.value)
    }
    const handlenewItem = () => {
        handleonTem(todoitem, tododate)
        setTodoItem("")
        setTodoDate("")

    }
    return <>
        <div className="container">
            <div className="row">
                <div className= "col-4">
                    <input className={ css.text} value={todoitem} type="text" placeholder="Enter your text"
                         onChange={handleonName}
                    />
                </div>
                <div className="col-4"><input className={css.text} type="date" value={tododate} onChange={handleonDate} /></div>
                <div className="col-2"><button type="button" className="btn btn-success nkButton" onClick={handlenewItem}>ADD</button></div>
            </div>
        </div>
    </>
}

export default ADDTODO