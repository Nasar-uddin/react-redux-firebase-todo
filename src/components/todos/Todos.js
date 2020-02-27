import React, { Component } from 'react'
import {connect} from 'react-redux'
import TodoSummary from './TodoSummary'


class Todos extends Component{
    render() {
        // console.log(this.props)
        let todos = this.props.todos.todos.length>0?(
            this.props.todos.todos.map(todo=>{
                return (
                    <div className="col s6" key={todo.id}>
                        <TodoSummary todo={todo}/>
                    </div>
                )
            })
        ):(<h4>No Post available</h4>)
        return (
            <div className="container">
                <div className="row">
                    {todos}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({todos})=>{
    return {
        todos:todos
    }
}
export default connect(mapStateToProps)(Todos);