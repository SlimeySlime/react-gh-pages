import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';




class Write extends React.Component {
    state = {
        title : '',
        content : '',
    };

    syncPost() {
        alert('전송 시작');
        const {title, content} = this.state;
        const post = axios.post("https://localhost:3000/board", {
            title, content
        });
        
        this.setState({
            title : '',
            content : '',
        })
        console.log('post');
    }

    postBoard = async() => {
        alert('전송 시작');
        try{
            const {title, content} = this.state;
            const post = await axios.post("/board", {
                title, content
            });
            // alert("전송중");
            
            this.setState({
                title : '',
                content : '',
        })
        console.log('post');
        }catch(e){
            alert(e);
        }
        
    }

    handleChange = (e) => {
        // input 에서 name='title', value='this.state.title'이 전달됨
        const {name, value} = e.target;
        this.setState({
            [name] : value,
        });
    };


    render(){
        return(
            <Wrap>
                <h2>Write</h2>
                <p>
                    <input
                        type='text'
                        name='title'
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                </p>
                <p>
                    <textarea
                        type='text'
                        name='content'
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </p>
                <Button>
                    <button onClick={this.postBoard}>전송하기</button>
                    <button onClick={this.syncPost}>전송하기(sync)</button>
                    <Link to="/">목록</Link>
                </Button>
                <div>{JSON.stringify(this.state)}</div> 
            </Wrap>
            
        );
    }
}

const Wrap = styled.div`
    padding : 20px;
    input {
        width : 100%
        height : 20px
        border : 1px solid #ccc;
    }
    textarea {
        width : 100%
        height : 100px;
        border : 1px solid #ccc;
    }
`
const Button = styled.div`
    padding : 20px;
    border-top : 1px solid #ccc;
    button {
        float : left;
        margin : 5px;
        padding : 10px 20px;
        border-radius : 5px;
        text-decoration : none;
        background : #212121;
        color : #fff;
        font-size : 16px;
    }
    a {
        float : left;
        margin : 5px;
        padding : 10px 20px;
        border : 1px solid #ddd;
        border-radius : 5px;
        text-decoration : none;
        background : #212121;
        color : #fff;
        font-size : 16px;
    }
`

export default Write;