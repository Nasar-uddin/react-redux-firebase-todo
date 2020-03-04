import React, { Component } from 'react'
import {connect} from 'react-redux'
import Container from '../../hoc/Container'
import { Redirect } from 'react-router-dom'
import {signUpWithEmailPassword} from '../../store/actions/authAction'

class Signup extends Component {
    state = {
        email:'',
        userName:'',
        fullName:'',
        password:'',

    }
    handelChnage = (e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handelSubmit = (e)=>{
        // save in user database display name, userName, photo url, email and uid
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render(){
        if(this.props.isLogedIn){
            return (<Redirect to="/"/>)
        }
        return (
            <div className="col s6 offset-s3">
                <form className="" onSubmit={this.handelSubmit}>
                    <div className="input-field">
                        <input type="text" id="email" onChange={this.handelChnage}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="fullName" onChange={this.handelChnage}/>
                        <label htmlFor="fullName">Full Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="userName" onChange={this.handelChnage}/>
                        <label htmlFor="userName">UserName</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="password" onChange={this.handelChnage}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="red-text">{this.props.signUpErrorMsg?this.props.signUpErrorMsg:''}</div>
                    <button className="btn purple darken-2">Sign Up</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        isLogedIn:state.user.isLogedIn,
        signUpErrorMsg:state.user.signUpErrorMsg
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        signUp: (user)=>{
            dispatch(signUpWithEmailPassword(user))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container(Signup));