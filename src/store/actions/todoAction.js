import {db} from '../../firebase/config'

export function addTodoAction(todo){
    return (dispatch)=>{
        const todoRef = db.collection('todos');
        todoRef.add({
            ...todo
        }).then(res=>{
            // console.log(res);
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

export function fetchTodoAction(userId,limit=10){
    return (dispatch)=>{
        const todoRef = db.collection('todos')
        todoRef.where('userId','==',userId).limit(limit)
        .get().then(querySnapshot=>{
            let data = []
            querySnapshot.forEach(doc=>{
                let _d = {
                    id:doc.id,
                    ...doc.data()
                }
                data.push(_d)
            })
            // console.log(data)
            dispatch({
                type:'TODOS_FETCHED',
                payload:data
            })
        }).catch(err=>{
            dispatch({
                type:'FETCH_TODO_ERROR'
            })
        })
    }
}

export function fetchSingleTodoAction(todoId){
    return (dispatch)=>{
        let todoRef = db.collection('todos').doc(todoId)
        todoRef.get().then(doc=>{
            if(doc.exists){
                const d = {
                    ...doc.data(),
                    id:todoId
                }
                dispatch({
                    type:'FETCH_SINGLE_TODO',
                    payload:d
                })
            }else{
                dispatch({
                    type:'FETCH_SINGLE_TODO_ERROR'
                })
            }
        }).catch(err=>{
            dispatch({
                type:'FETCH_SINGLE_TODO_ERROR'
            })
            // console.log(err)
        })
    }
}

export function fetchSingleTodoForUpdate(todoId){
    return (dispatch)=>{
        const todoRef = db.collection('todos').doc(todoId)
        todoRef.get().then(doc=>{
            if(doc.exists){
                const d = {
                    ...doc.data(),
                    id:todoId
                }
                dispatch({
                    type:'FETCH_SINGLE_TODO_FOR_UPDATE',
                    payload:d
                })
            }else{
                dispatch({
                    type:'FETCH_SINGLE_TODO_ERROR'
                })
            }
        }).catch(err=>{
            dispatch({
                type:'FETCH_SINGLE_TODO_ERROR'
            })
        })
    }
}

export function editSingleTodoAction(todoId,title,content){
    return (dispatch)=>{
        const todoRef = db.collection('todos').doc(todoId)
        todoRef.update({
            title:title,
            content:content
        }).then(res=>{
            dispatch({
                type:'TODO_UPDATED'
            })
        }).catch(err=>{
            dispatch({
                type:'TODO_UPDATE_ERROR'
            })
        })
    }
}

export function deleteTodoAction(todoId){
    return (dispatch)=>{
        const todoRef = db.collection('todos').doc(todoId)
        todoRef.delete().then(res=>{
            dispatch({
                type:'DELETE_TODO'
            })
        }).catch(err=>{
            dispatch({
                type:'DELETE_TODO_ERROR'
            })
        })
    }
}

export function makeNewTodoAddedFalse(){
    return (dispatch)=>{
        dispatch({
            type:'READY_FOR_NEW_TODO'
        })
    }
}