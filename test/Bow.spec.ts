import { Bow } from "../src/Bow";

describe('Bow', () => {
    it('should implement constructor properly', () => {
        const bow = new Bow(10, 20);

        expect(bow.getName()).toEqual('bow');
    });

    it('should implement polish method properly', () => {
        const bow = new Bow(10, 20, 1, 0.5, 0.3, 0.1);

        expect(bow.getDurability()).toEqual(0.4);

        bow.polish();

        expect(bow.getDurability()).toEqual(0.9);

        bow.polish(); // not greater then 1
        bow.polish(); // not greater then 1

        expect(bow.getDurability()).toEqual(1);
    });
});
