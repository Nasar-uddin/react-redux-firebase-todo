import React, { Component } from 'react'
import {connect} from 'react-redux'
import TodoSummary from './TodoSummary'
import {makeNewTodoAddedFalse,fetchTodoAction} from '../../store/actions/todoAction'
import { Redirect } from 'react-router-dom'

class Todos extends Component{
    componentDidMount(){
        if(this.props.isLogedIn){
            this.props.makeNewTodoAddedFalse()
            this.props.fetchTodos(this.props.userId,4)
        }
    }
    render() {
        // console.log(this.props)
        if(!this.props.isLogedIn){
            return (<Redirect to="/login"/>)
        }
        let todos = this.props.todos.todos.length>0?(
            this.props.todos.todos.map(todo=>{
                return (
                    <div className="col s6" key={todo.id}>
                        <TodoSummary todo={todo}/>
                    </div>
                )
            })
        ):(<h4>No Post available or loading post</h4>)
        return (
            <div className="container">
                <div className="row">
                    {todos}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        todos:state.todos,
        isLogedIn:state.user.isLogedIn,
        userId:state.user.user.uid
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        makeNewTodoAddedFalse: ()=>{
            dispatch(makeNewTodoAddedFalse())
        },
        fetchTodos:(user_id,limit)=>{
            dispatch(fetchTodoAction(user_id,limit))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)