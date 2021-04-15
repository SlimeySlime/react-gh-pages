import React from 'react';
import styled from 'styled-components';

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

    return (
        <TodoHeadBlock>
            <h1>2021년 4월 15일</h1>
            <div className="day">목요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;