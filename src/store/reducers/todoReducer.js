let initState = {
    addTodoSuccess:false,
    addTodoError:false,
    newTodoAddRequest:false,
    newTodoAdded:false,
    todos:[
    {
        id:1,
        title:'I am todo one',
        content:'Follow this guide to use the Firebase JavaScript SDK in your web app or as a client for end-user access, for example, in a Node.js desktop or IoT application.',
        userId:1
    },
    {
        id:2,
        title:'I am todo two',
        content:'Follow this guide to use the Firebase JavaScript SDK in your web app or as a client for end-user access, for example, in a Node.js desktop or IoT application.',
        userId:1
    }, {
        id:3,
        title:'I am todo three',
        content:'Follow this guide to use the Firebase JavaScript SDK in your web app or as a client for end-user access, for example, in a Node.js desktop or IoT application.',
        userId:1
    }]
}

function todoReducer(state=initState,action){
    switch(action.type){
        case 'TODO_ADD_REQUEST':
            return {
                ...state,
                newTodoAddRequest:true,
                newTodoAdded:false
            }
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                addTodoError:false,
                newTodoAddRequest:false,
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
        default:
            return state;
    }
}

export default todoReducer;