import { useContext } from "react"
import css from "./display.module.css"
import { TodosItemContainer } from "../TodosStore/TodosStore"

const Display = () => {

    const { todos } = useContext(TodosItemContainer)
    return todos.length === 0 && <p className={css.display}> There are nothing to do right now.</p>
}
export default Display