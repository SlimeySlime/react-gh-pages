import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Number = styled.div`
    width : 100%;
    font-size : 25px;
    border : 1px solid #ccc;
    padding : 5px;
`
const Button = styled.button`
    display : inline-flex;
    flex-direction : column;
    margin : 5px;
`
const Input = styled.div`
    border : 1px solid;
    padding : 2px;
    input {
        width = 10px;
    }
`
const ListItem = styled.div`
    border-top : 1px solid #f33;
    p {
        font-size : 12px;
    }
`

function OnePageBoard (){
    const [boardData, setBoard] = useState({
        board : [
            {
                title : "첫글추",
                content : "1빠",
            }
        ],
    })
    const [inputs, setInputs] = useState(
        {
            title : '',
            content : '',
        }
    );
    const { title, content} = inputs;
    const { board } = boardData;
    const nameInput = useRef();

    const onChange = e => {
        // e : syntheticBaseEvent / 수많은 이벤트 데이터의 집합.
        // 그 중에 target에는 value(값)과 name(블록name) 등 등 target 블록의 값들이 담겨져있음
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value, 
            // e.target 값의 name이 title 이면 [title] : value 
            // target name이 content면 [content] : value
        });
    }
    const post = e => {
        const {value, name} = e.target;
        const newBoard = {
            title,
            content,
        }
        setBoard(board.concat(newBoard));
        
        setInputs({
            title : '',
            content : ''
        });
    }

    const resetInput = () => {
        setInputs({
            title : '',
            content : ''
        });
        nameInput.current.focus();
        nameInput.current.value = '';
    }

    return(
        <div>
            <h3>카운터</h3>
            <Input>
                <input name="title" placeholder="글제목" ref={nameInput} onChange={onChange}/>
                <input name="content" placeholder="내용"onChange={onChange} />
                <Button onClick={post}> 추가 </Button>
                <Button onClick={resetInput}> 내용 초기화 </Button>
            </Input>
            {/* {board.map( (item) => {
                return (
                    <ListItem key={item.key}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </ListItem>
                );
            })} */}
            <ListItem>

            </ListItem>

            <div><b>값 : </b>{title} ({content})</div>
            <div>{JSON.stringify(board)}</div>

        </div>
    );
    
}

export default OnePageBoard;

