import { Item } from "../src/Item";
import { ItemWeightComparator } from "../src/ItemWeightComparator";

class TestItem extends Item {
    use() {
        return false;
    }
};

const comparator = new ItemWeightComparator();

describe('ItemWeightComparator', () => {
    it('should properly compare two items and return -1', () => {
        const first = new TestItem('firstitem', 10, 10);
        const second = new TestItem('seconditem', 20, 20);

        expect(comparator.compare(first, second)).toEqual(-1);
    });

    it('should properly compare two items and return 1', () => {
        const first = new TestItem('firstitem', 20, 10);
        const second = new TestItem('seconditem', 10, 10);

        expect(comparator.compare(first, second)).toEqual(1);
    });
});