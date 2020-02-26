import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {LogInUserAction} from '../../store/actions/authAction';

class LogIn extends Component{
    state = {
        email:'',
        password:'',
        errorMsg:null
    }
    handelChange = (e)=>{
        this.setState({[e.target.id]:e.target.value});
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        this.props.logInUser(this.state.email,this.state.password);
    }
    render() {
        // console.log(this.props);
        if(this.props.user.isLogedIn){
            return <Redirect to="/"/>
        }else{
            return (
                <div className="login-user container">
                    <div className="row">
                        <form className="col s6 offset-s3" onSubmit={this.handelSubmit}>
                            <div className="input-field">
                                <input type="text" id="email" onChange={this.handelChange}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="password" onChange={this.handelChange}/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="red-text center">{this.props.user.logInErrorMsg}</div>
                            <button className="btn red lighten-2">Log In</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state)=>{
    // console.log(state);
    return {user:state.user};
}
const mapDispatchToProps = (dispatch)=>{
    return {
        logInUser: (email,password)=>{
           return dispatch(LogInUserAction(email,password));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LogIn);