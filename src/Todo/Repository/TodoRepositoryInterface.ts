import Item from "../Item";

export default interface TodoRepositoryInterface {
    all(): Promise<Item[]>;
}
