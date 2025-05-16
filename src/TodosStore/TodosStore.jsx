
import React from "react"
import { createContext , useReducer } from "react"

export const TodosItemContainer = React.createContext({
    todos: [],
    addNewTodo: () => { },
    deleteTodo:()=>{}
})

const todoItemsReducer = (currTodosItem, action) => {

    let newTodoItems = currTodosItem
    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currTodosItem, {
            name: action.payload.itemName,
            date: action.payload.itemDate
        },]
    }
    else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodosItem.filter(todo => todo.name !== action.payload.itemName);
    }
    return newTodoItems
}
const TodoItemContainerContext = ({children}) => {
    
    const [todos, dispatchtodoItems] = useReducer(todoItemsReducer, [])

    let addNewTodo = (itemName, itemDate) => {

        const newTodoAction = {
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDate
            }
        }
        dispatchtodoItems(newTodoAction)


    }
    let deleteTodo = (itemName) => {

        const deletTodoAction = {
            type: "DELETE_ITEM",
            payload: {
                itemName,
            }
        }
        dispatchtodoItems(deletTodoAction)

    }
    return (
        <TodosItemContainer.Provider value={{
            todos,
            addNewTodo,
            deleteTodo
        }}>
            {children}
        </TodosItemContainer.Provider>
)
}
export default TodoItemContainerContext