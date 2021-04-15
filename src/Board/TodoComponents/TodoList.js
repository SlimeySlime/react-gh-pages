import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex : 1;    // ? -> 자신이 차지할 수 있는 영역은 꽉 채우도록
    padding : 20px 32px;
    overflow-y : auto;  // 오
    // background : gray;
`

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem text="프로젝트 생성" done={true}></TodoItem>
            <TodoItem text="컴포넌트 스타일링" done={false}></TodoItem>
        </TodoListBlock> 
    );
}

export default TodoList;