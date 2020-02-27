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
        todoRef.where('userId','==',userId)
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
export function makeNewTodoAddedFalse(){
    return (dispatch)=>{
        dispatch({
            type:'READY_FOR_NEW_TODO'
        })
    }
}