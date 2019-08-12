var assert = require('assert');
// 如果这里判断第一个参数不等于第二个参数，则会在这里中断
assert.strictEqual(2, 2);
console.log("没有中断");