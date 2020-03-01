let initState = {
    addTodoSuccess:false,
    addTodoError:false,
    newTodoAdded:false,
    fetchTodoError:false,
    fetchSingleTodoError:false,
    todoUpdated:false,
    todoUpdateErro:false,
    todos:[],
    singleTodo:null,
    todoThatWillUpdate:null,
    todoDeleted:false,
    todoDeleteError:false
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
                newTodoAdded:false,
                todoUpdated:false,
                todoDeleted:false
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
        case 'FETCH_SINGLE_TODO':
            return {
                ...state,
                fetchSingleTodoError:false,
                singleTodo:action.payload
            }
        case 'FETCH_SINGLE_TODO_ERROR':
            return {
                ...state,
                fetchSingleTodoError:true
            }
        case 'TODO_UPDATED':
            return {
                ...state,
                todoUpdated:true,
                todoUpdateErro:false
            }
        case 'TODO_UPDATE_ERROR':
            return {
                ...state,
                todoUpdateErro:true
            }
        case 'FETCH_SINGLE_TODO_FOR_UPDATE':
            return {
                ...state,
                todoThatWillUpdate:action.payload
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoDeleted:true,
                todoDeleteError:false
            }
            case 'DELETE_TODO_ERROR':
                return {
                    ...state,
                    todoDeleted:false,
                    todoDeleteError:true
                }
        default:
            return state;
    }
}

export default todoReducer;