import { useState } from "react"
import PropType from "prop-types"

export default function TodoInput(props) {
    const { handleAddTodos } = props ;
    const [todoValue , setTodoValue] = useState('')
    return (
    <header>
        <input value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        placeholder="Enter todo..."></input>
        <button onClick={()=>{
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
    )
}

TodoInput.propTypes = {
    handleAddTodos: PropType.func
}