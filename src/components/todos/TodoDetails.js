import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchSingleTodoAction } from '../../store/actions/todoAction'


class TodoDetails extends Component {
    componentDidMount(){
        const todoId = this.props.match.params.todo_id
        this.props.fetchSingleTodo(todoId)
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
        }
        // const d = new Date(this.props.todo.createdAt.seconds)
        // console.log(this.props.todo)
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2 z-depth-0">
                        <div className="">
                            <h4>{this.props.todo.title}</h4>
                            <hr/>
                            <p>{this.props.todo.content}</p>
                            <p className="right"><small>On:<strong>{Date(this.props.todo.createdAt.seconds)}</strong></small></p>
                        </div>
                        <div className="block">
                        {/* <hr/> */}
                            <Link to={"/todo/edit/"+this.props.todo.id} className="btn teal right">Edit Todo</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        todo:state.todos.singleTodo
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchSingleTodo:(todoId)=>{
            dispatch(fetchSingleTodoAction(todoId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoDetails)