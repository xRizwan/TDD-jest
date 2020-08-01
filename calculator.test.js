let calculator = require('./calculator');

test("sum1", () => {
    expect(calculator.sum(5,5))
    .toBe(10);
})

test("sum2", () => {
    expect(calculator.sum(15,5))
    .toBe(20);
})

test("multiply", () => {
    expect(calculator.multiply(5,5))
    .toBe(25);
})

test("divide", () => {
    expect(calculator.divide(10,5))
    .toBe(2);
})

test("subtract", () => {
    expect(calculator.sub(10,5))
    .toBe(5);
})