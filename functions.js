const Stack = require('./stack');
const Queue = require('./queue');
const LinkedList = require('./linked-list');

const reverseString = (str) => {
    const stack = new Stack;
    for (let i = 0; i < str.length; i++) stack.push(str[i]);
    let newStr = '';
    while (!stack.isEmpty()) newStr += stack.pop();
    return newStr;
}

const isBalanced = (str) => {
    const openBrackets = '({[';
    const closeBrackets = ']})';
    const stack = new Stack;
    for (let i = 0; i < str.length; i++) {
        if (openBrackets.indexOf(str[i]) != -1) stack.push(str[i]);
        else if (closeBrackets.indexOf(str[i]) != -1) {
            const lastBracket = stack.pop();
            if (lastBracket === '(' && str[i] != ')') return false;
            if (lastBracket === '{' && str[i] != '}') return false;
            if (lastBracket === '[' && str[i] != ']') return false;
        }
    }
    return stack.isEmpty();
}

const findSurvivor = (num, interval) => {
    const list = new LinkedList();
    for (let i = 0; i < num; i++) list.push(i + 1);
    let idx = interval - 1;
    interval -= 1;

    while (list.length != 1) {
        list.removeAt(idx);
        idx += interval;
        while (idx >= list.length) idx -= list.length;
    }
    return list.head.val;
}

const polishCalc = (str) => {
    const operators = '+-*/';
    const queue = new Queue;
    for (let i = str.length - 1; i >= 0; i--) if (operators.indexOf(str[i]) != -1 || (str[i] === ' ' && !queue.size)) queue.enqueue(str.slice(i));
    let num = parseInt(queue.dequeue().slice(1));
    while (!queue.isEmpty()) {
        const next = queue.dequeue();
        const nextOp = next[0];
        const nextNum = parseInt(next.slice(2));
        if (nextOp === '+') num += nextNum;
        else if (nextOp === '-') num = nextNum - num;
        else if (nextOp === '*') num *= nextNum;
        else if (nextOp === '/') num = nextNum / num;
    }
    return num;
}

module.exports = { reverseString, isBalanced, findSurvivor, polishCalc };