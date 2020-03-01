import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import { fetchSingleTodoAction,deleteTodoAction } from '../../store/actions/todoAction'


class TodoDetails extends Component {
    componentDidMount(){
        const todoId = this.props.match.params.todo_id
        this.props.fetchSingleTodo(todoId)
    }
    deleteTodo = ()=>{
        this.props.deleteTodo(this.props.todo.id)
        // console.log(this.props.todo.id)
    }
    render() {
        if(this.props.todo===null){
            return (
                <div className="container">
                <div className="row">
                    <h3>Post Loading...</h3>
                </div>
            </div>
            )
        }else if(this.props.isDeleted){
            return (<Redirect to="/"/>)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <h4>{this.props.todo.title}</h4>
                        <hr/>
                        <p>{this.props.todo.content}</p>
                        <p className="right"><small>On:<strong>{Date(this.props.todo.createdAt.seconds)}</strong></small></p>
                    </div>
                    <div className="col s8 offset-s2">
                        <Link to={"/todo/edit/"+this.props.todo.id} className="btn teal">Edit Todo</Link>
                        <button className="btn red right" onClick={this.deleteTodo}>Delete Todo</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        todo:state.todos.singleTodo,
        isDeleted: state.todos.todoDeleted
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchSingleTodo:(todoId)=>{
            dispatch(fetchSingleTodoAction(todoId))
        },
        deleteTodo:(todoId)=>{
            dispatch(deleteTodoAction(todoId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoDetails)