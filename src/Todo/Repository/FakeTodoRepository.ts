import TodoRepositoryInterface from './TodoRepositoryInterface';
import Item from '../Item';
import * as faker from 'faker'

export default class FakeTodoRepository implements TodoRepositoryInterface {
    public async all(): Promise<Item[]> {

        const list = [];
        for (let i = 0; i < (1 + Math.floor(Math.random() * 5)); i++) {
            list.push(new Item(faker.commerce.product()))
        }
        return list;
    }
}
