let analyze = require('./analysis');

test("analyzer", () => {
    expect(analyze([1,8,3,4,2,6]))
    .toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("analyzer2", () => {
    expect(analyze([0,2,2,4]))
    .toStrictEqual({
        average: 2,
        min: 0,
        max: 4,
        length: 4
    })
})