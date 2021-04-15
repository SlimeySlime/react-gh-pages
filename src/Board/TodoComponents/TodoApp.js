import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';

const GlobalStyle = createGlobalStyle`
    body {
        background : #e9ecef;
    }
`

function TodoApp() {
    return(
        <div>
            <GlobalStyle/>  
            <h3> todo list</h3>
            <TodoTemplate>
                <TodoHead>todo head</TodoHead>
                <TodoList></TodoList>
            </TodoTemplate>
            
        </div>
    );
}

export default TodoApp;
