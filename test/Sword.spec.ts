import { Sword } from "../src/Sword";

describe('Sword', () => {
    it('should implement constructor properly', () => {
        const sword = new Sword(10, 20);

        expect(sword.getName()).toEqual('sword');
    });

    it('should implement polish method properly', () => {
        const sword = new Sword(10, 20, 10, 0.5, 10, 0.5);

        expect(sword.getDamage()).toEqual(10.5);

        sword.polish();

        expect(sword.getDamage()).toEqual(11);

        sword.polish(); // 11.5
        sword.polish(); // 12
        sword.polish(); // 12.5
        sword.polish(); // not greater then 12.5 (25% of base damage)

        expect(sword.getDamage()).toEqual(12.5);
    });
});
