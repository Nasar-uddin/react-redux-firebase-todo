import {db} from '../../firebase/config'

export function addTodoAction(todo){
    return (dispatch)=>{
        const todoRef = db.collection('todos');
        todoRef.add({
            ...todo
        }).then(res=>{
            console.log(res);
            dispatch({
                type:'ADD_TODO_SUCCESS'
            })
        }).catch(err=>{
            console.log(err);
            dispatch({
                type:'ADD_TODO_ERROR'
            })
        })
    }
}