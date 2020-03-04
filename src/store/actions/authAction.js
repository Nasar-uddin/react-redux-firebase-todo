import firebaseApp/*,{db}*/ from '../../firebase/config'

export function LogInUserAction(email,password){
    return (dispatch)=>{
        firebaseApp.auth().signInWithEmailAndPassword(email,password).then(res=>{
            // console.log(res);
            dispatch({
                type:'LOGIN_SUCCESS',
                payload:res
            })
        }).catch(err=>{
            // console.log(err);
            dispatch({
                type:'LOGIN_FAILURE',
                payload:err
            })
        })
    }
}

export function logOutUserAction(){
    return (dispatch)=>{
        firebaseApp.auth().signOut().then(res=>{
                dispatch({
                    type:'LOGOUT_SUCCESS'
                })
            }).catch(err=>{
                dispatch({
                    type:'LOGOUT_ERROR'
                })
            })
    }
}

// check if the email or username exist in database

export function signUpWithEmailPassword(user){
    return (dispatch)=>{
        firebaseApp.auth().createUserWithEmailAndPassword(user.email,user.password).then(res=>{
            console.log(res)
            var user = firebaseApp.auth().currentUser;
            user.updateProfile({
                displayName: user.fullName,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(function() {
                dispatch({
                    type:'SIGN_UP_SUCCESS',
                    payload:res.user
                })
            }).catch(function(error) {
                dispatch({
                    type:'SIGN_UP_SUCCESS',
                    payload:res.user
                })
            });
        }).catch(err=>{
            dispatch({
                type:'SIGN_UP_ERROR',
                payload:err.message
            })
        })
    }
}
