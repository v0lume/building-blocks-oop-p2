import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    constructor();
    constructor(value?, weight?);
    constructor(value?, weight?, baseDamage?, damageModifier?, baseDurability?, durabilityModifier?)
    constructor(value: number = 0, weight: number = 0, baseDamage: number = 0, damageModifier: number = 0, baseDurability: number = 0, durabilityModifier: number = 0) {
        super('sword', value, weight, baseDamage, damageModifier, baseDurability, durabilityModifier);
    }

    public polish(): void {
        const newDamageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
        const maxDamageModifier = this.baseDamage * 0.25;

        this.damageModifier = newDamageModifier > maxDamageModifier ? maxDamageModifier : newDamageModifier;
    }
}