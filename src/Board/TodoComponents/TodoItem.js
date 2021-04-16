import React from 'react';
// https://react-icons.github.io/react-icons/
import {MdDone, MdDelete} from 'react-icons/md';    
import styled, {css} from 'styled-components';
import {useTodoDispatch} from './TodoContext';

const Remove = styled.div`
    display : flex;
    align-items : center;
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
    align-items : center;
    padding-top : 12px;
    padding-bottom : 12px;
    &:hover {
        ${Remove} {
            display : flex; // initial이랑 flex랑 같은듯?
        }
    }
`

const CheckCircle = styled.div`
    display : flex; //
    width : 24px;
    height : 24px;
    font-size : 18px;

    align-items : center;
    justify-content : center;
    margin-right : 20px;
    
    border : 1px solid #ced4d4;
    border-radius : 25px;

    cursor : pointer;
    ${props =>  
        props.done && 
        css `
            border : 1px solid #38d9d9;
            color : #38d9d9;
            // border, color 둘다 파란색
        `

    }
`

const Text = styled.div`
    flex : 1;
    font-size : 24px;
    color : #494960;    
    ${props =>
        props.done &&
        css `
            color : #ced4d4;
            text-decoration : line-through;
        `
    }
    
`

function TodoItem({id, done, text}) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type : 'TOGGLE', id});
    const onDelete = () => dispatch({type : 'DELETE', id});

    return (
        <TodoItemBlock>
            {/* done 이면 <MdDone/> 적용 */}
            <CheckCircle done={done} onClick={onToggle} >
                { done && <MdDone/> }
            </CheckCircle>    
            <Text done={done}>{text}</Text>
            <Remove onClick={onDelete}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}


// export default TodoItem;
export default React.memo(TodoItem);    // -> memorize로 불필요한 리렌더링 방지