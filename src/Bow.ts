import { Weapon } from "./Weapon";

export class Bow extends Weapon {
    constructor();
    constructor(value?, weight?);
    constructor(value?, weight?, baseDamage?, damageModifier?, baseDurability?, durabilityModifier?)
    constructor(value: number = 0, weight: number = 0, baseDamage: number = 0, damageModifier: number = 0, baseDurability: number = 0, durabilityModifier: number = 0) {
        super('bow', value, weight, baseDamage, damageModifier, baseDurability, durabilityModifier);
    }

    public polish(): void {
        const newDurabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
        const newDurability = this.baseDurability + newDurabilityModifier;

        this.durabilityModifier = newDurability > 1 ? 1 - this.baseDurability : newDurabilityModifier;
    }
};
