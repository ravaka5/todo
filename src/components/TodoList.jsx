import TodoCard from "./TodoCard"
import PropTypes from "prop-types"

export default function TodoList(props) {
    let { todos } = props
    return (
    <div>
        {
            todos.map((todo,todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })
        }
    </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
}