import React from 'react'


function TodoSummary(props) {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{props.todo.title}</span>
                <p>{props.todo.content}</p>
            </div>
        </div>
    )
}
export default TodoSummary;