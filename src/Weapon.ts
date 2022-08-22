import { Item } from "./Item";

export abstract class Weapon extends Item {
    static MODIFIER_CHANGE_RATE = 0.5;

    protected baseDamage: number;
    protected damageModifier: number;
    protected baseDurability: number;
    protected durabilityModifier: number;

    constructor();
    constructor(name?, value?, weight?)
    constructor(name?, value?, weight?, baseDamage?, damageModifier?, baseDurability?, durabilityModifier?)
    constructor(name: string = 'item', value: number = 0, weight: number = 0, baseDamage: number = 0, damageModifier: number = 0, baseDurability: number = 0, durabilityModifier: number = 0) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.damageModifier = damageModifier;
        this.baseDurability = baseDurability;
        this.durabilityModifier = durabilityModifier;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    use(): string {
        const newDurabilityModifier = this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;

        const isBroken = this.getDurability() < 0;
        const isBreaking = newDurabilityModifier && newDurabilityModifier + this.baseDurability < 0;

        this.durabilityModifier = newDurabilityModifier;

        if (isBroken) {
            return `you can't use the hammer, it is broken.`;
        }

        return `you use the hammer, dealing ${this.getDamage().toFixed(2)} points of damage.${isBreaking ? ` the ${this.getName()} breaks.` : ''}`;
    }

    public toString(): string {
        const baseString = super.toString();

        return baseString + `, damage: ${this.getDamage().toFixed(2)}, durability: ${(this.getDurability() * 100).toFixed(2)}%`;
    }
}