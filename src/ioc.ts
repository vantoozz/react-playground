import {Container} from 'inversify';
import TodoRepositoryServiceProvider from "./Todo/Repository/TodoRepositoryServiceProvider";
import getDecorators from "inversify-inject-decorators";

const container = new Container;

const serviceProviders = [
    TodoRepositoryServiceProvider,
];

for (const serviceProvider of serviceProviders) {
    (new serviceProvider(container)).register();
}

const {lazyInject} = getDecorators(container);

export {lazyInject};
