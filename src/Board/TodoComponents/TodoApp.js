import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

import {TodoProvider} from './TodoContext';


const GlobalStyle = createGlobalStyle`
    body {
        background : #e9ecef;
    }
`

function TodoApp() {
    return(
        <div>
        <TodoProvider>
            <GlobalStyle/>  
            <TodoTemplate>
                <TodoHead>todo head</TodoHead>
                <TodoList></TodoList>
                <TodoCreate></TodoCreate>
            </TodoTemplate>
        </TodoProvider>
        </div>
    );
}

export default TodoApp;
