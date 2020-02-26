import React, { Component } from 'react'
import {connect} from 'react-redux';

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
        //console.log(this.state);
    }
    render() {
        console.log(this.props);
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
                        <div className="red-text">{this.props.authErrorMsg}</div>
                        <button className="btn red lighten-2">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return {authErrorMsg:state.user.logInErrorMsg};
}
const mapDispatchToProps = (dispatch)=>{
    return {
        logInUser: (email,password)=>{
           return dispatch(LogInUserAction(email,password));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LogIn);