import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

import firebaseApp from './firebase/config';

firebaseApp.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch({
            type:'FOUND_USER',
            payload:user
        });
        // console.log(store.getState());
        ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
    }else{
        store.dispatch({
            type:'NO_USER_FOUND',
            payload:user
        });
        ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
    }
});

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
