import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useTodoState} from './TodoContext';

const TodoListBlock = styled.div`
    flex : 1;    // ? -> 자신이 차지할 수 있는 영역은 꽉 채우도록
    padding : 20px 32px;
    overflow-y : auto;  // 오
    // background : gray;
`

function TodoList() {
    const todos = useTodoState();
    // useState로 todo를 가져와서 map 
    return(
        <TodoListBlock>
            {todos.map( todo =>
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            )}
            
        </TodoListBlock> 
    );
}

export default TodoList;