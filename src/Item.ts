import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    protected id: number;
    protected value: number;
    protected name: string;
    protected weight: number;

    constructor();
    constructor(name: string = 'item', value: number = 0, weight: number = 0) {
        const nextId = id + 1;

        id = nextId;
        this.id = nextId;

        this.value = value;
        this.name = name;
        this.weight = weight;
    }

    abstract use(): void;

    static reset() {
        id = 0;
    }

    static numberOfItems() {
        return id;
    }

    getId(): number {
        return this.id;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getWeight(): number {
        return this.weight;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }

    public toString(): string {
        return `${this.name} - value: ${this.value}, weight: ${this.weight}`;
    }

    public compareTo(other: Item): number {
        if (this.value > other.getValue()) {
            return 1;
        }

        if (this.value < other.getValue()) {
            return -1;
        }

        return this.name.toUpperCase().localeCompare(other.getName().toUpperCase());
    }

    // your code goes here
}
