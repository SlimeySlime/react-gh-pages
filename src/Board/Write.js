import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

class Write extends React.Component {
    state = {
        title = '',
        content = '',
    };

    postBoard = async() => {
        const {title, content} = this.state;
        const post = await axios.get("https://localhost:3000/board", {
            title, content
        });

        alert("전송중");
        
    }

    render(){
        return(
            <div>
                write
            </div>
        );
    }
}

export default Write;