import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Fuck you fb</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="login">Login</NavLink></li>
                            <li><NavLink to="signup">SignUp</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
