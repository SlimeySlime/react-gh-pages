import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrap = styled.div`
    padding : 20px;
`
const Button = styled.div`
    border-top:1px solid #eee;
    padding : 20px;
    a {
        float : left;
        padding : 10px 20px;
        text-decoration : none;
        border-radius : 5px;
        background : #212121;
        color : #fff;
    }
`
const ListItem = styled.div`
    width : 100%;
    border-top : 1px solid;
    margin-top : 10px;
    padding : 0px 10px;
    a {
        text-decoration : none;
        h3 {
            margin : 0;
            color : #212121;
        }
        p {
            font-size : 5px;
            padding : 10px 0 0 0;
            color : #787878;
        }
        &:hover {
            h3 {
                color : #0066ff;
            }
        }
    }
    

`

class List extends Component { 
    state = {
        // boards:[],
        boards : [
            {
                no : 1,
                writer : 'jinsu',
                title : '1번글',
                content : "제곧내",
                data : new Date(),
            },
            {
                no : 2,
                writer : 'jinsu2',
                title : '2번글',
                content : "제곧내",
                data : new Date(),
            }
        ]
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(
            {
                [name] : value,
            }
        );
    };

    dataAddTest= (e) => {

    }

    // 로딩
    loadingData = async() => {
        try{
            const response = await axios.get("/board");
            this.setState({
                //boards : 'test',
                boards : response.data,
            });
        }catch(e){
            console.log(e);
        }
    }
    componentDidMount(){
        const {loadingData} = this;
        loadingData();
    }

    render() {
        const { boards } = this.state;
        const { handleChange } = this;
        return (
            <Wrap>
            <div>
            <h2> List </h2>
            {/* 디버그용 json stringfy */}
            {boards && <textarea
                name="getBoards2"
                onChange={handleChange}
                rows={7}
                value={JSON.stringify(boards, null, 2)}
            />}
            {boards.map( (item) => {
                return(
                    <ListItem key={item.key}>
                        <Link to={'/read/${item.id}'}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </Link>
                    </ListItem>
                );
            })}
            <form onSubmit>

            </form>
            <Button>
                <Link to={'/write'}>글쓰기</Link>
            </Button>
            </div>
            </Wrap>
        );
    }
    

} 

export default List;
