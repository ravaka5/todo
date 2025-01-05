import PropTypes from "prop-types"
export default function TodoCard(props) {
    const { children } = props
    return (
    <div>
        <li className="todoItem">
        {children}
            <div className="actionsContainer">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i>
            </div>
        </li>
    </div>
    )
}

TodoCard.propTypes = {
    children: PropTypes.node
}
