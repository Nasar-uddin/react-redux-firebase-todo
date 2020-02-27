import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import LogIn from './components/auth/LogIn';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';


function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Todos}/>
					<Route path="/login" component={LogIn}/>
					<Route path="/addtodo" component={AddTodo}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
export default App;
