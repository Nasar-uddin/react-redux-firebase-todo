import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

// import components here

import Navbar from './components/layouts/Navbar'
import LogIn from './components/auth/LogIn'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import TodoDetails from './components/todos/TodoDetails'
import EditTodo from './components/todos/EditTodo'
import Signup from './components/auth/Signup'


function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Todos}/>
					<Route path="/login" component={LogIn}/>
					<Route path="/signup" component={Signup}/>
					<Route path="/addtodo" component={AddTodo}/>
					<Route exact path="/todo/:todo_id" component={TodoDetails}/>
					<Route path="/todo/edit/:todo_id" component={EditTodo}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
export default App;
