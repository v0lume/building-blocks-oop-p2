import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    protected items: Array<Item>;

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items = this.items.sort((a, b) => comparator.compare(a, b));
            return;
        }

        this.items = this.items.sort((a, b) => a.getValue() - b.getValue());
    }

    public toString(): string {
        return this.items.map((item) => item.toString()).join(', ');
    }
}
