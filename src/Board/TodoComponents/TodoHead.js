import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding : 32px;

    h1{
        margin : 0;
        font-size : 36px;
        color : #343a40;
    }
    // 클래스 네임 참조 = .className
    .day{

    }
`

function TodoHead(){

    return (
        <TodoHeadBlock>
            <h1>2021년 4월 15일</h1>
            <div className="day">목요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;