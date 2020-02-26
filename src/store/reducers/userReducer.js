let initState = {
    isLogedIn:false,
    isLoggingIn:false,
    isLogInError:false,
    logInErrorMsg:'',
    isLoggingOut:false,
    user:{}
}

function userReducer(state=initState,action){
    switch(action.type){
        // case 'LOGIN_REQUEST':
        //     state.isLoggingIn = true
        //     state.isLogInError = false
        //     return state
        case 'LOGIN_SUCCESS':
            console.log(action.payload);
            state.isLogedIn = true
            state.user = action.payload.user
            state.isLogInError = false
            return state
        case 'LOGIN_FAILURE':
            console.log('fail');
            state.isLogInError = true
            state.logInErrorMsg = "Can't log in"
            return state
        default:
            return state;
    }
    // return state;
}
export default userReducer;