import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width : 512px;
    height : 700px;
    margin : 0 auto;  // 페이지 중앙 설정방법
    margin-top : 96px;
    margin-bottom : 32px;
    
    position : relative;
    background : white;
    border-radius : 16px;
    box-shadow : 0 0 8px 0 rgba(0, 0, 0, 0.04); // 오

    display : flex;
    flex-direction : column;

`

function TodoTemplate({children}) {
    return(
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
}

export default TodoTemplate;