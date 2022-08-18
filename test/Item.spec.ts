// @ts-nocheck
import { Item } from '../src/Item';

describe('Item', () => {
    beforeEach(() => {
        Item.reset();
    });

    it('should increment ids', () => {
        expect(new Item().getId()).toEqual(1);
        expect(new Item().getId()).toEqual(2);
        expect(Item.numberOfItems()).toEqual(2);
    });

    it('should return 0 when no items was created', () => {
        expect(Item.numberOfItems()).toEqual(0);
    });

    it('should properly implement constructor and getters', () => {
        const item = new Item('mac', 3500, 2.5);

        expect(item.getId()).toEqual(1);
        expect(item.getValue()).toEqual(3500);
        expect(item.getName()).toEqual('mac');
        expect(item.getWeight()).toEqual(2.5);
    });

    it('should properly implement setters', () => {
        const item = new Item();

        item.setValue(2800);
        item.setName('mac mini');
        item.setWeight(1.2);

        expect(item.getId()).toEqual(1);
        expect(item.getValue()).toEqual(2800);
        expect(item.getName()).toEqual('mac mini');
        expect(item.getWeight()).toEqual(1.2);
    });

    it('should properly implement toString', () => {
        expect(new Item().toString()).toEqual('item - value: 0, weight: 0');
    });

    it('should properly implement compareTo', () => {
        const item = new Item();
        const otherGreater = new Item('otherGreater', 12);
        const otherLower = new Item('otherLower', -23);
        const otherName = new Item();

        expect(item.compareTo(otherGreater)).toEqual(-1);
        expect(item.compareTo(otherLower)).toEqual(1);
        expect(item.compareTo(otherName)).toEqual(0);
    })
});