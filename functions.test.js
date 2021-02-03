const { reverseString, isBalanced, findSurvivor, polishCalc } = require('./functions');

describe("reverseString", function () {
    it("reverses a string", function () {
        expect(reverseString('12345')).toBe('54321');
        expect(reverseString('abcde')).toBe('edcba');
        expect(reverseString('ABCDEFGH')).toBe('HGFEDCBA');
    });
});

describe("isBalanced", function () {
    it("returns true if brackets are balanced", function () {
        expect(isBalanced('hello')).toBe(true);
        expect(isBalanced('(hi) [there]')).toBe(true);
        expect(isBalanced('(hi [there])')).toBe(true);
        expect(isBalanced('(((hi)))')).toBe(true);
    });

    it("returns false if brackets are not balanced", function () {
        expect(isBalanced('(hello')).toBe(false);
        expect(isBalanced('(nope]')).toBe(false);
        expect(isBalanced('((ok) [nope)]')).toBe(false);
    });
});

describe("findSurvivor", function () {
    it("finds the Josephus survivor given a number of people and a number to skip", function () {
        expect(findSurvivor(10, 3)).toBe(4);
        expect(findSurvivor(12, 5)).toBe(1);
        expect(findSurvivor(40, 7)).toBe(24);
    });
});

describe("polishCalc", function () {
    it("evaluates Polish notation expressions correctly", function () {
        expect(polishCalc('+ 1 2')).toBe(3);
        expect(polishCalc('* 2 + 1 2')).toBe(6);
        expect(polishCalc('+ 9 * 2 3')).toBe(15);
        expect(polishCalc('- 1 2')).toBe(-1);
        expect(polishCalc('- 9 * 2 3')).toBe(3);
        expect(polishCalc('/ 6 - 4 2')).toBe(3);
    });
});