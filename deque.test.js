const Deque = require("./deque");

let deque;

beforeEach(function () {
    deque = new Deque();
});

describe("push", function () {
    it("places the value at the end of the deque and returns undefined", function () {
        expect(deque.push(10)).toBe(undefined);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(10);
        deque.push(100);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(100);
        deque.push(1000);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(1000);
    });
});

describe("pop", function () {
    it("returns the value of the node removed", function () {
        deque.push(10);
        deque.push(100);
        deque.push(1000);
        var removed = deque.pop();
        expect(removed).toBe(1000);
        expect(deque.size).toBe(2);
        deque.pop();
        deque.pop();
        expect(deque.size).toBe(0);
    });

    it("throws an error if the deque is empty", function () {
        expect(() => deque.pop()).toThrow(Error);
    });
});

describe("unshift", function () {
    it("places the value at the beginning of the deque and returns undefined", function () {
        expect(deque.unshift(10)).toBe(undefined);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(10);
        deque.unshift(100);
        expect(deque.first.val).toBe(100);
        expect(deque.last.val).toBe(10);
        deque.unshift(1000);
        expect(deque.first.val).toBe(1000);
        expect(deque.last.val).toBe(10);
    });
});

describe("shift", function () {
    it("returns the value of the node removed", function () {
        deque.push(10);
        deque.push(100);
        deque.push(1000);
        var removed = deque.shift();
        expect(removed).toBe(10);
        expect(deque.size).toBe(2);
        deque.shift();
        deque.shift();
        expect(deque.size).toBe(0);
    });

    it("throws an error if the deque is empty", function () {
        expect(() => deque.shift()).toThrow(Error);
    });
});

describe("peekRight", function () {
    it("returns the value at the end of the deque", function () {
        deque.push(3);
        expect(deque.peekRight()).toBe(3);
        deque.push(5);
        expect(deque.peekRight()).toBe(5);
    });
});

describe("peekLeft", function () {
    it("returns the value at the start of the deque", function () {
        deque.push(3);
        expect(deque.peekLeft()).toBe(3);
        deque.push(5);
        expect(deque.peekLeft()).toBe(3);
    });
});

describe("isEmpty", function () {
    it("returns true for empty deques", function () {
        expect(deque.isEmpty()).toBe(true);
    });

    it("returns false for nonempty deques", function () {
        deque.push(3);
        expect(deque.isEmpty()).toBe(false);
    });
});
