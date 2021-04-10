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
`

class List extends Component { 
    state = {
        boards:[],
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(
            {
                [name] : value,
            }
        );
    };
    // 로딩
    loadingData = async() => {
        try{
            const response = await axios.get("https//localhost:3000/board");
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
            {/* {boards} */}
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
            <Button>
                <Link to={'/write'}>글쓰기</Link>
            </Button>
            </div>
            </Wrap>
        );
    }
    

} 

export default List;
