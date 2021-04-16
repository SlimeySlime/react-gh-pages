import React from 'react';
import styled from 'styled-components';
import {useTodoState} from './TodoContext';


const TodoHeadBlock = styled.div`
    padding : 48px 32px 32px 24px;  // 위 좌우 아래 순서
    border-bottom : 1px solid #e9e9e9;  // #ffffff 에 가까울수록 하얀색
    h1{
        margin : 0;
        font-size : 36px;
        color : #343a40;
    }
    // 클래스 네임 참조 = .className
    .day {
        margin-top : 4px;
        color : #868e96;
        font-size : 21px;
    }
    .tasks-left {
        margin-top : 40px;
        color : #20c997;
        font-size : 18px;
        font-weight : bold;
    }
`

function TodoHead(){
    const todos = useTodoState();
    const remains = todos.filter(todos => !todos.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year : 'numeric',
        month : 'long',
        day : 'numeric',
    })
    const dayName = today.toLocaleDateString('ko-KR', { weekday : 'long'});
    // 왜 dateString.month 로 접근은 못할까?
    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">날짜 : {dayName}</div>
            <div className="tasks-left">할 일 {remains.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;