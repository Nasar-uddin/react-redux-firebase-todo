let initState = {
    isLogedIn:false,
    isLoggingIn:false,
    isLogInError:false,
    logInErrorMsg:'',
    logOutError:false,
    signUpError:false,
    signUpErrorMsg:null,
    user:{}
}

function userReducer(state=initState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogedIn:true,
                isLogInError:false,
                logInErrorMsg:'',
                user:action.payload.user
            }
        case 'LOGIN_FAILURE':
            // console.log('fail');
            return {
                ...state,
                isLogInError:true,
                logInErrorMsg:"Can't login"
            }
        case 'FOUND_USER':
            // console.log(action.payload);
            return {
                ...state,
                isLogedIn:true,
                isLogInError:false,
                user:action.payload
            }
        case 'NO_USER_FOUND':
            return {
                ...state,
                isLogedIn:false
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLogedIn:false
            }
        case 'LOGOUT_ERROR':
            return {
                ...state,
                logOutError:true
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                signUpError:true,
                signUpErrorMsg:action.payload
            }
        case 'SIGN_UP_SUCCESS':
            console.log('Sign up success')
            return {
                ...state,
                isLogedIn:true,
                signUpError:false,
                signUpErrorMsg:null,
                user:action.payload
            }
        default:
            return state;
    }
    // return state;
}
export default userReducer;