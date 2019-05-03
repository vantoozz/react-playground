import ServiceProvider from '../../ServiceProvider';
import {TodoRepositoryType} from "./TodoRepositoryType";
import TodoRepositoryInterface from "./TodoRepositoryInterface";
import FakeTodoRepository from "./FakeTodoRepository";

export default class TodoRepositoryServiceProvider extends ServiceProvider {
    public register(): void {
        this.container.bind(TodoRepositoryType).toDynamicValue((): TodoRepositoryInterface => {
            return new FakeTodoRepository;
        });
    }

}
