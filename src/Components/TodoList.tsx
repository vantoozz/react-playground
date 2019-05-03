import * as React from 'react';
import {lazyInject} from "../ioc";
import TodoRepositoryInterface from "../Todo/Repository/TodoRepositoryInterface";
import Item from "../Todo/Item";
import 'reflect-metadata';
import {TodoRepositoryType} from "../Todo/Repository/TodoRepositoryType";

export default class extends React.PureComponent {
    @lazyInject(TodoRepositoryType) private readonly todoRepository!: TodoRepositoryInterface;

    public state = {
        items: [],
    };

    public async componentDidMount(): Promise<void> {
        const items = await this.todoRepository.all();
        this.setState({items: items});
    }

    public render(): React.ReactElement {
        const items = this.state.items;
        return (
            <React.Fragment>
                <h1>Yep?</h1>
                <ul>
                    {items.map((item: Item, index: number): React.ReactElement => {
                        return <li key={index}>{item.description}</li>
                    })}
                </ul>
            </React.Fragment>
        );
    }
}
