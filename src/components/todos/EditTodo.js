import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editSingleTodoAction,fetchSingleTodoForUpdate} from '../../store/actions/todoAction'
import { Redirect } from 'react-router-dom'

class EditTodo extends Component {
    state = {
        title:'',
        content:'',
        errMsg:'',
        todoMapedToState:false
    }
    componentDidMount(){
        const todoId = this.props.match.params.todo_id
        this.props.getTodo(todoId)
    }
    handelChnage = (e)=>{
        this.setState({[e.target.id]:e.target.value})
        // console.log(this.props.editedTodo)
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        this.props.updateTodo(this.props.editedTodo.id,this.state.title,this.state.content)
    }
    render() {
        // console.log(this.props)
        if(this.props.isTodoUpdated){
            return (<Redirect to="/"/>)
        }else{
            if(this.props.editedTodo===null){
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col s8">
                                <h3>Loading...</h3>
                            </div>
                        </div>
                    </div>
                )
            }// end show this if todo is not loaded
    
            if(this.props.editedTodo.userId!==this.props.userId){
                return (<Redirect to="/"/>)
            }// check if the todo is belongs to user
    
            // set the state with title and content
            if(!this.state.todoMapedToState){
                this.setState({
                    title:this.props.editedTodo.title,
                    content:this.props.editedTodo.content,
                    todoMapedToState:true
                })
            }
            return (
                <div className="container">
                    <div className="row">
                        <form className="col s6 offset-s3" onSubmit={this.handelSubmit}>
                            <h3>Edit todo</h3>
                            <div className="input-field">
                                <input type="text" id="title" value={this.state.title} onChange={this.handelChnage}/>
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field">
                                <textarea className="materialize-textarea" id="content" value={this.state.content} onChange={this.handelChnage}></textarea>
                                <label htmlFor="content">Content</label>
                            </div>
                            <button className="btn green lighten-2">Update Todo</button>
                        </form>
                    </div>
                </div>
            )// main view for update
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        isTodoUpdated: state.todos.todoUpdated,
        isLogedIn: state.user.isLogedIn,
        userId: state.user.user.uid,
        editedTodo: state.todos.todoThatWillUpdate
    }
}
const mapDispatchToProps  = (dispatch)=>{
    return {
        updateTodo:(todoId,title,content)=>{
            dispatch(editSingleTodoAction(todoId,title,content))
        },
        getTodo:(todoId)=>{
            dispatch(fetchSingleTodoForUpdate(todoId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditTodo)