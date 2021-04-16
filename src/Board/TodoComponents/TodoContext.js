import React, {createContext, useContext, useReducer, useRef} from 'react';

const initialTodos = [
    {
        id : 1,
        text : '리액트 배우기',
        done : true,
    },
    {
        id : 2,
        text : '컴포넌트 스타일링',
        done : true,
    },
    {
        id : 3,
        text : '리듀서 배우기',
        done : true,
    }
]

function TodoReducer(state, action) {
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                    todo.id === action.id ? {...todo, done : !todo.done} : todo
                );
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        default :
            throw new Error(`unhandled action type : ${action.type}}`);
    }


}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(TodoReducer, initialTodos);
    const nextId = useRef(4);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    // useTodoState 등을 쓰려면 컴포넌트가 TodoProvider 컴포넌트 내부에 있어야하기 때문에, 
    // 감싸져있지 않을 때 에러를 리턴하도록 
    if (!context){
        throw new Error('cant find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context =  useContext(TodoDispatchContext);
    if (!context){
        throw new Error('cant find TodoProvider');
    }
    return context;
}

export function useTodoNextId(){
    const context =  useContext(TodoNextIdContext);
    if (!context){
        throw new Error('cant find TodoProvider');
    }
    return context;
}