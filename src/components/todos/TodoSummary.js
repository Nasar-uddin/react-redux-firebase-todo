import React from 'react'
import { Link } from 'react-router-dom';



function TodoSummary(props) {
    return (
        <div className="card">
            <div className="card-content">
                <Link className="card-title red-text bold" to={'/todo/'+props.todo.id}>{props.todo.title}</Link>
                <p>{props.todo.content}</p>
            </div>
        </div>
    )
}
export default TodoSummary;