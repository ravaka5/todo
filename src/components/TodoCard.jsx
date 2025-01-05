import PropTypes from "prop-types"
export default function TodoCard(props) {
    const { children,handleDeleteTodo,todoIndex,handleEditTodo } = props
    return (
    <div>
        <li className="todoItem">
        {children}
            <div className="actionsContainer">
                <button>
                    <i className="fa-solid fa-pen-to-square" onClick={()=>
                        handleEditTodo(todoIndex)
                    }></i>
                </button>
                <button>
                    <i className="fa-regular fa-trash-can" onClick={() => handleDeleteTodo(todoIndex)}></i>
                </button>
            </div>
        </li>
    </div>
    )
}

TodoCard.propTypes = {
    children: PropTypes.node,
    handleDeleteTodo: PropTypes.func,
    handleEditTodo: PropTypes.func,
    todoIndex: PropTypes.number
}
