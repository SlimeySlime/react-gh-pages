import React from 'react';
import {MdDone, MdDelete} from 'react-icons/md';
import styled, {css} from 'styled-components';

const Remove = styled.div`
    display : flex;
    align-item : center;
    justify-content : center;
    color : #fea2e6;
    font-size : 24px;
    cursor : pointer;
    &:hover {
        color : #ff6b6b;
    }
    display : none;     // 오. 이걸로 어떻게 커서가 들어왔을때만 활성화되지? -> 아래 :hover display : initial 때문에 가능
`

const TodoItemBlock = styled.div`
    display : flex;
    align-item : center;
    padding-top : 12px;
    padding-bottom : 12px;
    &:hover {
        ${Remove} {
            display : flex; // initial이랑 flex랑 같은듯?
        }
    }
`

const CheckCircle = styled.div`
    width : 32px;
    height : 32px;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
    border : 1px solid #ced4d4;
    border-radius : 10px;

    ${props =>
        props.done && 
        css `
            border : 1px solid #38d9d9;
            color : #38d9d9;
            // border, color 둘다 파란색
        `

    }
`

function TodoItem({id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{ done && <MdDone/> }</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}


const Text = styled.div`
    flex : 1;
    font-size : 24px;
`
export default TodoItem;