import * as React from 'react';
import PageInterface from '../PageInterface';

export default (props: PageInterface) =>
    <div>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is: {props.color}</p>
    </div>
