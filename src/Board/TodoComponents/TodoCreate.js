import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

const CircleButton = styled.button`
    background : #32d4e3;
    &:hover {
        background : #26c1a1;
    }
    &:active {
        background : #20c997;
    }

    cursor : pointer;
    width : 80px;
    height : 80px;
    border-radius : 50%;
    border : none;
    align-items : center;
    justify-content : center;
    display : block;
    /* z-index : 5; */
    font-size : 60px;
    color : white;

    position : absolute;
    left : 50%;
    bottom : 0px;
    transform : translate(-50%, 50%);   // ??

    outline : none; // border : none 과 같지않나?
    display : flex;

    transition : 0.125s all ease-out;   // 모든 트랜지션 (hover 포함)에 0.125s 
    ${props =>
        props.open && 
        css `
            background : #ff6b6b;
            &:hover {
                background : #ff8787;
            }
            &:active {
                background : #fa5252;
            }
            transform : translate(-50%, 50%) rotate(45deg);
        `
    }
    
`
// 구찮아서 인서트 폼은 일단 복붙
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);    // 기본값은 false로

    const onToggle = () => {
        setOpen(!open);
    }

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder=" - 여기에 할 일을 입력 - "></Input>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd  />
            </CircleButton>
        </>
    );
}


export default TodoCreate;