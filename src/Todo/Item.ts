export default class {

    private readonly _description: string;

    public constructor(description: string) {
        this._description = description;
    }

    public get description(): string {
        return this._description;
    }
}
