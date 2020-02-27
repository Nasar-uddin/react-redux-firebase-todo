let initState = {
    addTodoSuccess:false,
    addTodoError:false,
    newTodoAdded:false,
    fetchTodoError:false,
    todos:[]
}

function todoReducer(state=initState,action){
    switch(action.type){
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                addTodoError:false,
                addTodoSuccess:true,
                newTodoAdded:true
            }
        case 'ADD_TODO_ERROR':
            return {
                ...state,
                addTodoSuccess:false,
                addTodoError:true,
                newTodoAddRequest:false,
                newTodoAdded:false
            }
        case 'READY_FOR_NEW_TODO':
            return {
                ...state,
                newTodoAdded:false
            }
        case 'TODOS_FETCHED':
            return {
                ...state,
                fetchTodoError:false,
                todos:action.payload
            }
        case 'FETCH_TODO_ERROR':
            return {
                ...state,
                fetchTodoError:true
            }
        default:
            return state;
    }
}

export default todoReducer;