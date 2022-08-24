import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    protected numberOfSlices: number;
    protected slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean = false) {
        super('pizza');

        this.numberOfSlices = numberOfSlices;
        this.spoiled = spoiled;
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten += 1;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return 'you eat a slice of the pizza.'
        }

        return '';
    }
}