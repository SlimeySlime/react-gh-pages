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
        width : 10px;
    }
`
const ListItem = styled.div`
    margin : 5px;
    border-top : 1px solid #f33;
    p {
        font-size : 12px;
    }
    button {
        border : 1px solid;
        border-radius : 5px;
    }
`

function OnePageBoard (){
    const [boardData, setBoard] = useState([
    
        {
            title : "첫글추",
            content : "글내용",
        },
        {
            title : "두번째 글",
            content : "글내용2",
        }
        
    ]);
    const [inputs, setInputs] = useState(
        {
            title : '',
            content : '',
        }
    );
    const { title, content} = inputs;
    const { board } = boardData;
    const nameInput = useRef();
    
    // onChange : 즉시 value에 반영
    const onChange = e => {
        // e : syntheticBaseEvent / 수많은 이벤트 데이터의 집합.
        // 그 중에 target에는 value(값)과 name(블록name) 등 등 target 블록의 값들이 담겨져있음
        const {value, name} = e.target;
        setInputs({
            ...inputs,          // e.target 값의 name이 title 이면 [title] : value 
            [name] : value,     // target name이 content면 [content] : value
        });
    }
    // 게시글 쓰기 
    const post = e => {
        const {value, name} = e.target;
        const newBoard = {
            title,
            content,
        }
        // setBoard(board.concat(newBoard));
        setBoard([...boardData, newBoard]);
        
        setInputs({
            title : '',
            content : ''
        });
    }
    
    const postDelete = (key) => {
        setBoard(boardData.filter(board => board.key !== key));
        // console.log(key);
    }

    const onRemove = () => {

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
            {boardData.map( (item) => {
                return (
                    <ListItem key={item.key}>
                        <h3>{item.key} : {item.title}</h3>
                        <p>{item.content}</p>
                        <button key={item.key} onClick={ () => postDelete(item.key)}>삭제하기</button>
                    </ListItem>
                );
            })}
            <ListItem>

            </ListItem>

            <div><b>값 : </b>{title} ({content})</div>
            <div>{JSON.stringify(board)}</div>

        </div>
    );
    
}

export default OnePageBoard;

