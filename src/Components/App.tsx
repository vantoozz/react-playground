import * as React from 'react';
import TodoList from "./TodoList";

export default (props: { color: string }): React.ReactElement =>
    <React.Fragment>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is: {props.color}</p>
        <TodoList/>
    </React.Fragment>
