import firebaseApp from '../../firebase/config'

export function LogInUserAction(email,password){
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_REQUEST'
        })
        firebaseApp.auth().signInWithEmailAndPassword(email,password).then(res=>{
            console.log(res);
            dispatch({
                type:'LOGIN_SUCCESS',
                payload:res
            })
        }).catch(err=>{
            console.log('err');
            dispatch({
                type:'LOGIN_FAILURE',
                payload:err
            })
        })
    }
}