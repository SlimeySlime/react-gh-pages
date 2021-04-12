import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.baseURL = "http://localhost:3000";

class Testing extends React.Component{
    state = {
        boards :[]
    }

    loadingData = async() => {
        try{
            const response = await axios.get("http://localhost:3000/write");
            this.setState({
                //boards : 'test',
                boards : response.data,
            });
            console.log(response.data);
        }catch(e){
            console.log('erorr in loadingData :', e);
        }
    }
    componentDidMount(){
        const {loadingData} = this;
        loadingData();
    }

    render(){
        const board = this.state;   // 왜 this.state.boards 가 아니고?
        console.log(board);
        return(
            <div>
                <h2>hi, i'm testing</h2>
                <p>{JSON.stringify(board)}</p>
            </div>
        );
    }
        
}

export default Testing;