import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodoAction} from '../../store/actions/todoAction'
import { Redirect } from 'react-router-dom'

class AddTodo extends Component {
    state = {
        title:'',
        content:'',
        userId:this.props.user_id,
        errMsg:''
    }
    handelChnage = (e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo({
            title:this.state.title,
            content:this.state.content,
            userId:this.state.userId,
            createdAt: new Date()
        })
    }
    render() {
        if(this.props.isTodoAdded){
            return (<Redirect to="/"/>)
        }else{
            return (
                <div className="container">
                    <div className="row">
                        <form className="col s6 offset-s3" onSubmit={this.handelSubmit}>
                            <div className="input-field">
                                <input type="text" id="title" onChange={this.handelChnage}/>
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field">
                                <textarea className="materialize-textarea" id="content" onChange={this.handelChnage}></textarea>
                                <label htmlFor="content">Content</label>
                            </div>
                            <button className="btn green lighten-2">Add New Todo</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        user_id:state.user.user.uid,
        isTodoAdded: state.todos.newTodoAdded
    }
}
const mapDispatchToProps  = (dispatch)=>{
    return {
        addTodo:(todo)=>{
            dispatch(addTodoAction(todo))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)