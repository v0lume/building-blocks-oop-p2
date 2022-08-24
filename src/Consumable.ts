import { Item } from "./Item";

export class Consumable extends Item {
    protected consumed: boolean;
    protected spoiled: boolean;

    constructor();
    constructor(name?);
    constructor(name?, value?, weight?, spoiled = false) {
        super(name, value, weight);

        this.spoiled = spoiled;
        this.setConsumed(false);
    }

    public eat(): string {
        let result = `you eat the ${this.getName()}.`;

        if (this.isSpoiled()) {
            result += '\r\nyou feel sick.';
        }

        return result;
    }

    public use(): string {
        if (this.isConsumed()) {
            return `there is nothing left of the bread to consume.`;
        }

        return this.eat();
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }
}