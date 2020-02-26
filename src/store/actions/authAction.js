import firebaseApp from '../../firebase/config'

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