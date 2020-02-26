import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {logOutUserAction} from '../../store/actions/authAction'

class Navbar extends Component {
    logOutTheUser = ()=>{
        this.props.logOutUser()
    }
    render() {
        return (
            <nav className="purple lighten-2">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Fuck you fb</Link>
                            {this.props.isLogedIn?(
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                     <li><NavLink to="login">ToDos</NavLink></li>
                                     <li><button className="btn red" onClick={this.logOutTheUser}>Sign Out</button></li>
                                </ul>
                            ):(
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><NavLink to="login">Login</NavLink></li>
                                    <li><NavLink to="signup">SignUp</NavLink></li>
                                </ul>
                            )}
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = ({user})=>{
    return {
        isLogedIn:user.isLogedIn
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        logOutUser: ()=>{
            logOutUserAction()(dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);