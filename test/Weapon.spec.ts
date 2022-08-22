import { Weapon } from "../src/Weapon";

class TestWeapon extends Weapon {}

describe('Weapon', () => {
    it('should properly implement toString and constructor', () => {
        const weapon = new TestWeapon('hammer', 300, 2.03, 30.4219, 0.05, 0.7893, 0.05);

        expect(weapon.toString()).toEqual('hammer - value: 300, weight: 2.03, damage: 30.47, durability: 83.93%');
    });

    it('should implement use method properly', () => {
        const weapon = new TestWeapon('hammer', 300, 2.03, 30.4219, 0.05, 0.7893, 0.05);

        expect(weapon.use()).toEqual('you use the hammer, dealing 30.47 points of damage.');
    });

    it('should implement use method properly and update durabilityModifier', () => {
        const weapon = new TestWeapon('hammer', 300, 2.03, 30.4219, 0.05, 0.7893, 0.05);

        expect(weapon.use()).toEqual('you use the hammer, dealing 30.47 points of damage.');
        expect(weapon.use()).toEqual('you use the hammer, dealing 30.47 points of damage. the hammer breaks.');
        expect(weapon.use()).toEqual(`you can't use the hammer, it is broken.`);
    });
});